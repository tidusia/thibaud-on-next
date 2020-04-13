import { NextPage } from "next";

import HomeIntro from "../components/HomeIntro";
import ShowCase from "../components/ShowCase";
import Testimonial from "../components/Testimonial";

const Home: NextPage = () => (
  <div>
    <HomeIntro />
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
  </div>
);

export default Home;
