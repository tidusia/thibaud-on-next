import { Domain } from "./index";
import {
  totalNbOfProjects,
  totalNbOfReactProjects,
} from "../../../../data/projects";
import hoursWorking from "../../../../data/hours-working";

export const DOMAINS: Array<Domain> = [
  {
    title: "HTML",
    subTitle: "Franca lingua du Web",
    description: `Le HTML est beaucoup plus riche et vaste que ce qu'on pourrait imaginer au premier abord. Je suis toujours surpris d'y découvrir de nouvelles choses régulièrement.

Je me rappelle encore bien mes premiers pas dans le développement avec ce langage en 2013, pour créer le site d'une association.`,
    skills: [
      {
        type: "client",
        content: `Utilisé dans tous mes projets clients depuis 2015, **soit ${totalNbOfProjects} projets** actuellement pour un total d'environ **${hoursWorking} heures de pratique**, sans compter les projets perso et la formation.`,
      },
      {
        type: "formation",
        content: "**HTML Email Development v2** - _Frontend Masters_",
      },
      {
        type: "formation",
        content:
          "**Complete intro to Web development v2** - _Frontend Masters_",
      },
      {
        type: "book",
        content:
          "**HTML5, une référence pour le développeur web** - _Rodolphe Rimelé_",
      },
      {
        type: "book",
        content: "**HTML5 pour les web designers** - _Jeffrey Zeldman_",
      },
      {
        type: "formation",
        content: "**Parcours complet HTML/CSS** - _CodeSchool_",
      },
      {
        type: "formation",
        content:
          "**Réalisez votre site web avec HTML5 et CSS3** - _Mathieu Nebra_",
      },
    ],
  },
  {
    title: "CSS",
    subTitle: "Avec du style",
    description: `Ah les Cascading Style Sheets, c'est beau. J'aime vraiment beaucoup écrire du CSS.
    
Quand je travaille sur un projet comme Agricool ou ENEA Consulting, la rigueur est de mise et j'aime me rapprocher du pixel perfect pour honorer le travail du designer, surtout quand il est de grande qualité.

Ces derniers temps, j'écris beaucoup de JS avec React, j'ai un peu décroché des dernières nouveautés, mais je compte bien me prendre un moment pour rattraper ça !`,
    skills: [
      {
        type: "client",
        content: `Comme pour le HTML, utilisé dans **tous mes projets clients**.`,
      },
      {
        type: "book",
        content: "**CSS 3 Flexbox** - _Raphaël Goetter_",
      },
      {
        type: "book",
        content: "**CSS 3 Pratique du design web** - _Raphaël Goetter_",
      },
      {
        type: "book",
        content: "**CSS Avancées** - _Raphaël Goetter_",
      },
      {
        type: "book",
        content: "**CSS 2 Pratique du design web** - _Raphaël Goetter_",
      },
    ],
  },
  {
    title: "JavaScript",
    subTitle: "Langage le plus utilisé au monde ? (à part l'anglais)",
    description: `Le JavaScript est un langage étonnant, tant par sa structure que par ses usages et plus encore sa spécification !
      
  Le futur à l'air de se tourner vers WebAssembly, mais le JS a encore certainement de très beaux jours devant lui.`,
    skills: [
      {
        type: "client",
        content: `Je fais du JavaScript depuis quasiment le début, mais de manière réellement significative depuis 2017 avec l'utilisation de React`,
      },
      {
        type: "perso",
        content:
          "J'ai réalisé quelques modestes [vidéos sur YouTube](https://www.youtube.com/channel/UCu_CgMOr86n3vfNbT3tk2dw) pour vulgariser quelques concepts en JavaScript.",
      },
      {
        type: "formation",
        content: "**Getting started with JavaScript v2** - _Frontend Masters_",
      },
      {
        type: "perso",
        content:
          "**CodeWars**: [réalisation de nombreux Katas](https://www.codewars.com/users/tidusia) pour m'entrainer sur le langage et découvrir des solutions.",
      },
    ],
  },
  {
    title: "Version Control Systems",
    subTitle: "Et toi, tu git push ?",
    description:
      "On ne débat plus la pertinence d'utiliser `git`. Un code non versionné, c'est un parachutiste amnésique qui risque d'oublier quelque chose d'important à chaque saut.",
    skills: [
      {
        type: "client",
        content:
          "L'utilisation de git est juste obligatoire pour toute codebase. Puis, en fonction de la préférence du client, je `push` le code sur Gitlab, Bitbucket ou bien Github.",
      },
    ],
  },
  {
    title: "CSS Architecture",
    subTitle: "CSS c'est simple, tant que c'est bien cadré...",
    description:
      "Une bonne architecture permet d'éviter de créer des bugs visuels sur la durée sans s'en rendre compte, et permet de travailler à plusieurs sur la même codebase.",
    skills: [
      {
        type: "client",
        content:
          "Seuls mes premiers projets ne disposent pas d'une réelle méthodologie. C'est absolument indispensable pour s'y retrouver.",
      },
      {
        content:
          "Quand je ne peux pas mettre en place des outils de CSS moderne (voir plus bas), j'utilise généralement la méthodologie BEM et un peu d'OOCSS",
      },
      {
        type: "book",
        content:
          "**SMACSS, Scalable and Modular Architecture for CSS** - _Jonathan Snook_",
      },
    ],
  },
  {
    title: "CSS Preprocessors",
    subTitle: "Des boosters parfois essentiels",
    description: `Les préprocesseurs sont là pour étendre le CSS. Ils permettent de gagner du temps, des lignes de code et d'éviter certaines répétitions.
    
CSS évoluant, il n'y a généralement plus besoin de préprocesseurs comme Sass, mais PostCSS permet entre-autres d'utiliser dès aujourd'hui le futur du langage, ce qui en fait un candidat de choix.`,
    skills: [
      {
        type: "client",
        content:
          "La plupart de mes projets clients utilisent un préprocesseur CSS, j'ai beaucoup utilisé Sass, un peu Less, et surtout PostCSS avec React",
      },
    ],
  },
  {
    title: "Linters et Formatters",
    subTitle: "Du joli code mignon tout plein",
    description: `Qui a envie de passer des heures en revue de code par ce que l'on ne passe pas à la ligne après les "{" ? Et qui a déjà passé 30 minutes à débugger du code alors qu'il manquait juste un ";" ?
    
Prettier et Eslint sont là spécifiquement pour vous faire gagner ce temps-là.`,
    skills: [
      {
        type: "client",
        content:
          "Je propose de suite sur tous les projets depuis quelques années un setup Prettier + Eslint.",
      },
      {
        type: "perso",
        content:
          "[@tidusia/eslint-config](https://github.com/tidusia/eslint-config) : ma conf favorite à portée de `npm install`",
      },
      {
        type: "perso",
        content:
          "[@tidusia/prettier-config](https://github.com/tidusia/prettier-config) : la même chose pour Prettier !",
      },
    ],
  },
  {
    title: "React",
    subTitle: "Framework React et son écosystème, ses meta-framework",
    description: `Même si j'ai un peu joué avec Angular et Vue.js, et que j'ai participé à des projets fullstack en Ruby on Rails, c'est React que j'utilise au quotidien depuis 2017.
      
J'ai décidé d'en faire ma spécialité, et d'exploiter particulièrement le meta-framework Next.js (bien que Remix.run me fasse de l'oeil !).`,
    skills: [
      {
        type: "client",
        content: `À ce jour, j'ai travaillé sur **${totalNbOfReactProjects} projets clients en React** / React Native, sur des durées allant de 2 mois **à plus d'un an et demi**`,
      },
      {
        type: "formation",
        content:
          "**Epic React** : je ne l'ai pas encore terminé, j'en suis à plus de la moitié. Formation très conséquente et très complète, avec des usages bien avancés.",
      },
      // La doc
    ],
  },
  {
    title: "Modern CSS",
    subTitle: "Il y a du nouveau dans le game",
    description:
      "L'enjeu principal du CSS moderne est de tirer partit des bundlers et du système de composants pour éviter d'avoir à gérer une architecture CSS.",
    skills: [
      {
        type: "client",
        content: `**CSS Modules** : mon favori du moment, en combinaison avec TailwindCSS. Utilisé sur la plupart de mes projets récents comme SuperReco, ENEA Consulting et EDF Store & Forecast.`,
      },
      {
        content: `**Styled JSX** : utilisé sur le site d'Agricool car choix par défaut sur Next.js. Très efficace en réalité.`,
      },
      {
        content: `**Styled Components** : mon choix par défaut jusqu'en 2020`,
      },
    ],
  },
  {
    title: "CSS Frameworks",
    subTitle: "Parce que gagner du temps, c'est cool",
    description:
      "Il faut bien différencier les frameworks proposant de l'UI (comme bootstrap) et ceux proposant des utilitaires (comme TailwindCSS). Ils répondent à des besoins totalement différents.",
    skills: [
      {
        type: "client",
        content: `**Tailwind CSS** : Absolument génial, la dernière version permet d'à peu près tout faire avec. Je le couple parfois avec CSS Modules si jamais je suis limité.`,
      },
      {
        content: `**Material-UI** : Pas mal utilisé il y a quelques années. Efficace sur codebase React pour aller vite au début, mais pas toujours simple à customiser.`,
      },
      {
        content: `**Bootstrap** : Beaucoup utilisé, bien que souvent à contrecœur, car pas toujours évident de partir d'une base Boostrap pour aller vers du custom.`,
      },
    ],
  },
  {
    title: "Testing web apps",
    subTitle: "Certainement mon sujet préféré",
    description: `Une bonne stratégie de tests permet majoritairement 2 choses : gagner du temps lors du développement, et pouvoir modifier du code avec confiance.`,
    skills: [
      {
        type: "client",
        content:
          "**Cypress** : outil génial permettant de tester exactement comme un vrai utilisateur avec un navigateur. Idéal pour tester des parcours, mais commence à devenir aussi utilisé pour tester des composants directement. J'ai commencé réellement à l'utiliser sur mon dernier projet client : EDF Store & Forecast.",
      },
      {
        content:
          "**Storybook Interaction Testing** : permets d'écrire ses tests au même endroit que ses Stories. Absolument génial, ultra performant, tourne dans un navigateur, utilise Jest et React testing Library. C'est ma nouvelle solution par défaut pour tester les composants et les vues (unitaire + intégration).",
      },
      {
        content:
          "**React Testing Library** : idéal pour tester des composants et même certaines intégrations.",
      },
      {
        content:
          "**Jest** : pour tester des fonctions directement, les snapshots sont parfois utiles pour tester des retours assez lourds comme de gros objets.",
      },
      {
        type: "formation",
        content: "**Testingjavascript.com** : Standard Testing course",
      },
    ],
  },
  {
    title: "Type Checkers",
    subTitle: "On n'est jamais assez sûr",
    description:
      "TypeScript est devenu la référence dans le domaine. Utilisateur assez tardif, je me vois mal commencer un projet sans désormais...",
    skills: [
      {
        type: "client",
        content:
          "**TypeScript**: je l'utilise sur quasiment tous les projets, et sur 100% des projets critiques.",
      },
      {
        type: "client",
        content:
          "Sur EDF Store & Forecast, l'utilisation de TypeScript est très complète, en complément avec **des règles strictes** et de nombreux plugins ESlint. Le gain de temps est considérable.",
      },
      {
        type: "formation",
        content:
          "Total TypeScript - Zod tutorial: validation de schémas avec type inference",
      },
    ],
  },
  {
    title: "Best practices",
    subTitle: "Comment s'assurer d'un travail de qualité",
    description:
      "Je regroupe ici en vrac tout ce qui fait un travail de qualité, que ce soit par des audits automatiques, des checklists ou tout simplement un savoir-faire acquis avec l'expérience.",
    skills: [
      {
        type: "client",
        content:
          "**Lighthouse** : obtention d'un score de 100% sur ENEA Consulting.",
      },
      {
        type: "certification",
        content: `**Certification OpQuast** : [Expert en qualité web](/blog/mais-pourquoi-diable-passer-certification-qualite-web)`,
      },
      {
        type: "perso",
        content:
          "[Front-End Checklist](https://github.com/tidusia/Front-End-Checklist) : ensemble de points à checker pour les projets front + liste de ressources",
      },
      {
        type: "formation",
        content:
          "Frontend Masters - Modern Search Engine Optimization (SEO) + [une checklist](https://github.com/tidusia/seo-checklist-dev) pour facilement mettre en application",
      },
      {
        type: "formation",
        content:
          "Ryan Chenkie - React security course (JWT, routes privées, maintient du state logged in, sanitize user input, etc.)",
      },
    ],
  },
  {
    title: "Containers",
    subTitle: "🐳",
    description:
      "Docker est la référence dans le domaine. J'ai réussit à éviter d'avoir à utiliser cette techno jusqu'à fin 2021, mais finalement je trouve que c'est une excellente ressource et je vois plein de cas où ça me sera utile dans le futur !",
    skills: [
      {
        type: "client",
        content:
          "Sur EDF Store & Forecast, j'ai pris en main **l'écriture du Dockerfile** pour les déploiements.",
      },
      {
        type: "formation",
        content:
          "Frontend Masters - Complete intro to Containers (feat. Docker)",
      },
    ],
  },
  {
    title: "Package managers & tools",
    subTitle: "Car on ne travaille bien qu'avec de bons outils",
    description:
      "Les outils ne font pas uniquement partie du setup d'un projet, ils évoluent aussi dans le temps et il est important d'améliorer constamment ses pratiques, surtout sur une partie aussi critique et liée à l'architecture globale du projet.",
    skills: [
      {
        type: "client",
        content:
          "J'ai une grande préférence pour utiliser directement **NPM**, mais je reste ouvert aux autres possibilités si jamais c'est justifié.",
      },
      {
        type: "client",
        content:
          "Pour ENEA Consulting, on a choisi d'utiliser **Yarn workspace** pour monter un monorepo qui partage des composants et quelques configurations entre 2 projets Gatsby",
      },
      {
        type: "client",
        content:
          "Sur tous les projets, je mets en place **husky** et **lint-staged** afin de lancer une série de commande en pre-commit : eslint, TypeScript, tests unitaires et d'intégration. Je lance généralement les tests E2E directement sur la CI car ils sont très longs et il est très rare de faire une régression sur ces tests-là.",
      },
    ],
  },
  {
    title: "Static Site Generators",
    subTitle: "Qui dit Jamstack, dit Jamtax !",
    description:
      "Moyen efficace de générer un site facilement, avec une bonne DX (Expérience de Développement) et souvent de le déployer sans coût sur des services comme Vercel ou Netlify.",
    skills: [
      {
        type: "client",
        content:
          "**Next.js** : utilisé pour Agricool (en mode SSR à l'époque), EDF Store & Forecast et ce site même !",
      },
      {
        type: "formation",
        content: "**Gatsby Theme Authoring** - _Egghead.io_",
      },
      {
        type: "client",
        content:
          "**Gatsby** : plateforme choisie pour propulser ENEA Consulting",
      },
    ],
  },
  {
    title: "Mobile Applications",
    subTitle: "La quête du Graal, et des Stores",
    description: `J'ai pas mal utilisé React Native à une époque, mais j'ai décidé de me recentrer sur le web, car ce n'est pas évident d'être à jour sur le web + le mobile...
      
Ces références sont donc données à titre indicatives, il n'est pas utile de me contacter pour des applications mobiles.`,
    skills: [
      {
        type: "client",
        content:
          "**Sport Managing** : Intervenu en renfort sur un projet existant.",
      },
      {
        type: "client",
        content:
          "**The Geek Family** : Intervenu en renfort sur plusieurs projets en React Native pour intégrer de nombreuses vues en un délai très court.",
      },
      {
        type: "client",
        content:
          "**Poi Pay** : Réalisation d'une V1 pour une application mobile dans le domaine de la cryptomonnaie. Sur cette mission j'ai eu la chance de pouvoir former un dev junior en React Native venant de l'univers Java.",
      },
      {
        type: "client",
        content:
          "**Stryng Messaging** : j'ai eu la chance de réaliser un POC (Proof Of Concept) d'une migration d'une grosse app de messagerie de React.js + Cordova vers React Native.",
      },
      {
        type: "client",
        content:
          "**Startup on Rails** : petit projet startup qui m'a introduit à la techno en 2017.",
      },
    ],
  },
  {
    title: "Freelancing",
    subTitle: "Tips Business / Productivité / Organisation",
    description:
      "Assurer en freelance demande plus que de simples compétences techniques. Voici les ressources que j'ai utilisées et qui m'ont été les plus utiles.",
    skills: [
      {
        type: "book",
        content:
          "**The PARA method: Simplify, Organise and Master Your Digital Life** - _Tiago Forte_",
      },
      {
        type: "book",
        content:
          "**Rest: Why You Get More Done When You Work Less** - _Alex Soojung-Kim Pang_",
      },
      {
        type: "book",
        content: "**Remote** - _Jason Fried_",
      },
      {
        type: "book",
        content: "**Getting Things Done** - _David Allen_",
      },
      {
        type: "book",
        content: "**The personal MBA** - _Josh Kaufman_",
      },
      {
        type: "book",
        content: "**Rework** - _Jason Fried_",
      },
      {
        type: "book",
        content:
          "**The pomodoro technique** - _Francesco Cirillo_. C'est devenu ma méthode de gestion du temps par défaut.",
      },
    ],
  },
];
