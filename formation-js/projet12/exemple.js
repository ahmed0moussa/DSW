const formulaire = document.querySelector("#formulaire");
const champ = document.querySelector("#champ");
const priorite = document.querySelector("#priorite");
const liste = document.querySelector("#taches");
const compteur = document.querySelector("#compteur");

// Compter les tâches qui ne sont pas encore faites
function mettreAJourCompteur() {
  const total = liste.querySelectorAll("li").length;
  const restantes = liste.querySelectorAll("li:not(.fait)").length;
  if (total === 0) {
    compteur.textContent = "Rien à faire, bravo ! 🎉";
  } else {
    compteur.textContent = restantes + " tâche(s) restante(s) sur " + total;
  }
}

// Créer une tâche et l'ajouter à la liste
function creerTache(texte, niveau) {
  const li = document.createElement("li");
  li.classList.add(niveau);

  const span = document.createElement("span");
  span.textContent = texte;
  span.addEventListener("click", function () {
    li.classList.toggle("fait");
    mettreAJourCompteur();
  });

  const supprimer = document.createElement("button");
  supprimer.textContent = "✖";
  supprimer.addEventListener("click", function () {
    li.remove();
    mettreAJourCompteur();
  });

  li.append(span, supprimer);

  // Les tâches urgentes en haut
  if (niveau === "urgent") {
    liste.prepend(li);
  } else {
    liste.append(li);
  }
}

formulaire.addEventListener("submit", function (e) {
  e.preventDefault();
  const texte = champ.value.trim();
  if (texte === "") return;
  creerTache(texte, priorite.value);
  champ.value = "";
  champ.focus();
  mettreAJourCompteur();
});

document.querySelector("#nettoyer").addEventListener("click", function () {
  for (const tache of liste.querySelectorAll(".fait")) {
    tache.remove();
  }
  mettreAJourCompteur();
});

// Quelques tâches pour commencer
creerTache("Réviser les maths", "urgent");
creerTache("Ranger ma chambre", "normal");
creerTache("Regarder un tuto JavaScript", "tranquille");
mettreAJourCompteur();
