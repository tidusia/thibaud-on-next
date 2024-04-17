import { Metadata } from "next";
import path from "path";
import fs from "fs";
import matter from "gray-matter";
import Nav from "../../components/Nav";
import FeaturedPosts from "../../components/FeaturedPosts";
import { Props as PostType } from "../../components/Post";
import Footer from "../../components/Footer";
import getTimeReading from "../../lib/getTimeReading";
import { BLOG_PATH } from "../../constants";

export const metadata: Metadata = {
  title: "Le Blog | Thibaud Duthoit",
  description:
    "En vrac, des articles techniques sur mes sujets favoris du moment, sur le freelancing, ou bien tout autre sujet assez fun pour me justifier d'y passer du temps à l'écrire.",
};

async function getPosts() {
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

  return posts.sort((a, b) => ("" + b.date).localeCompare(a.date));
}

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <div>
      <header className="max-w-screen-xl mx-auto mb-6">
        <Nav />
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
}
