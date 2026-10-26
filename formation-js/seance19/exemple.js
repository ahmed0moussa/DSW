// ===== 1. Le diaporama =====
const images = [
  "https://picsum.photos/seed/nature0/640/320",
  "https://picsum.photos/seed/nature1/640/320",
  "https://picsum.photos/seed/nature2/640/320",
  "https://picsum.photos/seed/nature3/640/320"
];
let numero = 0;
const photo = document.querySelector("#photo");
const zonePoints = document.querySelector("#points");

// Un point par image
images.forEach(function (image, i) {
  const point = document.createElement("span");
  point.addEventListener("click", () => afficher(i));
  zonePoints.append(point);
});

function afficher(n) {
  numero = (n + images.length) % images.length;
  photo.src = images[numero];
  zonePoints.querySelectorAll("span").forEach(function (point, i) {
    point.classList.toggle("actif", i === numero);
  });
}

document.querySelector("#suivant").addEventListener("click", () => afficher(numero + 1));
document.querySelector("#precedent").addEventListener("click", () => afficher(numero - 1));
setInterval(() => afficher(numero + 1), 4000);
afficher(0);

// ===== 2. La FAQ en accordéon =====
for (const question of document.querySelectorAll(".question")) {
  question.addEventListener("click", function () {
    question.classList.toggle("ouverte");
  });
}

// ===== 3. La galerie filtrée =====
const photos = [
  { titre: "La plage", categorie: "mer", image: "https://picsum.photos/seed/g-mer1/300/200" },
  { titre: "Les vagues", categorie: "mer", image: "https://picsum.photos/seed/g-mer2/300/200" },
  { titre: "Le sentier", categorie: "foret", image: "https://picsum.photos/seed/g-foret1/300/200" },
  { titre: "Les pins", categorie: "foret", image: "https://picsum.photos/seed/g-foret2/300/200" },
  { titre: "Le faucon", categorie: "animaux", image: "https://picsum.photos/seed/g-animal1/300/200" },
  { titre: "Les flamants", categorie: "animaux", image: "https://picsum.photos/seed/g-animal2/300/200" }
];
const galerie = document.querySelector("#galerie");

function afficherGalerie(liste) {
  galerie.innerHTML = "";
  for (const p of liste) {
    const figure = document.createElement("figure");
    figure.innerHTML = `<img src="${p.image}" alt="${p.titre}"><figcaption>${p.titre}</figcaption>`;
    galerie.append(figure);
  }
}

const boutonsFiltre = document.querySelectorAll(".filtre");
for (const bouton of boutonsFiltre) {
  bouton.addEventListener("click", function () {
    for (const b of boutonsFiltre) b.classList.remove("actif");
    bouton.classList.add("actif");
    const categorie = bouton.dataset.categorie;
    afficherGalerie(categorie === "tout" ? photos : photos.filter(p => p.categorie === categorie));
  });
}

afficherGalerie(photos);
