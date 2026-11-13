// ----- La fiche du joueur -----
const prenom = "Yasmine";
const anneeNaissance = 2012;
const anneeActuelle = 2026;
const age = anneeActuelle - anneeNaissance;
let score = 0;
let vies = 3;

console.log("Joueuse : " + prenom);
console.log(`${prenom} a ${age} ans.`);

score = score + 10;   // elle gagne 10 points
score += 25;          // puis encore 25
vies = vies - 1;      // elle perd une vie
console.log("Score :", score, "| Vies :", vies);

// ----- Le ticket de caisse -----
const prixBrik = 1.5;
const prixJus = 2;
const total = prixBrik * 3 + prixJus * 2;
const reduction = total * 0.1;
console.log("Total :", total, "DT");
console.log("Avec -10 % :", total - reduction, "DT");

// ----- Le piège -----
console.log("5" + 3);   // "53"
console.log(5 + 3);     // 8
