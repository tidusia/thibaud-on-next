import { Domain } from "./index";
import { totalNbOfProjects } from "../../data/projects";
import hoursWorking from "../../data/hours-working";

export const DOMAINS: Array<Domain> = [
  {
    title: "HTML",
    subTitle: "Franca lingua du Web",
    skills: [
      {
        type: "client",
        content: `Utilisé dans tous mes projets clients depuis 2015, soit ${totalNbOfProjects} projets actuellement pour un total d'environs ${hoursWorking} heures de pratique.`,
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
];
