import { NextPage, GetStaticProps } from "next";
import Head from "next/head";
import path from "path";
import fs from "fs";
import matter from "gray-matter";

import navigation from "../data/navigation";
import metas from "../data/metas";
import hoursWorking, { yearsWorking } from "../data/hours-working";
import projects from "../data/projects";
import HomeIntro from "../components/HomeIntro";
import ShowCase from "../components/ShowCase";
import Testimonial from "../components/Testimonial";
import Stats from "../components/Stats";
import CallToActionCenter from "../components/CallToActionCenter";
import FeaturedPosts from "../components/FeaturedPosts";
import { Props as PostType } from "../components/Post";
import Projects from "../components/Projects";
import Footer from "../components/Footer";

const totalNbOfProjects = projects.reduce(
  (total, project) => total + project.nbOfClients,
  0,
);

const blogPath = path.relative(__dirname, "/content/blog");

type Props = {
  posts: Array<PostType>;
};

const Home: NextPage<Props> = ({ posts }) => (
  <div>
    <Head>
      <title>{metas.siteTitle}</title>
      <meta name="description" content={metas.siteDescription} />

      <meta property="og:title" content={metas.siteTitle} />
      <meta property="og:description" content={metas.siteDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.thibaud-duthoit.fr/" />
      <meta name="twitter:creator" content="@DuthoitThibaud" />
    </Head>

    <HomeIntro navItems={navigation} />

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
        posts={posts}
      />
    </main>

    <Footer />
  </div>
);

export const getStaticProps: GetStaticProps = async (context) => {
  const blogSlugs = fs.readdirSync(blogPath);
  const posts: Array<PostType> = [];

  for (let i = 0; i < blogSlugs.length; i++) {
    const slug = blogSlugs[i];
    const content = await import(`../content/blog/${slug}`);
    const markdown = matter(content.default);

    posts.push({
      href: `/blog/${slug.slice(0, -3)}`,
      title: markdown.data.title || "",
      picture: markdown.data.picture || "",
      pictureAlt: markdown.data.pictureAlt || "",
      excerpt: markdown.data.excerpt || "",
      publishDate: markdown.data.date || "",
      timeReading: markdown.data.timeReading || "",
    });
  }

  const props: Props = {
    posts: posts
      .sort((a, b) => ("" + b.publishDate).localeCompare(a.publishDate))
      .slice(0, 3),
  };

  return {
    props,
  };
};

export default Home;
