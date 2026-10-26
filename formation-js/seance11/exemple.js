const formulaire = document.querySelector("#formulaire");
const champPrenom = document.querySelector("#prenom");
const champMessage = document.querySelector("#message");
const messages = document.querySelector("#messages");
const compteur = document.querySelector("#compteur");

function mettreAJourCompteur() {
  const n = messages.querySelectorAll(".message").length;
  compteur.textContent = n === 0 ? "Aucun message pour l'instant." : n + " message(s)";
}

formulaire.addEventListener("submit", function (e) {
  e.preventDefault();

  // 1. Créer la carte
  const carte = document.createElement("article");
  carte.classList.add("carte", "message");

  // 2. La remplir (textContent : on n'utilise pas innerHTML avec le texte du visiteur)
  const titre = document.createElement("strong");
  titre.textContent = champPrenom.value.trim();
  const texte = document.createElement("p");
  texte.textContent = champMessage.value.trim();
  const heure = document.createElement("span");
  heure.classList.add("heure");
  heure.textContent = "Publié à " + new Date().toLocaleTimeString();

  // Un bouton like avec son propre compteur
  let likes = 0;
  const like = document.createElement("button");
  like.classList.add("like");
  like.textContent = "❤️ 0";
  like.addEventListener("click", function () {
    likes++;
    like.textContent = "❤️ " + likes;
  });

  // Un bouton pour supprimer
  const supprimer = document.createElement("button");
  supprimer.classList.add("supprimer");
  supprimer.textContent = "✖";
  supprimer.addEventListener("click", function () {
    carte.remove();
    mettreAJourCompteur();
  });

  carte.append(titre, texte, heure, document.createElement("br"), like, supprimer);

  // 3. L'ajouter en haut de la liste
  messages.prepend(carte);

  formulaire.reset();     // vide les champs
  champPrenom.focus();
  mettreAJourCompteur();
});
