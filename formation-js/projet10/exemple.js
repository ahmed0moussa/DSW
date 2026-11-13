const formulaire = document.querySelector("#inscription");
const info = document.querySelector("#info");

// Afficher un message sous le formulaire
function afficherMessage(texte, classe) {
  info.textContent = texte;
  info.className = classe;
}

formulaire.addEventListener("submit", function (e) {
  e.preventDefault();   // la page ne se recharge pas

  const pseudo = document.querySelector("#pseudo");
  const age = document.querySelector("#age");
  const email = document.querySelector("#email");
  const reglement = document.querySelector("#reglement");

  // On enlève les anciennes erreurs
  for (const champ of [pseudo, age, email]) {
    champ.classList.remove("champ-erreur");
  }

  if (pseudo.value.trim().length < 3) {
    pseudo.classList.add("champ-erreur");
    afficherMessage("❌ Ton pseudo doit avoir au moins 3 lettres.", "erreur");
  } else if (Number(age.value) < 10 || Number(age.value) > 18) {
    age.classList.add("champ-erreur");
    afficherMessage("❌ Le tournoi est pour les 10-18 ans.", "erreur");
  } else if (!email.value.includes("@")) {
    email.classList.add("champ-erreur");
    afficherMessage("❌ Ton email doit contenir un @.", "erreur");
  } else if (!reglement.checked) {
    afficherMessage("❌ Tu dois accepter le règlement.", "erreur");
  } else {
    afficherMessage("✅ Bravo " + pseudo.value.trim() + ", tu es inscrit(e) au tournoi !", "succes");
  }
});

// Le compteur de caractères en direct
const message = document.querySelector("#message");
const compteur = document.querySelector("#compteur");
message.addEventListener("input", function () {
  const n = message.value.length;
  compteur.textContent = n + " / 100";
  compteur.className = "";
  if (n >= 100) {
    compteur.classList.add("limite");
  } else if (n >= 90) {
    compteur.classList.add("attention");
  }
});
