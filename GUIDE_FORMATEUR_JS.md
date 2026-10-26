# Guide du formateur — Formation JavaScript (13-18 ans)

**20 séances × 2 h = 40 h** · 4 modules · 3 mini-projets · 1 site interactif publié en ligne.
Public : élèves qui ont suivi la formation HTML & CSS mais qui **n'ont jamais programmé**.
Objectif : rendre interactif le site **statique** créé pendant la formation HTML/CSS (pas de serveur, pas de base de données).
Les fiches élèves sont dans `formation-js/`, le sommaire est `groupe_js.html`.

| Rythme | Durée totale |
|---|---|
| 1 séance par semaine | 20 semaines (environ 5 mois) |
| 2 séances par semaine | 10 semaines (environ 2 mois et demi) |

---

## 1. Le programme

| # | Séance | Notions | Ce que l'élève produit |
|---|---|---|---|
| **Module 1 · Penser comme un programmeur (12 h)** ||||
| 01 | Penser comme un programmeur | Algorithme, séquence, condition, boucle, bug | Labyrinthe du robot (débranché) + Blockly Games |
| 02 | Mon premier JavaScript | `<script>`, fichier `.js`, console F12, `console.log`, erreurs | Premiers messages et dessin dans la console |
| 03 | Les variables | `let`, `const`, nombres, textes, booléens, calculs | Fiche joueur et ticket de caisse |
| 04 | Les conditions | `===`, `<`, `if`/`else if`/`else`, `&&`, `\|\|` | Mentions, portier, pierre-feuille-ciseaux |
| 05 | Les boucles | `for`, `while`, compteur, `%` | Tables de multiplication, tirelire, Fizz Buzz |
| 06 | Fonctions + **mini-projet** | `function`, paramètres, `return`, `prompt`, `Math.random` | **Jeu « Devine le nombre »** |
| **Module 2 · JavaScript et la page (12 h)** ||||
| 07 | Trouver et changer un élément | DOM, `querySelector(All)`, `textContent`, attributs | Fiche joueur remplie par JS |
| 08 | Changer le style | `style`, `classList.add/remove/toggle` | Bulletin coloré automatiquement |
| 09 | Les événements | `addEventListener`, `click`, `keydown`, `event` | Compteur, likes, mode sombre, galerie |
| 10 | Les formulaires | `.value`, `submit`, `preventDefault`, validation | Inscription vérifiée |
| 11 | Créer et supprimer des éléments | `createElement`, `append`, `prepend`, `remove` | Livre d'or |
| 12 | **Mini-projet** | Tout le module 2 | **To-do list** |
| **Module 3 · Les données et le temps (8 h)** ||||
| 13 | Les tableaux | `[ ]`, indice, `length`, `push`, `splice`, `for…of` | Playlist |
| 14 | Les objets | `{ }`, tableau d'objets, `filter`, `sort` | Boutique avec filtres et panier |
| 15 | Le temps et la mémoire | `setTimeout`, `setInterval`, `localStorage`, JSON | Chrono, diaporama, thème sauvegardé |
| 16 | **Mini-projet** | Tout le module 3 | **Quiz** avec score et record |
| **Module 4 · Projet : mon site interactif (8 h)** ||||
| 17 | Projet 1/4 : choisir | Catalogue d'interactions, algorithmes QUAND / ALORS | Plan d'interactions |
| 18 | Projet 2/4 | Menu burger, mode sombre sauvegardé, retour en haut | Interactions ⭐ |
| 19 | Projet 3/4 | Diaporama, accordéon, galerie filtrée, tests | Interactions ⭐⭐ / ⭐⭐⭐ |
| 20 | Projet 4/4 : publier et présenter | Checklist qualité, mise en ligne, oral | Site interactif en ligne |

## 2. La méthode

- **Expliquer en mots avant le code** : chaque notion commence par une phrase en français (« QUAND on clique, ALORS… »). Les élèves l'écrivent en commentaire, puis la traduisent en JavaScript.
- **La console F12 toujours ouverte** : c'est l'outil n°1. Apprenez-leur dès la séance 2 à lire une erreur (quoi + quelle ligne).
- **Petits pas** : 3 lignes, on teste, on continue. Ne jamais laisser écrire 30 lignes d'un coup.
- **Faire « jouer » le code** : au tableau, on exécute une boucle tour par tour en notant la valeur des variables. Pour les débutants complets, c'est ce qui fait la différence.
- **Taper, pas copier-coller** : les exemples des fiches servent à comprendre, les élèves retapent le code.
- **Binômes** dès le module 2 (pilote au clavier / copilote qui relit), on échange toutes les 15 minutes.
- **Échauffements ludiques** : Blockly Games (Labyrinthe) et CodeCombat (en JavaScript) en début de séance au module 1.
- **Les bugs sont normaux** : valorisez celui qui trouve et explique son bug.
- **« 3 avant moi »** : la fiche (Erreurs fréquentes), puis la console, puis le voisin, avant d'appeler le formateur.

## 3. Le déroulé type d'une séance de 2 h

| Temps | Phase |
|---|---|
| 0:00 – 0:10 | Rappel / échauffement (jeu ou mini-défi dans la console) |
| 0:10 – 0:55 | Découverte : le formateur code en direct au vidéoprojecteur, les élèves essaient après chaque notion |
| 0:55 – 1:40 | Exercices de la fiche (facile → difficile) |
| 1:40 – 1:55 | Défi pour les plus rapides |
| 1:55 – 2:00 | Bilan et checklist « Je vérifie » |

Le déroulé détaillé de chaque séance est sur sa fiche (section ⏱️).

## 4. L'évaluation

- **Quiz de fin de module** au début des séances 6, 12 et 16 (et au bilan de la séance 20 pour le module 4).
- **3 mini-projets** : Devine le nombre (06), To-do list (12), Quiz (16).
- **Projet final** : grille sur 20 dans `formation-js/seance20/grille-evaluation.html`, à distribuer dès la séance 17.

## 5. Préparation

- Mêmes outils que la formation HTML/CSS : Chrome, VS Code, Live Server. Rien d'autre à installer.
- Les élèves ont besoin de **leur site du projet HTML/CSS** pour le module 4 : demandez-leur de le garder (clé USB ou cloud).
- CodeCombat demande un compte : prévoyez l'accord des parents, ou utilisez seulement Blockly Games (sans compte).

## 6. Problèmes fréquents

| Problème | Solution |
|---|---|
| « Rien ne se passe » | Ouvrir la console F12 : il y a presque toujours une erreur rouge qui dit quoi et où |
| `Cannot read properties of null` | Le `querySelector` n'a rien trouvé : vérifier le `#` / `.`, l'id, et que le `<script>` est à la fin du `<body>` |
| `X is not defined` | Faute de frappe ou majuscule (`console.log`, `textContent`, `querySelector`) |
| La page se bloque | Boucle infinie : la condition du `while` ne devient jamais fausse |
| `"5" + 3 = "53"` | Utiliser `Number()` sur les valeurs des champs et de `prompt` |
| Le script ne se charge pas | Vérifier le chemin dans `<script src="…">` et que le fichier est enregistré |

## 7. Ressources

- [W3Schools JavaScript](https://www.w3schools.com/js/) · [W3Schools How To](https://www.w3schools.com/howto/)
- [javascript.info en français](https://fr.javascript.info/)
- [MDN — Apprendre JavaScript (fr)](https://developer.mozilla.org/fr/docs/Learn/JavaScript)
- Jeux : [Blockly Games](https://blockly.games/?lang=fr) · [CodeCombat](https://codecombat.com/)
- Outils : [CodePen](https://codepen.io/) · [Netlify Drop](https://app.netlify.com/drop) · [GitHub Pages](https://pages.github.com/)
