
const loginBtn = document.getElementById("loginBtn");
const logoutBtn = document.getElementById("logoutBtn");
const trackerDiv = document.getElementById("tracker");
const habitTableBody = document.querySelector("#habitTable tbody");
const saveBtn = document.getElementById("saveBtn");
const weekTotalP = document.getElementById("weekTotal");

const defaultHabits = ["Exercise","Read","Meditate","Sleep 8h"];
const days = ["Sat","Sun","Mon","Tue","Wed","Thu","Fri"];
let habits = [];
let weekKey;

// --- Helper to calculate current week (Sat-Fri) ---
function getWeekStart(date) {
  const day = date.getDay(); // 0=Sun, 6=Sat
  const diff = (day === 6) ? 0 : -((day + 1) % 7);
  const saturday = new Date(date);
  saturday.setDate(date.getDate() + diff);
  saturday.setHours(0,0,0,0);
  return saturday;
}

function formatWeekKey(date) {
  const y = date.getFullYear();
  const m = date.getMonth()+1;
  const d = date.getDate();
  return `${y}-${m}-${d}`;
}

// --- Render table ---
function renderTable() {
  habitTableBody.innerHTML = "";
  habits.forEach((habit,i) => {
    const tr = document.createElement("tr");
    const tdName = document.createElement("td");
    tdName.innerText = habit.name;
    tr.appendChild(tdName);

    days.forEach((day,j) => {
      const td = document.createElement("td");
      const cb = document.createElement("input");
      cb.type = "checkbox";
      cb.checked = habit.done[j];
      cb.dataset.habitIndex = i;
      cb.dataset.dayIndex = j;
      cb.onchange = () => updateTotals();
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
  habits.forEach((habit,i) => {
    habit.done = Array.from(document.querySelectorAll(`#habitTable tbody tr:nth-child(${i+1}) input`))
                       .map(cb => cb.checked);
    document.getElementById(`total-${i}`).innerText = habit.done.filter(v=>v).length;
  });
  const totalCompleted = habits.reduce((sum,h)=>sum+h.done.filter(v=>v).length,0);
  weekTotalP.innerText = `Total completed this week: ${totalCompleted}`;
}

// --- Initialize a new week ---
function initWeek() {
  habits = defaultHabits.map(name => ({ name, done: [false,false,false,false,false,false,false] }));
  renderTable();
}

// --- Load week from Firestore ---
async function loadWeek(uid) {
  const today = new Date();
  const saturday = getWeekStart(today);
  weekKey = formatWeekKey(saturday);
  const docRef = db.collection("users").doc(uid).collection("weeks").doc(weekKey);
  const docSnap = await docRef.get();
  if(docSnap.exists){
    habits = docSnap.data().habits;
  } else {
    initWeek();
  }
  renderTable();
}

// --- Save week to Firestore ---
async function saveWeek(uid) {
  const docRef = db.collection("users").doc(uid).collection("weeks").doc(weekKey);
  const totalCompleted = habits.reduce((sum,h)=>sum+h.done.filter(v=>v).length,0);
  await docRef.set({ habits, totalCompleted });
  alert(`Progress saved! Total completed this week: ${totalCompleted}`);
}

// --- Auth ---
loginBtn.onclick = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  auth.signInWithPopup(provider);
};

logoutBtn.onclick = () => auth.signOut();

auth.onAuthStateChanged(user => {
  if(user){
    loginBtn.style.display = "none";
    logoutBtn.style.display = "block";
    trackerDiv.style.display = "block";
    loadWeek(user.uid);
    saveBtn.onclick = () => saveWeek(user.uid);
  } else {
    loginBtn.style.display = "block";
    logoutBtn.style.display = "none";
    trackerDiv.style.display = "none";
  }
});
