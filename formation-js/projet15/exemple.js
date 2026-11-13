// ===== Le chronomètre =====
let secondes = 0;
let minuteur = null;
const chrono = document.querySelector("#chrono");

function deuxChiffres(n) {
  return String(n).padStart(2, "0");
}

function afficherChrono() {
  const min = Math.floor(secondes / 60);
  const sec = secondes % 60;
  chrono.textContent = deuxChiffres(min) + ":" + deuxChiffres(sec);
}

document.querySelector("#demarrer").addEventListener("click", function () {
  if (minuteur !== null) return;   // déjà lancé
  minuteur = setInterval(function () {
    secondes++;
    afficherChrono();
  }, 1000);
});

document.querySelector("#pause").addEventListener("click", function () {
  clearInterval(minuteur);
  minuteur = null;
});

document.querySelector("#zero").addEventListener("click", function () {
  secondes = 0;
  afficherChrono();
});

// ===== Le diaporama =====
const images = [
  "https://picsum.photos/seed/diapo0/480/260",
  "https://picsum.photos/seed/diapo1/480/260",
  "https://picsum.photos/seed/diapo2/480/260",
  "https://picsum.photos/seed/diapo3/480/260"
];
let numero = 0;
const diapo = document.querySelector("#diapo");
const boutonLecture = document.querySelector("#lecture");

function imageSuivante() {
  numero = (numero + 1) % images.length;   // revient à 0 après la dernière
  diapo.src = images[numero];
}

let defilement = setInterval(imageSuivante, 3000);

boutonLecture.addEventListener("click", function () {
  if (defilement === null) {
    defilement = setInterval(imageSuivante, 3000);
    boutonLecture.textContent = "⏸ Pause";
  } else {
    clearInterval(defilement);
    defilement = null;
    boutonLecture.textContent = "▶ Lecture";
  }
});

// ===== Le thème qui se souvient (localStorage) =====
const boutonTheme = document.querySelector("#theme");

function appliquerTheme(theme) {
  if (theme === "sombre") {
    document.body.classList.add("sombre");
    boutonTheme.textContent = "☀️ Mode clair";
  } else {
    document.body.classList.remove("sombre");
    boutonTheme.textContent = "🌙 Mode sombre";
  }
}

appliquerTheme(localStorage.getItem("theme"));

boutonTheme.addEventListener("click", function () {
  const nouveau = document.body.classList.contains("sombre") ? "clair" : "sombre";
  localStorage.setItem("theme", nouveau);
  appliquerTheme(nouveau);
});

// Le compteur de visites
const visites = Number(localStorage.getItem("visites") || 0) + 1;
localStorage.setItem("visites", visites);
document.querySelector("#visites").textContent = "Tu es venu(e) " + visites + " fois sur cette page.";
