import { Domain } from "./index";
import { totalNbOfProjects, totalNbOfReactProjects } from "../../data/projects";
import hoursWorking from "../../data/hours-working";

/**
 * Sources :
 * - Clients
 * - Workshops (codeSchool, Opquast, CodeWars, WesBos, OpenClassrooms)
 * - Livres (Kindle, ebooks en local, livres physiques)
 * - OSS Github
 */
export const DOMAINS: Array<Domain> = [
  {
    title: "HTML",
    subTitle: "Franca lingua du Web",
    description: `Le HTML est beaucoup plus riche et vaste que ce qu'on pourrait imaginer au premier abord. Je suis toujours surpris d'y découvrir des nouvelles choses régulièrement.

Je me rappelle encore bien mes premiers pas dans le développement avec ce langage en 2013, pour créer le site d'une association.`,
    skills: [
      {
        type: "client",
        content: `Utilisé dans tous mes projets clients depuis 2015, **soit ${totalNbOfProjects} projets** actuellement pour un total d'environs **${hoursWorking} heures de pratique**, sans compter les projets perso et la formation.`,
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
        type: "book",
        content:
          "**Réalisez votre site web avec HTML5 et CSS3** - _Mathieu Nebra_",
      },
      {
        type: "formation",
        content: "CodeSchool - Parcours complet HTML/CSS",
      },
      {
        type: "formation",
        content: "Frontend Masters - Complete intro to Web development v2",
      },
      {
        type: "formation",
        content: "Frontend Masters - HTML Email Development v2",
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
        content: `Comme pour le HTML, utilisé dans tous mes projets clients.`,
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
        type: "formation",
        content: "Frontend Masters - Getting started with JavaScript v2",
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
      "Une bonne architecture permets d'éviter de créer des bugs visuel sur la durée sans s'en rendre compte, et permets de travailler à plusieurs sur la même codebase.",
    skills: [
      {
        type: "client",
        content:
          "Seuls mes premiers projets ne disposent pas d'une réelle méthodologie. C'est absolument indispensable pour s'y retrouver",
      },
    ],
  },
  {
    title: "CSS Preprocessors",
    subTitle: "Des boosters parfois essentiels",
    description: `Les préprocesseurs sont là pour étendre le CSS. Ils permettent de gagner du temps, des lignes de code et d'éviter certaines répétitions.
    
CSS évoluant, il n'y a généralement plus besoin de préprocesseurs comme Sass, mais PostCSS permets entre-autre d'utiliser dès aujourd'hui le futur du langage, ce qui en fait un candidat de choix.`,
    skills: [
      {
        type: "client",
        content:
          "La plupart de mes projets clients utilisent un preprocesseur CSS, j'ai beaucoup utilisé Sass, un peu Less, et surtout PostCSS avec React",
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
    ],
  },
  {
    title: "React",
    subTitle: "Framework React et son écosystème, ses meta-framework",
    skills: [
      {
        type: "client",
        content: `À ce jour, j'ai travaillé sur **${totalNbOfReactProjects} projets clients en React**, sur des durées allant de 2 mois **à plus d'un an et demi**`,
      },
      // La doc
    ],
  },
  {
    title: "Modern CSS",
    subTitle: "Il y a du nouveau dans le game",
    skills: [],
  },
  {
    title: "CSS Frameworks",
    subTitle: "Parce que gagner du temps, c'est cool",
    skills: [],
  },
  {
    title: "Testing web apps",
    subTitle: "Certainement mon sujet préféré",
    skills: [],
  },
  {
    title: "Type Checkers",
    subTitle: "On n'est jamais assez sûr",
    skills: [],
  },
  {
    title: "Best practices",
    subTitle: "Comment s'assurer d'un travail de qualité",
    skills: [
      {
        type: "formation",
        content: "Frontend Masters - Modern Search Engine Optimization (SEO)",
      },
      // Opquast
      // Lighthouse
    ],
  },
  {
    title: "Server Side Rendering",
    subTitle: "On revient aux classiques",
    skills: [],
  },
  {
    title: "GraphQL",
    subTitle: "De la requête optimisée",
    skills: [],
  },
  {
    title: "Containers",
    subTitle: "🐳",
    skills: [
      {
        type: "formation",
        content:
          "Frontend Masters - Complete intro to Containers (feat. Docker)",
      },
    ],
  },
  {
    title: "Static Site Generators",
    subTitle: "Qui dit Jamstack, dit Jamtax !",
    skills: [],
  },
  {
    title: "Mobile Applications",
    subTitle: "La quête du Graal, et des Stores",
    skills: [],
  },
  {
    title: "Freelancing",
    subTitle: "",
    skills: [],
  },
];
