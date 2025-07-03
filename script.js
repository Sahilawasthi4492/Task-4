function addNote() {
  const input = document.getElementById("noteInput");
  const note = input.value.trim();
  if (note === "") return;

  let notes = JSON.parse(localStorage.getItem("notes")) || [];
  notes.push(note);
  localStorage.setItem("notes", JSON.stringify(notes));
  input.value = "";
  showNotes();
}

function showNotes() {
  const list = document.getElementById("noteList");
  list.innerHTML = "";
  let notes = JSON.parse(localStorage.getItem("notes")) || [];

  notes.forEach((note, index) => {
    let li = document.createElement("li");
    li.textContent = note;
    let delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.onclick = () => {
      notes.splice(index, 1);
      localStorage.setItem("notes", JSON.stringify(notes));
      showNotes();
    };
    li.appendChild(delBtn);
    list.appendChild(li);
  });
}

function filterProjects(type) {
  const cards = document.querySelectorAll(".project-card");
  cards.forEach(card => {
    card.style.display = type === "all" || card.dataset.type === type ? "block" : "none";
  });
}

window.onload = showNotes;
