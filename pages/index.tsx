import { NextPage } from "next";

import navigation from "../data/navigation";
import hoursWorking from "../data/hours-working";
import projects from "../data/projects";
import HomeIntro from "../components/HomeIntro";
import ShowCase from "../components/ShowCase";
import Testimonial from "../components/Testimonial";
import Stats from "../components/Stats";
import Projects from "../components/Projects";

const Home: NextPage = () => (
  <div>
    <HomeIntro navItems={navigation} />
    <ShowCase />

    <Testimonial
      picture="/images/jerome-velociter.jpg"
      name="Jérôme Vélociter"
      position="Lead-Dev, Agricool"
      content="Thibaud est un excellent intégrateur et développeur React, qui fait des choix pragmatiques et les communique clairement. Ce fut un plaisir de travailler avec lui sur la nouvelle version de notre site (Next.js + Prismic.io). Si l'occasion se présente, nous solliciterons ses services à nouveau dans le futur les yeux fermés."
    />

    <Testimonial
      picture="/images/pierre-ragois.jpg"
      name="Pierre Ragois"
      position="Designer Freelance, a réalisé les maquettes pour Agricool"
      content="En 20 ans de création numérique (déjà!), le nombre de devs front en qui j'ai une totale confiance sur l'intégration d'un design se comptent sur les doigts d'une seule main. Thibaud fait partie de ce club très restreint, et ça en dit long sur ses compétences humaines et professionnelles. Je le recommande donc vivement, en espérant avoir plus de projets avec lui à l'avenir !"
    />

    <Stats
      title="Mon crédo : Améliorer constamment mes compétences"
      subtitle="Via la formation en continu, la création de checklists et l'utilisation d'outils de mesure de la qualité, je fais en sorte d'apporter toujours plus de valeur à mon travail."
      stats={[
        { value: "34", label: "Projets clients" },
        { value: "6 ans", label: "expérience freelance" },
        { value: `${hoursWorking}h`, label: "sur projets clients" },
      ]}
    />

    <Projects
      id="references"
      heading="Références"
      title="Développements Front-End"
      subtitle="Quelques startups et agences avec qui j'ai collaboré"
      projects={projects}
    />
  </div>
);

export default Home;
