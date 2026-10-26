// ----- Les données -----
const questions = [
  { question: "Quelle balise HTML crée un lien ?", choix: ["<p>", "<a>", "<img>", "<link>"], bonne: 1 },
  { question: "Quelle propriété CSS change la couleur du texte ?", choix: ["background", "font-size", "color", "border"], bonne: 2 },
  { question: "Comment afficher un message dans la console ?", choix: ["print()", "console.log()", "alert.console()", "echo"], bonne: 1 },
  { question: "Quel est l'indice du premier élément d'un tableau ?", choix: ["0", "1", "-1", "Ça dépend"], bonne: 0 },
  { question: "Quel mot crée une variable qui ne change pas ?", choix: ["let", "var", "const", "fixe"], bonne: 2 },
  { question: "Quel événement se produit quand on clique ?", choix: ["press", "click", "touch", "mouse"], bonne: 1 }
];

// ----- L'état du jeu -----
let numero = 0;
let score = 0;

const zoneChoix = document.querySelector("#choix");
const boutonRejouer = document.querySelector("#rejouer");

function afficherRecord() {
  const record = Number(localStorage.getItem("recordQuiz") || 0);
  document.querySelector("#record").textContent = "🏆 Meilleur score : " + record + " / " + questions.length;
}

function afficherQuestion() {
  const q = questions[numero];
  document.querySelector("#progression").textContent = `Question ${numero + 1} / ${questions.length}`;
  document.querySelector("#question").textContent = q.question;
  zoneChoix.innerHTML = "";
  q.choix.forEach(function (texte, i) {
    const bouton = document.createElement("button");
    bouton.textContent = texte;
    bouton.addEventListener("click", function () {
      repondre(i, bouton);
    });
    zoneChoix.append(bouton);
  });
}

function repondre(i, bouton) {
  const q = questions[numero];
  if (i === q.bonne) {
    score++;
    bouton.classList.add("juste");
  } else {
    bouton.classList.add("faux");
    zoneChoix.children[q.bonne].classList.add("juste");   // on montre la bonne réponse
  }
  for (const b of zoneChoix.querySelectorAll("button")) {
    b.disabled = true;
  }
  setTimeout(questionSuivante, 1000);
}

function questionSuivante() {
  numero++;
  if (numero < questions.length) {
    afficherQuestion();
  } else {
    afficherFin();
  }
}

function afficherFin() {
  document.querySelector("#progression").textContent = "Terminé !";
  document.querySelector("#question").textContent = "Ton score : " + score + " / " + questions.length;
  zoneChoix.innerHTML = "";
  let message;
  if (score === questions.length) {
    message = "Parfait ! Tu es un(e) vrai(e) développeur/développeuse ! 🏆";
  } else if (score >= questions.length / 2) {
    message = "Pas mal du tout ! 👍";
  } else {
    message = "Relis tes fiches et retente ta chance 💪";
  }
  document.querySelector("#resultat").textContent = message;

  const record = Number(localStorage.getItem("recordQuiz") || 0);
  if (score > record) {
    localStorage.setItem("recordQuiz", score);
  }
  afficherRecord();
  boutonRejouer.classList.remove("cache");
}

boutonRejouer.addEventListener("click", function () {
  numero = 0;
  score = 0;
  document.querySelector("#resultat").textContent = "";
  boutonRejouer.classList.add("cache");
  afficherQuestion();
});

afficherRecord();
afficherQuestion();
