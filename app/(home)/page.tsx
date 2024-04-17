import { Metadata } from "next";

import metas from "../../data/metas";
import hoursWorking, { yearsWorking } from "../../data/hours-working";
import projects, { totalNbOfProjects } from "../../data/projects";
import HomeIntro from "./components/HomeIntro";
import ShowCase from "../../components/ShowCase";
import Testimonial from "../../components/Testimonial";
import Stats from "../../components/Stats";
import CallToActionCenter from "../../components/CallToActionCenter";
import FeaturedPosts from "../../components/FeaturedPosts";
import Projects from "../../components/Projects";
import Footer from "../components/Footer";
import { getAllPosts } from "../../lib/blog";

export const metadata: Metadata = {
  title: metas.siteTitle,
  description: metas.siteDescription,
  openGraph: {
    title: metas.siteTitle,
    description: metas.siteDescription,
    type: "website",
    url: "https://www.thibaud-duthoit.fr/",
  },
  twitter: {
    creator: "@thibaud_duthoit",
  },
};

// Fetch the markdown file corresponding to the slug and prepare clean post object
async function getLast3Posts() {
  const posts = getAllPosts().map((post) => ({
    ...post.frontMatter,
    href: post.href,
  }));

  return posts.sort((a, b) => ("" + b.date).localeCompare(a.date)).slice(0, 3);
}

export default async function HomePage() {
  const last3Posts = await getLast3Posts();

  return (
    <div>
      <HomeIntro />

      <main>
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
          position="Designer Freelance, il a réalisé les maquettes pour Agricool"
          content="En 20 ans de création numérique (déjà!), le nombre de devs front en qui j'ai une totale confiance sur l'intégration d'un design se comptent sur les doigts d'une seule main. Thibaud fait partie de ce club très restreint, et ça en dit long sur ses compétences humaines et professionnelles. Je le recommande donc vivement, en espérant avoir plus de projets avec lui à l'avenir !"
          reverse
        />

        <Stats
          title={`Mon crédo :${"\n"} Améliorer constamment mes compétences`}
          subtitle="Via la formation en continu, la création de checklists et l'utilisation d'outils de mesure de la qualité, je fais en sorte d'apporter toujours plus de valeur à mon travail."
          stats={[
            {
              value: `${totalNbOfProjects}`,
              label: "Projets clients",
            },
            { value: `${yearsWorking} ans`, label: "expérience freelance" },
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

        <CallToActionCenter title="On travaille ensemble ?" />

        <FeaturedPosts
          title="Un peu de lecture ?"
          subtitle="Simple et naturel, c'est ma façon de m'exprimer ici. C'est un des rares espaces où je règne en maître après tout !"
          posts={last3Posts}
        />
      </main>

      <Footer />
    </div>
  );
}
