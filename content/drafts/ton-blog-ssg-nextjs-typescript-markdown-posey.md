---
title: Ton blog SSG Next.js TypeScript markdown posey
date: "2020-05-08"
timeReading: "6 minutes"
excerpt: Ce qui est bien avec les projets perso, c'est qu'on peut y fourrer toutes les technos que l'on aime
---

@TODO: harmoniser le tu ou le vous

Dans un élan de grande folie pure, j'ai récemment décidé de refondre mon site (ce site même !) qui tournait sur Gatsby vers Next.js, avec des objectifs en tête : 

- Garder exactement le même système de blog avec des fichiers markdown
- Utiliser la nouvelle fonctionalité SSG (Static Site Generation) de Next.js pour conserver exactement les même performances qu'avec Gatsby
- Tant qu'à faire, ajouter TypeScript car je l'utilise assez souvent et que j'aime bien le confort de développement qu'il apporte
- Conserver le même hébergement sur Netlify (service d'hébergement de sites statiques)

Ce dernier point me permets de m'assurer que le site tournera bien en SSG, puisque Netlify ne gère pas le SSR (Server Side Rendering) de Next.js . Donc toutes les pages devront bien avoir été générées au build et Netlify posera gentillement ces fichiers buildés sur de jolis CDN bien performants.

Et dans cet article, je t'explique comment appliquer la même méthode pour faire le tiens en quelques minutes, posey.

## Non mais quand même, ça fait beaucoup de technos là non ?

Alors, oui. Clairement. C'est complètement de l'over-engineering.

Mais ce qui est bien quand on est développeur web, et qu'on créé son propre site web, c'est qu'on peut y mettre tout ce qu'on veut dedans sans plus de justifications que le fun.

Par contre, si un client me demandais de lui réaliser un site du même acabit, ce n'est pas dit du tout que je lui propose cette formule. Chaque personne vient avec ses problématiques et c'est le rôle du développeur de l'accompagner dans le choix technique qui lui conviendra le mieux.

Et là, ces choix techniques me convienent à merveille !

- Le SSG rend un site extrèmement performant, couplé à un effort sur le poids global de la page, ça rend le site extrêmement rapide, et comme c'est hébergé sur des CDN, ça le rend aussi très résilient à une éventuelle montée en charge (chose qui n'arriveras probablement jamais sur mon blog 😅)
- J'adore Next.js, c'est simple, léger, très bien documenté, permissif si un jour je veux faire du SSR, capable maintenant de faire du SSG, et j'en passe. Bref c'est une de mes techno favorites, sinon ma préférée.
- Générer mes pages de blog depuis du Markdown me facilitera la vie si un jour je veux y brancher un CMS du type NetlifyCMS, et puis j'aime la simplicité du contenu qu'impose ce format.
- L'ajout de TypeScript, c'est à la fois pour le confort, et à la fois pour rester à jour sur cette techno qui est très utilisée sur les projets de mes clients.

Par contre, Gatsby reste un excellent choix, qui vient avec ses autres qualités et ses autres défauts. Une autre motivation a avoir changé de techno, c'est aussi juste le challenge de recréer en Next.js ce que Gatsby fait déjà très bien (en tout cas les fonctionnalités que j'utilise le plus).

Chacun peut trouver la chaussure à son pied.

## OK, OK. Merci pour cette belle tirade, comment je fais mon blog alors ?

C'est partit pour créer ton tout nouveau blog SSG Next.js TypeScript markdown ! 

On commence par la base : ouvir le bon vieux terminal et se poser dans le dossier désiré.

Initiez un package.json, pour aller plus vite, vous pouvez utiliser la commande suivante :
 
 ```bash
 npm init -y
```

On a ensuite besoin d'installer next :

```bash
npm install next react react-dom
```

Ouvrez ensuite le package.json pour y placer les indications de scripts suivants :

```json
"scripts": {
  "dev": "next",
  "build": "next build"
}
```

Un utilisateur attentif remarquera l'absence du script `"start": "next start"`. En effet, notre objectif est de réaliser du pur SSG. On n'aura donc aucunement besoin de la commande `start` qui existe pour le SSG.

Il nous faut ensuite créer un dossier `/pages` et y placer notre page d'accueil, qui sera notre index du blog pour ce petit tuto.

```bash
mkdir pages
touch pages/index.jsx
```

Puis, placez-y ce bout de code temporaire :

````jsx
const HomePage = () => <div>C'est un peu vide par ici 🧐</div>;

export default HomePage
````

Optionnel : si vous comptez utiliser TypeScript (car ce n'est pas obligatoire, c'est votre projet après tout sacrebleu !) alors il vous suffira de créer un fichier vide `tsconfig.json` à la racine :

```bash
touch tsconfig.json
```

Et d'installer naturellement les dépendances : 

```bash
npm install --save-dev typescript @types/react @types/node
```
 
Puis de lancer la commande `npm run dev`, Next.js rempliera automatiquement le fichier `tsconfig.json` avec des valeurs par défaut tout à fait sympatiques.

Jouons tout de même la carte de la puretée, et changeons directement la valeur de `strict` à `true` dans ce même fichier. Sait-on jamais qu'un inquisiteur passerais par là 👀

## On déploie déjà sur Netlify ?

À ce stade, vous avez une installation Next.js + TypeScript fonctionnelle.

Et qui est même prête à être déployée sur Netlify, car Next.js optimise de base toutes les pages en static dès que possible (en gros quand vous ne cherchez pas à utiliser des fonctions de SSR comme `getInitialProps`).

Ne ratons donc pas une oportunité pour déployer dès à présent notre bout de code sur Netlify.

Si vous êtes déjà à l'aise avec cet outil, c'est parfait, vous pouvez passer directement à la section suivante. 
