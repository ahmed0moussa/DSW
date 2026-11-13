// Colorer les notes automatiquement
const notes = document.querySelectorAll(".note");
let nombreReussies = 0;

for (const note of notes) {
  const valeur = Number(note.textContent);

  if (valeur >= 10) {
    note.classList.add("reussi");
    nombreReussies++;
  } else {
    note.classList.add("echec");
  }

  if (valeur >= 16) {
    note.classList.add("excellent");
  }
}

// Un bilan écrit et coloré avec style
const bilan = document.querySelector("#bilan");
bilan.textContent = `${nombreReussies} matières réussies sur ${notes.length}.`;
bilan.style.fontWeight = "bold";
bilan.style.color = "#288b8b";

// Faire apparaître le message caché
document.querySelector(".secret").classList.remove("cache");
