// ----- La mention -----
const note = 15;

if (note >= 16) {
  console.log("Mention : Très bien 🥇");
} else if (note >= 14) {
  console.log("Mention : Bien 🥈");
} else if (note >= 12) {
  console.log("Mention : Assez bien 🥉");
} else if (note >= 10) {
  console.log("Mention : Passable");
} else {
  console.log("Pas encore… courage ! 💪");
}

// ----- La météo -----
const temperature = 24;
if (temperature >= 30) {
  console.log("Il fait chaud : plage ! 🏖️");
} else if (temperature >= 18) {
  console.log("Il fait bon : balade 🚶");
} else {
  console.log("Il fait froid : chocolat chaud ☕");
}

// ----- Le portier -----
const age = 11;
const aPaye = true;
const estAccompagne = true;
if (aPaye && (age >= 12 || estAccompagne)) {
  console.log("Bienvenue à la salle de jeux ! 🎮");
} else {
  console.log("Désolé, tu ne peux pas entrer.");
}

// ----- Pierre, feuille, ciseaux -----
const joueur1 = "pierre";
const joueur2 = "ciseaux";
if (joueur1 === joueur2) {
  console.log("Égalité !");
} else if (
  (joueur1 === "pierre" && joueur2 === "ciseaux") ||
  (joueur1 === "feuille" && joueur2 === "pierre") ||
  (joueur1 === "ciseaux" && joueur2 === "feuille")
) {
  console.log("Le joueur 1 gagne !");
} else {
  console.log("Le joueur 2 gagne !");
}
