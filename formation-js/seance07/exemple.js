// 1. Le titre change selon l'heure
const titre = document.querySelector("#titre");
const heure = new Date().getHours();

if (heure < 12) {
  titre.textContent = "Bonjour ☀️ Voici la fiche de la joueuse";
} else if (heure < 18) {
  titre.textContent = "Bon après-midi 🌤️ Voici la fiche de la joueuse";
} else {
  titre.textContent = "Bonsoir 🌙 Voici la fiche de la joueuse";
}

// 2. On remplit la fiche avec des variables
const nom = "Lina";
const anneeNaissance = 2011;
const score = 1250;

document.querySelector("#nom").textContent = nom;
document.querySelector("#age").textContent = 2026 - anneeNaissance;
document.querySelector("#score").textContent = score;

// 3. On change l'image
const photo = document.querySelector("#photo");
photo.src = "https://picsum.photos/seed/joueuse/320/200";
photo.alt = "Photo de " + nom;

// 4. Une étoile devant chaque qualité
const qualites = document.querySelectorAll(".qualite");
for (const qualite of qualites) {
  qualite.textContent = "⭐ " + qualite.textContent;
}
