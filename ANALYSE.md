# Analyse des activités du groupe 13-18 ans (version 1) et nouvelle formation

> **Résumé en derja** : 9rit les 20 activités el 9dom (act1 → act20 + act13). Fihom barcha 7ajet behya
> (les thèmes, les mini-projets 17 → 20, les liens W3Schools), ama ma fihomch **objectif** wala **note** ya9raha
> el tfol wa7dou, fama activités m3awdin (3 / 3.1, 7 / 7.1), fama pages « vitrine » (10, 11, 12) fihom barcha
> propriétés mara wa7da bla exercice, w fama ghaltat (moyenne ghalta, titres ghaltin, fichiers audio/vidéo mouch mawjoudin…).
> W na9sin notions mouhimmin : les outils (VS Code, Live Server, F12), les sélecteurs CSS, les unités, `display` w
> `position`, les variables CSS, la mise en ligne…
> Donc **bnit formation jdida** : **20 séances × 2 h = 40 h**, 4 modules, w kol séance 3andha **fiche** b'el fran9ais
> sahel (objectif, note, déroulé 2 h, exercices, défi, erreurs, vocabulaire, ressources, checklist) + un exemple complet.
> El activités el 9dom 7attithom fi `archives/activites-v1/` (ma tfasa5 chay).

---

## 1. Ce qui marchait bien

- **Des thèmes proches des élèves** : animaux, jeux, emploi du temps, bulletin, profil.
- **Les liens W3Schools** dans chaque activité CSS (act10 → act20) : une très bonne habitude.
- **Les mini-projets 17 à 20** (carte profil, fiche produit, galerie, FAQ) avec des étapes « Structure / Style / Bonus ».
- **La progression générale** : HTML → CSS → Flexbox → Grid → Responsive → Animations → Projets.
- **Les 4 projets** (Portfolio, FastDrop, GreenStay, DécliTech Academy) : de très bons modèles de sites complets.

## 2. Les problèmes généraux

| Problème | Conséquence pour l'élève |
|---|---|
| Aucune activité n'a d'**objectif pédagogique** écrit | L'élève ne sait pas ce qu'il doit savoir faire à la fin |
| Pas de **note de cours** lisible seul | L'élève dépend entièrement du formateur ; impossible de réviser à la maison |
| Pas de **durée** ni de déroulé | Séances difficiles à préparer et à rythmer sur 2 h |
| Les activités sont des **pages terminées** à regarder | L'élève copie au lieu de construire pas à pas |
| Pages « vitrines » (act10, 11, 12) : 10 à 20 propriétés d'un coup | Surcharge, on retient peu |
| Doublons : act3 / act3_1, act7 / act7_1 | Temps perdu |
| `main.js` bloque le clic droit et **F12** | Les outils de développement sont le meilleur outil pour apprendre le CSS : il ne faut pas les bloquer |
| Pas de `<meta viewport>` dans les activités 1 à 13 | Les pages ne s'affichent pas bien sur téléphone |
| Beaucoup de style en ligne (`style="…"`) | Mauvaise habitude, difficile à corriger ensuite |
| Images sans `alt`, images hébergées sur des liens fragiles (gstatic, amazon) | Mauvaise accessibilité, images qui risquent de disparaître |
| Textes « Lorem ipsum » (act12) | L'élève ne comprend pas ce qu'il lit |

## 3. Analyse activité par activité

| Activité | Contenu | Problèmes relevés | Devient |
|---|---|---|---|
| **act1** | h1, p, strong, img, a, ul, ol | Pas de `viewport`, `width="300px"` (l'attribut `width` ne prend pas d'unité) | Séances 1 et 2 |
| **act2** | Tableau, liste, style en ligne | Style en ligne dans `<body>` avant d'avoir vu le CSS ; `border`/`cellpadding` obsolètes | Séance 3 |
| **act3** | 2 tableaux (emploi du temps, jeux) | Images sans `alt` ; **GTA V** n'est pas adapté à des 13-15 ans | Séance 3 |
| **act3_1** | Même chose que act3 avec des couleurs | Doublon ; `lang` est sur `<head>` au lieu de `<html>` | Séance 6 (couleurs) |
| **act4** | Formulaire complet | `<label>` utilisé comme titre de groupe (il faut `<fieldset>`/`<legend>`), pas de `required` | Séance 4 |
| **act5** | Révision : gif, liens, bulletin, formulaire | **Moyenne fausse** : 197 / 14 = **14,07** et pas 13,08 ; mélange de trop de choses | Séances 3 et 4 |
| **act6** | header, nav, main, aside, section, footer | Le footer dit « Activité 4 » ; bordures en style en ligne | Séance 5 |
| **act7** | Page avec audio, vidéo, formulaire | `musique.mp3` et `video.mp4` **n'existent pas** dans le dépôt | Séance 5 (médias) |
| **act7_1** | act7 + `act7.css` | Doublon ; les classes `.bloc` et `.highlight` du CSS ne sont pas utilisées dans le HTML | Séance 6 |
| **act8** | Box model avec 3 boîtes | Bonne idée ! Mais pas d'exercice ni d'utilisation de F12 | Séance 8 |
| **act9** | Texte, polices, liens, listes | Le titre dit « Activité 6 » ; ordre des états de liens faux (`:visited` après `:hover` → le survol ne marche plus sur les liens visités) | Séance 7 |
| **act10** | Images : arrondi, filtres, clip-path… | Pas de `viewport` ; 20 images identiques ; trop de propriétés ; `clip-path` pas prioritaire | Séance 9 |
| **act11** | Dropdown, transforms, transitions, boutons | 5 notions dans une page ; `.btn-group` utilise Flexbox avant que Flexbox soit vu | Séance 15 |
| **act12** | Flexbox avec images | Lorem ipsum ; pas de lien vers **Flexbox Froggy** ; style en ligne partout | Séances 11 et 12 |
| **act13** | Mini-site 3 pages | Très bonne idée ; il manque les variables CSS et l'explication de l'organisation des fichiers | Séance 17 |
| **act14** | CSS Grid | Bien construit ; il manque **Grid Garden** | Séance 13 |
| **act15** | Responsive | Bien construit ; il manque l'approche mobile first et le test avec F12 | Séance 14 |
| **act16** | Animations | Bien construit | Séance 16 |
| **act17** | Mini-projet carte profil | Très bien | Séance 18 |
| **act18** | Mini-projet fiche produit | Très bien | Séance 18 (inspiration) et projet final |
| **act19** | Mini-projet galerie | Très bien | Séance 18 |
| **act20** | FAQ avec la « checkbox trick » | Bonne activité mais technique avancée ; c'est un bon défi | Défi de la séance 15 / projet final |

## 4. Ce qui a été retiré, gardé, ajouté

**Retiré**
- Les doublons (3.1, 7.1) et les pages « vitrines » trop chargées.
- `main.js` sur les nouvelles pages (il reste sur les archives et les projets).
- Le style en ligne comme méthode principale, Lorem ipsum, les images sans `alt`, les contenus non adaptés.
- `clip-path` et les « checkbox tricks » comme notions obligatoires (ils restent possibles en défi).

**Gardé**
- La progression HTML → CSS → Flexbox → Grid → Responsive → Animations → Projet.
- Les liens W3Schools (maintenant **vers la page exacte** de la notion).
- Les mini-projets (carte profil, galerie) et les 4 projets modèles.

**Ajouté**
- Séance 1 : les outils (VS Code, Live Server) et « comment marche le web ».
- Séance 2 : les **chemins de fichiers** (`images/photo.jpg`, `../`) — source n°1 d'erreurs chez les débutants.
- Séance 5 : `div`/`span`, intégration **YouTube** et **Google Maps**.
- Séance 6 : les **sélecteurs** (balise, classe, id, descendant), la **cascade**, les couleurs HEX/RGB/RGBA, **CSS Diner**, **HTML Color Codes**.
- Séance 7 : les **unités** (`px`, `rem`, `%`, `vw`), **Google Fonts**.
- Séance 8 : `box-sizing` et l'inspection avec **F12**.
- Séance 10 : `display` et **`position`** (relative, absolute, fixed, sticky), `z-index` — absent de la version 1.
- Séance 11 : **Flexbox Froggy** ; séance 13 : **Grid Garden**.
- Séance 14 : **mobile first** et le mode appareil de F12.
- Séance 15 : `:focus`, `:nth-child`, accessibilité clavier.
- Séance 17 : **variables CSS** et organisation d'un site.
- Séances 19-20 : **cahier des charges**, **maquette**, **mise en ligne** (Netlify Drop / GitHub Pages), **présentation orale**, **grille d'évaluation**.

## 5. La nouvelle méthode de travail

Chaque séance (`formation-13-18/seanceNN/index.html`) suit le même modèle :

1. 🎯 **Objectif** : « À la fin, je saurai… » (3 points)
2. 🔁 **Rappel** de la séance précédente
3. 📒 **La note** : explication courte, code + **résultat en direct**, astuces
4. ⏱️ **Déroulé de 2 h** minuté
5. 🛠️ **Exercices pas à pas** (facile → difficile)
6. 🏆 **Défi bonus** pour les plus rapides
7. ⚠️ **Erreurs fréquentes** (❌ / ✅)
8. 📚 **Vocabulaire**
9. 🔗 **Ressources** : W3Schools (page exacte), HTML Color Codes, Coolors, Google Fonts, Flexbox Froggy, Grid Garden, CSS Diner, MDN, CodePen, Unsplash…
10. ✅ **Je vérifie** : checklist d'auto-évaluation

Chaque séance a aussi un **exemple complet** (`exemple.html` + `exemple.css`) que l'élève peut ouvrir et inspecter avec F12.

Le détail pour le formateur (préparation, rythme, évaluation) est dans [`GUIDE_FORMATEUR.md`](GUIDE_FORMATEUR.md).

## 6. Et après : JavaScript

Quand tu commenceras JavaScript, le même modèle de fiche peut être réutilisé. Proposition de suite (module 5) :
variables et `console.log` → conditions → boucles → fonctions → le DOM (`querySelector`, `textContent`) →
les événements (`click`) → un menu burger → un quiz → un mini-jeu → enrichir le projet final.
