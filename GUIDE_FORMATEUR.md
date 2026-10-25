# Guide du formateur — Formation Web HTML & CSS (13-18 ans)

**20 séances × 2 h = 40 h** · 4 modules · 1 projet final publié en ligne.
Les fiches élèves sont dans `formation-13-18/`, le sommaire est `groupe_13_17.html`.

---

## 1. Le programme

| # | Séance | Objectif principal | Échauffement / outil | Ce que l'élève produit |
|---|---|---|---|---|
| **Module 1 · HTML** |||||
| 01 | Le web et ma première page | Squelette HTML, titres, paragraphes | Code source d'un vrai site | Sa carte d'identité en HTML |
| 02 | Texte, liens et images | `a`, `img`, `alt`, chemins relatifs | Squelette de mémoire | Page « Ma ville » + 2e page liée |
| 03 | Listes et tableaux | `ul`/`ol`, `table`, `colspan` | Quiz « quelle balise ? » | Page club + emploi du temps |
| 04 | Les formulaires | `label`/`input`, types, `required` | Analyse d'un vrai formulaire | Formulaire d'inscription |
| 05 | Structure sémantique et médias | `header`…`footer`, `div`/`span`, YouTube | Repérer les zones d'un site | Blog voyage |
| **Module 2 · Bases du CSS** |||||
| 06 | Premier CSS : sélecteurs et couleurs | Règle CSS, `<link>`, `.classe`, `#id`, HEX | **CSS Diner** 1-6 | Fiche joueur colorée |
| 07 | Texte, polices et unités | Google Fonts, `px`/`rem`, liens LoVe HAte | CSS Diner 7-10 | Article de magazine |
| 08 | Le modèle de boîte | padding, border, margin, `box-sizing`, F12 | Le cadre photo | 3 cartes + badge rond |
| 09 | Fonds, dégradés et images | `background-image`, dégradés, `object-fit`, `filter` | Quiz box model | Page festival |
| 10 | Display et position | `inline-block`, relative/absolute, sticky, `z-index` | F12 : trouver bloc / en ligne | Boutique avec menu collant |
| **Module 3 · Mise en page** |||||
| 11 | Flexbox 1 | `display: flex`, `justify-content`, `align-items` | **Flexbox Froggy** 1-15 | Démo Flexbox |
| 12 | Flexbox 2 | Navbar, cartes, `flex: 1 1 250px` | Froggy 16-24 | Page d'accueil d'un club |
| 13 | CSS Grid | `grid-template-columns`, `fr`, `span`, areas | **Grid Garden** 1-15 | Page magazine + galerie |
| 14 | Le responsive | viewport, `@media`, mobile first | Un site sur téléphone vs ordi | Page qui s'adapte |
| **Module 4 · Interactivité et projet** |||||
| 15 | Pseudo-classes, transitions, transformations | `:hover`, `:focus`, `:nth-child`, `transition`, `transform` | CSS Diner 15-20 | Boutons, cartes, menu déroulant |
| 16 | Les animations | `@keyframes`, `animation`, `delay` | Transition vs animation | Chargements + scène animée |
| 17 | Site multi-pages et variables | Arborescence, menu commun, `:root`/`var()` | Lister les pages d'un site | Mini-site de 3 pages |
| 18 | Atelier : carte profil et galerie | Travailler en autonomie | — | Carte profil + galerie |
| 19 | Projet final 1/2 | Cahier des charges, maquette, HTML | Visite des 4 projets modèles | HTML complet du projet |
| 20 | Projet final 2/2 | CSS, responsive, mise en ligne, oral | — | Site en ligne + présentation |

## 2. Avant la formation

- **Sur chaque ordinateur** : Google Chrome, [VS Code](https://code.visualstudio.com/) avec l'extension **Live Server** (Ritwick Dey). Si possible aussi l'extension **Prettier** pour bien indenter.
- **Tester** : ouvrir un fichier HTML avec Live Server sur chaque poste.
- **Comptes** : aucun compte n'est nécessaire, sauf à la séance 20 pour GitHub Pages (Netlify Drop fonctionne sans compte).
- **Vidéoprojecteur** : indispensable pour les démonstrations en direct (coder devant eux, pas seulement montrer des diapos).
- Chaque élève crée un dossier `formation-web/` avec un sous-dossier par séance (`seance01/`, `seance02/`…). Conseiller une clé USB ou un dossier cloud pour garder son travail.

## 3. Le déroulé type d'une séance de 2 h

| Temps | Phase | Conseils |
|---|---|---|
| 0:00 – 0:10/15 | **Échauffement** | Un jeu (Froggy, Grid Garden, CSS Diner) ou un mini-quiz sur la séance précédente. Ça réveille et ça révise. |
| ~0:15 – 0:55 | **Découverte** | Coder **en direct** au vidéoprojecteur, avec des erreurs volontaires. Max 10 min d'explication d'affilée, puis les élèves essaient. |
| ~0:55 – 1:35 | **Pratique guidée** | Les exercices de la fiche, du facile au difficile. Le formateur circule. |
| ~1:35 – 1:50 | **Défi** | Pour les plus rapides. Les autres terminent les exercices. |
| 1:50 – 2:00 | **Bilan** | 2-3 élèves montrent leur travail. Lecture de la checklist « Je vérifie ». Annonce de la prochaine séance. |

Le déroulé détaillé et minuté de chaque séance est sur sa fiche (section ⏱️).

## 4. Conseils pédagogiques pour les 13-18 ans

- **Faire, pas regarder** : chaque notion se termine par un « à vous ». Les élèves tapent le code eux-mêmes (pas de copier-coller depuis la fiche pour les exercices).
- **« 3 avant moi »** : avant d'appeler le formateur, l'élève essaie 1) sa fiche (section ⚠️ Erreurs fréquentes), 2) F12 ou W3Schools, 3) son voisin.
- **Binômes** (pair programming) : un « pilote » au clavier, un « copilote » qui relit ; on échange toutes les 15 minutes. Très efficace pour les séances 11 à 18.
- **Laisser choisir le thème** : sport, musique, manga, jeux, ville… La motivation est bien plus forte quand le site parle d'eux.
- **Différencier** : les exercices sont marqués *facile / moyen / difficile*. Un élève en difficulté peut s'arrêter à l'exercice 2 ; un élève rapide fait le défi.
- **F12 dès la séance 8** : montrer régulièrement comment inspecter et modifier le CSS en direct. C'est la compétence n°1 d'un développeur web.
- **Valoriser** : montrer au vidéoprojecteur des travaux d'élèves à chaque bilan.
- **Sécurité en ligne** : pas d'adresse, de numéro de téléphone ni de photo personnelle sans accord sur un site publié.

## 5. L'évaluation

- **Auto-évaluation** à chaque séance : la checklist « ✅ Je vérifie » de la fiche.
- **Fin de module** (séances 5, 10, 14) : un quiz de 10 questions (Kahoot, Google Forms ou à l'oral) à partir des sections Vocabulaire et Erreurs fréquentes des fiches du module.
- **Projet final** (séances 19-20) : grille sur 20 dans `formation-13-18/seance20/grille-evaluation.html`, à distribuer **dès la séance 19**.

## 6. Modifier ou ajouter une fiche

Chaque fiche est un simple fichier HTML (`formation-13-18/seanceNN/index.html`) qui utilise le style commun `formation-13-18/assets/cours.css`. Pour la modifier, ouvre-la dans VS Code et change le texte directement. Les blocs utiles :

```html
<!-- Une notion -->
<div class="notion">
  <h3><span class="num">1</span>Titre de la notion</h3>
  <p>Explication…</p>
  <div class="code-demo solo">
    <div><span class="label">CSS</span><pre><code>p { color: red; }</code></pre></div>
  </div>
  <p class="astuce">💡 <strong>Astuce :</strong> …</p>
</div>

<!-- Un exercice -->
<div class="exercice">
  <h3>Exercice 1 · Titre<span class="niveau facile">facile</span></h3>
  <ol><li>Étape…</li></ol>
</div>
```

Dans un `<pre><code>`, il faut écrire `&lt;` à la place de `<` pour afficher une balise HTML.

## 7. Problèmes techniques fréquents

| Problème | Solution |
|---|---|
| Live Server n'apparaît pas au clic droit | Ouvrir le **dossier** dans VS Code (Fichier → Ouvrir le dossier), pas seulement le fichier |
| La page ne se met pas à jour | Enregistrer (Ctrl + S) ; activer **Fichier → Enregistrement automatique** |
| Le CSS ne s'applique pas | Vérifier le chemin dans `<link href="…">` et vider le cache (Ctrl + F5) |
| Les accents s'affichent mal | `<meta charset="UTF-8">` dans le `<head>` |
| Une image ne s'affiche pas | Nom exact (majuscules), bon dossier, bonne extension (`.jpg` / `.jpeg` / `.png`) |
| Flexbox / Grid sans effet | `display: flex` ou `grid` doit être sur le **parent** |

## 8. Ressources pour le formateur

- [W3Schools HTML](https://www.w3schools.com/html/) · [W3Schools CSS](https://www.w3schools.com/css/) · [W3Schools How To](https://www.w3schools.com/howto/)
- [MDN — Apprendre le développement web (fr)](https://developer.mozilla.org/fr/docs/Learn)
- [HTML Color Codes](https://htmlcolorcodes.com/fr/) · [Coolors](https://coolors.co/) · [Google Fonts](https://fonts.google.com/)
- Jeux : [Flexbox Froggy](https://flexboxfroggy.com/#fr) · [Grid Garden](https://cssgridgarden.com/#fr) · [CSS Diner](https://flukeout.github.io/) · [Flexbox Defense](http://www.flexboxdefense.com/) · [CSS Battle](https://cssbattle.dev/)
- Outils : [CodePen](https://codepen.io/) · [Excalidraw](https://excalidraw.com/) · [Animista](https://animista.net/) · [CSS Gradient](https://cssgradient.io/) · [Validateur W3C](https://validator.w3.org/) · [Netlify Drop](https://app.netlify.com/drop) · [GitHub Pages](https://pages.github.com/)

L'analyse de l'ancienne version des activités est dans [`ANALYSE.md`](ANALYSE.md) ; les anciennes activités sont conservées dans `archives/activites-v1/`.
