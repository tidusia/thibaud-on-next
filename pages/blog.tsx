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

const blogPath = path.relative(__dirname, "/content/blog");

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

export const getStaticProps: GetStaticProps = async () => {
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
    posts: posts.sort((a, b) =>
      ("" + b.publishDate).localeCompare(a.publishDate),
    ),
  };

  return {
    props,
  };
};

export default Blog;
