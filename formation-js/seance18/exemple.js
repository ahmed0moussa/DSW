// ===== 1. Le menu burger =====
const boutonMenu = document.querySelector("#bouton-menu");
const menu = document.querySelector(".menu");

boutonMenu.addEventListener("click", function () {
  menu.classList.toggle("ouvert");
  boutonMenu.textContent = menu.classList.contains("ouvert") ? "✖" : "☰";
});

for (const lien of menu.querySelectorAll("a")) {
  lien.addEventListener("click", function () {
    menu.classList.remove("ouvert");
    boutonMenu.textContent = "☰";
  });
}

// ===== 2. Le mode sombre qui se souvient =====
const boutonTheme = document.querySelector("#theme");

function appliquerTheme() {
  const sombre = localStorage.getItem("theme") === "sombre";
  document.body.classList.toggle("sombre", sombre);
  boutonTheme.textContent = sombre ? "☀️" : "🌙";
}

boutonTheme.addEventListener("click", function () {
  const sombre = !document.body.classList.contains("sombre");
  localStorage.setItem("theme", sombre ? "sombre" : "clair");
  appliquerTheme();
});

appliquerTheme();

// ===== 3. Le bouton retour en haut =====
const boutonHaut = document.querySelector("#haut-de-page");

window.addEventListener("scroll", function () {
  if (window.scrollY > 300) {
    boutonHaut.classList.remove("cache");
  } else {
    boutonHaut.classList.add("cache");
  }
});

boutonHaut.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
