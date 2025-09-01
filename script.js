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
  weekTo
