import { NextPage, GetStaticProps } from "next";
import path from "path";
import fs from "fs";
import matter from "gray-matter";
import navigation from "../data/navigation";
import Nav from "../components/Nav";
import FeaturedPosts from "../components/FeaturedPosts";
import { Props as PostType } from "../components/Post";
import Footer from "../components/Footer";
import Head from "next/head";
import getTimeReading from "../lib/getTimeReading";
import { BLOG_PATH } from "../constants";

type Props = {
  posts: Array<PostType>;
};

const Blog: NextPage<Props> = ({ posts }) => (
  <div>
    <Head>
      <title>Le Blog | Thibaud Duthoit</title>
      <meta
        name="description"
        content="En vrac, des articles techniques sur mes sujets favoris du moment, sur le freelancing, ou bien tout autre sujet assez fun pour me justifier d'y passer du temps à l'écrire."
      />
    </Head>
    <header className="max-w-screen-xl mx-auto mb-6">
      <Nav navItems={navigation} />
    </header>

    <FeaturedPosts
      title="Tout le blog !"
      subtitle="En vrac, des articles techniques sur mes sujets favoris du moment, sur le freelancing, ou bien tout autre sujet assez fun pour me justifier d'y passer du temps à l'écrire."
      posts={posts}
      hideLinks
    />

    <Footer />
  </div>
);

export const getStaticProps: GetStaticProps = () => {
  const blogSlugs = fs.readdirSync(BLOG_PATH);
  const posts: Array<PostType> = [];

  for (let i = 0; i < blogSlugs.length; i++) {
    const slug = blogSlugs[i];
    const content = fs.readFileSync(path.join(BLOG_PATH, slug), "utf8");
    const markdown = matter(content);
    const computedTimeReading = getTimeReading(markdown.content);

    posts.push({
      href: `/blog/${slug.slice(0, -3)}`,
      title: markdown.data.title || "",
      picture: markdown.data.picture || "",
      pictureAlt: markdown.data.pictureAlt || "",
      excerpt: markdown.data.excerpt || "",
      date: markdown.data.date || "",
      timeReading: markdown.data.timeReading || computedTimeReading,
    });
  }

  const props: Props = {
    posts: posts.sort((a, b) => ("" + b.date).localeCompare(a.date)),
  };

  return {
    props,
  };
};

export default Blog;
