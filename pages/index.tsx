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
  </div>
);

export default Home;
