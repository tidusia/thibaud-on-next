import { Domain } from "./index";
import { totalNbOfProjects } from "../../data/projects";
import hoursWorking from "../../data/hours-working";

/**
 * Sources :
 * - Clients
 * - Workshops (codeSchool, Opquast, CodeWars)
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
    skills: [
      {
        type: "client",
        content: `Utilisé dans tous mes projets clients depuis 2015, soit ${totalNbOfProjects} projets actuellement pour un total d'environs ${hoursWorking} heures de pratique.`,
      },
    ],
  },
  {
    title: "JavaScript",
    subTitle: "Le langage le plus utilisé au monde (à part l'anglais)",
    skills: [
      {
        type: "formation",
        content: "Frontend Masters - Getting started with JavaScript v2",
      },
    ],
  },
  {
    title: "Version Control Systems",
    subTitle: "Et toi, tu git push ?",
    skills: [],
  },
  {
    title: "CSS Architecture",
    subTitle: "CSS c'est simple, tant que c'est bien cadré...",
    skills: [],
  },
  {
    title: "CSS Preprocessors",
    subTitle: "Des boosters parfois essentiels",
    skills: [],
  },
  {
    title: "Linters et Formatters",
    subTitle: "Du joli code mignon tout plein",
    skills: [],
  },
  {
    title: "React",
    subTitle: "Framework React et son écosystème, ses meta-framework",
    skills: [],
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
