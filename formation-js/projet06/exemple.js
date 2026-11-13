// ----- Des fonctions utiles -----
function nombreAuHasard(max) {
  return Math.floor(Math.random() * max) + 1;
}

function messageResultat(essais) {
  if (essais <= 5) {
    return `Incroyable ! Trouvé en ${essais} essais 🏆`;
  } else if (essais <= 10) {
    return `Bravo ! Trouvé en ${essais} essais 🎉`;
  } else {
    return `Trouvé en ${essais} essais. Tu feras mieux la prochaine fois 😉`;
  }
}

// ----- Le jeu -----
const secret = nombreAuHasard(100);
let essais = 0;
let trouve = false;

while (!trouve) {
  const reponse = prompt("Devine le nombre entre 1 et 100 :");

  // Le joueur a cliqué sur Annuler : on arrête
  if (reponse === null) {
    console.log("Partie arrêtée. Le nombre était " + secret);
    break;
  }

  const nombre = Number(reponse);
  essais++;
  console.log("Essai " + essais + " : " + nombre);

  if (nombre < secret) {
    alert("C'est plus ! ⬆️");
  } else if (nombre > secret) {
    alert("C'est moins ! ⬇️");
  } else {
    alert(messageResultat(essais));
    trouve = true;
  }
}
