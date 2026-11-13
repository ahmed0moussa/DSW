// ----- Le compteur -----
let valeur = 0;
const compteur = document.querySelector("#compteur");

function afficher() {
  compteur.textContent = valeur;
  if (valeur < 0) {
    compteur.classList.add("negatif");
  } else {
    compteur.classList.remove("negatif");
  }
}

document.querySelector("#plus").addEventListener("click", function () {
  valeur++;
  afficher();
});
document.querySelector("#moins").addEventListener("click", function () {
  valeur--;
  afficher();
});
document.querySelector("#zero").addEventListener("click", function () {
  valeur = 0;
  afficher();
});

// ----- Les likes -----
let likes = 0;
document.querySelector("#like").addEventListener("click", function () {
  likes++;
  document.querySelector("#likes").textContent = likes;
});

// ----- Le mode sombre -----
const boutonTheme = document.querySelector("#theme");
boutonTheme.addEventListener("click", function () {
  document.body.classList.toggle("sombre");
  if (document.body.classList.contains("sombre")) {
    boutonTheme.textContent = "☀️ Mode clair";
  } else {
    boutonTheme.textContent = "🌙 Mode sombre";
  }
});

// ----- La galerie -----
let numero = 1;
const photo = document.querySelector("#photo");

function changerPhoto(pas) {
  numero = numero + pas;
  if (numero > 4) numero = 1;   // après la 4e, on revient à la 1re
  if (numero < 1) numero = 4;
  photo.src = "https://picsum.photos/seed/galerie" + numero + "/320/200";
}

document.querySelector("#suivant").addEventListener("click", function () {
  changerPhoto(1);
});
document.querySelector("#precedent").addEventListener("click", function () {
  changerPhoto(-1);
});
document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowRight") changerPhoto(1);
  if (e.key === "ArrowLeft") changerPhoto(-1);
});
