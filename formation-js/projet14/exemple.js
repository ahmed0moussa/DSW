// Les données : un tableau d'objets
const produits = [
  { nom: "Maillot du club", prix: 45, categorie: "vetement", image: "https://picsum.photos/seed/maillot/300/200" },
  { nom: "Ballon officiel", prix: 30, categorie: "sport", image: "https://picsum.photos/seed/ballon/300/200" },
  { nom: "Casquette", prix: 20, categorie: "accessoire", image: "https://picsum.photos/seed/casquette/300/200" },
  { nom: "Sweat à capuche", prix: 60, categorie: "vetement", image: "https://picsum.photos/seed/sweat/300/200" },
  { nom: "Gourde", prix: 15, categorie: "accessoire", image: "https://picsum.photos/seed/gourde/300/200" },
  { nom: "Raquette", prix: 55, categorie: "sport", image: "https://picsum.photos/seed/raquette/300/200" }
];

const panier = [];
const boutique = document.querySelector("#boutique");

function afficherPanier() {
  let total = 0;
  for (const p of panier) {
    total += p.prix;
  }
  document.querySelector("#panier").textContent =
    panier.length === 0 ? "🛒 Panier vide" : `🛒 ${panier.length} article(s) · ${total} DT`;
}

// Afficher une liste de produits sous forme de cartes
function afficher(liste) {
  boutique.innerHTML = "";
  for (const p of liste) {
    const carte = document.createElement("article");
    carte.classList.add("produit");
    carte.innerHTML = `
      <img src="${p.image}" alt="${p.nom}">
      <div>
        <strong>${p.nom}</strong>
        <p class="prix">${p.prix} DT</p>
      </div>`;
    const bouton = document.createElement("button");
    bouton.textContent = "Ajouter au panier";
    bouton.addEventListener("click", function () {
      panier.push(p);
      afficherPanier();
    });
    carte.querySelector("div").append(bouton);
    boutique.append(carte);
  }
}

// Les filtres par catégorie
for (const bouton of document.querySelectorAll("[data-categorie]")) {
  bouton.addEventListener("click", function () {
    const categorie = bouton.dataset.categorie;
    if (categorie === "tout") {
      afficher(produits);
    } else {
      afficher(produits.filter(p => p.categorie === categorie));
    }
  });
}

// Le tri par prix
document.querySelector("#tri").addEventListener("click", function () {
  const tries = [...produits].sort((a, b) => a.prix - b.prix);
  afficher(tries);
});

afficher(produits);
