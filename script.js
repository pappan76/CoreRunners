// DOM Elements
const loginBtn = document.getElementById("loginBtn");
const logoutBtn = document.getElementById("logoutBtn");
const trackerDiv = document.getElementById("tracker");
const habitTableBody = document.querySelector("#habitTable tbody");
const saveBtn = document.getElementById("saveBtn");
const weekTotalP = document.getElementById("weekTotal");
const leaderboardTable = document.getElementById("leaderboard");
const leaderboardTitle = document.getElementById("leaderboardTitle");

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
  try {
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
  } catch(error){
    console.error("Error rendering table:", error);
  }
}

function updateTotals() {
  try {
    habits.forEach((habit,i)=>{
      habit.done = Array.from(document.querySelectorAll(`#habitTable tbody tr:nth-child(${i+1}) input`))
                         .map(cb=>cb.checked);
      document.getElementById(`total-${i}`).innerText = habit.done.filter(v=>v).length;
    });
    const totalCompleted = habits.reduce((sum,h)=>sum+h.done.filter(v=>v).length,0);
    weekTotalP.innerText = `Total completed this week: ${totalCompleted}`;
  } catch(error){
    console.error("Error updating totals:", error);
  }
}

// --- Initialize week ---
function initWeek() {
  habits = defaultHabits.map(name => ({ name, done: [false,false,false,false,false,false,false] }));
  renderTable();
}

// --- Ensure user profile ---
async function ensureUserProfile(user) {
  try {
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
  } catch(error){
    console.error("Error ensuring user profile:", error);
  }
}

// --- Load week from Firestore ---
async function loadWeek(uid){
  try {
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
  } catch(error){
    console.error("Error loading week:", error);
  }
}

// --- Save week to Firestore ---
async function saveWeek(uid){
  try {
    const docRef = db.collection("users").doc(uid).collection("weeks").doc(weekKey);
    const totalCompleted = habits.reduce((sum,h)=>sum+h.done.filter(v=>v).length,0);
    await docRef.set({ habits, total: totalCompleted });
    alert(`Progress saved! Total completed this week: ${totalCompleted}`);
  } catch(error){
    console.error("Error saving week:", error);
    alert("Error saving progress. Please try again.");
  }
}

// --- Load leaderboard in real-time with try-catch ---
function loadLeaderboard(currentUid) {
  try {
    db.collection("users").onSnapshot(async (snapshot) => {
      try {
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
      } catch(innerError){
        console.error("Error updating leaderboard snapshot:", innerError);
      }
    });
  } catch(error){
    console.warn("Could not load leaderboard:", error);
    leaderboardTable.innerHTML = `<tr><td colspan="3">Leaderboard unavailable (check adblocker)</td></tr>`;
  }
}

// --- Auth ---
loginBtn.onclick = ()=>{
  try {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  } catch(error){
    console.error("Login error:", error);
  }
};

logoutBtn.onclick = ()=>{
  try {
    auth.signOut();
  } catch(error){
    console.error("Logout error:", error);
  }
};

auth.onAuthStateChanged(async (user)=>{
  try {
    if(user){
      await ensureUserProfile(user);
      loginBtn.style.display = "none";
      logoutBtn.style.display = "block";
      trackerDiv.style.display = "block";
      leaderboardTitle.style.display = "block";
      leaderboardTable.style.display = "table";

      await loadWeek(user.uid);
      loadLeaderboard(user.uid);
    } else {
      loginBtn.style.display = "block";
      logoutBtn.style.display = "none";
      trackerDiv.style.display = "none";
      leaderboardTitle.style.display = "none";
      leaderboardTable.style.display = "none";
    }
  } catch(error){
    console.error("Error handling auth state:", error);
  }
});
