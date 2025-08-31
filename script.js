const auth = firebase.auth();
const db = firebase.firestore();

const loginBtn = document.getElementById("loginBtn");
const logoutBtn = document.getElementById("logoutBtn");
const trackerDiv = document.getElementById("tracker");
const habitList = document.getElementById("habitList");
const saveBtn = document.getElementById("saveBtn");

// Default habits
const defaultHabits = ["Exercise", "Read", "Meditate", "Sleep 8h"];

// Login/logout
loginBtn.onclick = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  auth.signInWithPopup(provider);
};

logoutBtn.onclick = () => auth.signOut();

// Auth state change
auth.onAuthStateChanged(async user => {
  if(user){
    loginBtn.style.display = "none";
    logoutBtn.style.display = "block";
    trackerDiv.style.display = "block";

    // Load user habits
    const docRef = db.collection("users").doc(user.uid);
    const docSnap = await docRef.get();
    let habits = defaultHabits.map(h => ({name: h, done: false}));
    if(docSnap.exists){
      habits = docSnap.data().habits;
    }

    // Render habit checkboxes
    habitList.innerHTML = "";
    habits.forEach((h,i)=>{
      const li = document.createElement("li");
      li.innerHTML = `<input type="checkbox" id="habit${i}" ${h.done ? "checked" : ""}> ${h.name}`;
      habitList.appendChild(li);
    });

    // Save button
    saveBtn.onclick = async () => {
      const updatedHabits = defaultHabits.map((h,i)=>{
        return { name: h, done: document.getElementById(`habit${i}`).checked };
      });
      await docRef.set({habits: updatedHabits});
      alert("Progress saved!");
    };

  } else {
    loginBtn.style.display = "block";
    logoutBtn.style.display = "none";
    trackerDiv.style.display = "none";
  }
});
