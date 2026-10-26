// Les données : un tableau
const playlist = ["Calme", "Bella", "Dynamite", "Habibi", "Ya Lili"];
let enCours = -1;   // aucun titre en écoute au départ

const liste = document.querySelector("#liste");
const info = document.querySelector("#info");

// Afficher tout le tableau dans la page
function afficher() {
  liste.innerHTML = "";
  for (let i = 0; i < playlist.length; i++) {
    const li = document.createElement("li");
    li.textContent = (i + 1) + ". 🎵 " + playlist[i];
    if (i === enCours) {
      li.classList.add("en-cours");
    }
    liste.append(li);
  }
  info.textContent = playlist.length + " titres dans ta playlist";
}

// Ajouter un titre
document.querySelector("#formulaire").addEventListener("submit", function (e) {
  e.preventDefault();
  const champ = document.querySelector("#titre");
  const titre = champ.value.trim();
  if (titre === "") return;
  if (playlist.includes(titre)) {
    info.textContent = "« " + titre + " » est déjà dans ta playlist !";
    return;
  }
  playlist.push(titre);
  champ.value = "";
  afficher();
});

// Lecture au hasard
document.querySelector("#hasard").addEventListener("click", function () {
  enCours = Math.floor(Math.random() * playlist.length);
  document.querySelector("#ecoute").textContent = "▶️ En écoute : " + playlist[enCours];
  afficher();
});

afficher();
