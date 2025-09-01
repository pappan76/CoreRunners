// DOM Elements
const loginBtn = document.getElementById("loginBtn");
const logoutBtn = document.getElementById("logoutBtn");
const trackerDiv = document.getElementById("tracker");
const habitTableBody = document.querySelector("#habitTable tbody");
const saveBtn = document.getElementById("saveBtn");
const weekTotalP = document.getElementById("weekTotal");
const leaderboardTable = document.getElementById("leaderboard");

// Default habits
const defaultHabits = ["Exercise","Read","Meditate","Sleep 8h"];
const days = ["Sat","Sun","Mon","Tue","Wed","Thu","Fri"];
let habits = [];
let weekKey;

// --- Week calculation ---
function getWeekStart(date) {
  const day = date.getDay();
  const diff = (day === 6) ? 0 : -((day + 1) % 7);
  const saturday = new Date(date);
  saturday.setDate(date.getDate() + diff);
  saturday.setHours(0,0,0,0);
  return saturday;
}

function formatWeekKey(date) {
  return `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`;
}

// --- Render table ---
function renderTable() {
  habitTableBody.innerHTML = "";
  habits.forEach((habit,i)=>{
    const tr = document.createElement("tr");
    const tdName = document.createElement("td");
    tdName.innerText = habit.name;
    tr.appendChild(tdName);

    days.forEach((day,j)=>{
      const td = document.createElement("td");
      const cb = document.createElement("input");
      cb.type = "checkbox";
      cb.checked = habit.done[j];
      cb.dataset.habitIndex = i;
      cb.dataset.dayIndex = j;
      cb.onchange = updateTotals;
      td.appendChild(cb);
      tr.appendChild(td);
    });

    const tdTotal = document.createElement("td");
    tdTotal.id = `total-${i}`;
    tdTotal.innerText = habit.done.filter(v=>v).length;
    tr.appendChild(tdTotal);

    habitTableBody.appendChild(tr);
  });
  updateTotals();
}

function updateTotals() {
  habits.forEach((habit,i)=>{
    habit.done = Array.from(document.querySelectorAll(`#habitTable tbody tr:nth-child(${i+1}) input`))
                       .map(cb=>cb.checked);
    document.getElementById(`total-${i}`).innerText = habit.done.filter(v=>v).length;
  });
  const totalCompleted = habits.reduce((sum,h)=>sum+h.done.filter(v=>v).length,0);
  weekTotalP.innerText = `Total completed this week: ${totalCompleted}`;
}

// --- Initialize week ---
function initWeek() {
  habits = defaultHabits.map(name => ({ name, done: [false,false,false,false,false,false,false] }));
  renderTable();
}

// --- Ensure user profile ---
async function ensureUserProfile(user) {
  const userRef = db.collection("users").doc(user.uid);
  const docSnap = await userRef.get();

  if (!docSnap.exists) {
    const firstName = prompt("Enter your first name:");
    const lastName = prompt("Enter your last name:");

    await userRef.set({
      firstName,
      lastName,
      email: user.email
    });
  }
}

// --- Load week from Firestore ---
async function loadWeek(uid){
  const saturday = getWeekStart(new Date());
  weekKey = formatWeekKey(saturday);
  const docRef = db.collection("users").doc(uid).collection("weeks").doc(weekKey);
  const docSnap = await docRef.get();
  if(docSnap.exists){
    habits = docSnap.data().habits;
  } else {
    initWeek();
  }
  renderTable();
  saveBtn.onclick = ()=>saveWeek(uid);
}

// --- Save week to Firestore ---
async function saveWeek(uid){
  const docRef = db.collection("users").doc(uid).collection("weeks").doc(weekKey);
  const totalCompleted = habits.reduce((sum,h)=>sum+h.done.filter(v=>v).length,0);
  await docRef.set({ habits, total: totalCompleted });
  alert(`Progress saved! Total completed this week: ${totalCompleted}`);
}

// --- Load leaderboard in real-time with try-catch ---
function loadLeaderboard(currentUid) {
  const weekKey = formatWeekKey(getWeekStart(new Date()));

  try {
    db.collection("users").onSnapshot(async (snapshot) => {
      const leaderboardData = [];

      for (const doc of snapshot.docs) {
        const userId = doc.id;
        const { firstName, lastName } = doc.data();

        const weekSnap = await db.collection("users")
          .doc(userId)
          .collection("weeks")
          .doc(weekKey)
          .get();

        if (weekSnap.exists) {
          leaderboardData.push({
            uid: userId,
            name: `${firstName} ${lastName}`,
            total: weekSnap.data().total
          });
        }
      }

      leaderboardData.sort((a, b) => b.total - a.total);

      leaderboardTable.innerHTML = `
        <tr><th>Rank</th><th>Name</th><th>Total Habits</th></tr>
        ${leaderboardData.map((u, index) => `
          <tr ${u.uid === currentUid ? 'style="background-color:#d4f0ff;font-weight:bold;"' : ''}>
            <td>${index + 1}</td>
            <td>${u.name}</td>
            <td>${u.total}</td>
          </tr>
        `).join("")}
      `;
    });
  } catch (error) {
    console.warn("Could not load leaderboard:", error);
    leaderboardTable.innerHTML = `<tr><td colspan="3">Leaderboard unavailable (check adblocker)</td></tr>`;
  }
}

// --- Auth ---
loginBtn.onclick = ()=>{
  const provider = new firebase.auth.GoogleAuthProvider();
  auth.signInWithPopup(provider);
};

logoutBtn.onclick = ()=>auth.signOut();

auth.onAuthStateChanged(async (user)=>{
  if(user){
    await ensureUserProfile(user);
    loginBtn.style.display = "none";
    logoutBtn.style.display = "block";
    trackerDiv.style.display = "block";
    await loadWeek(user.uid);
    loadLeaderboard(user.uid);
  } else {
    loginBtn.style.display = "block";
    logoutBtn.style.display = "none";
    trackerDiv.style.display = "none";
  }
});
