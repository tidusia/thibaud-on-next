import { Metadata } from "next";
import Nav from "../../components/Nav";
import FeaturedPosts from "../../components/FeaturedPosts";
import Footer from "../../components/Footer";
import getBlogPosts from "../../lib/getBlogPosts";

export const metadata: Metadata = {
  title: "Le Blog | Thibaud Duthoit",
  description:
    "En vrac, des articles techniques sur mes sujets favoris du moment, sur le freelancing, ou bien tout autre sujet assez fun pour me justifier d'y passer du temps à l'écrire.",
};

export default async function BlogPage() {
  const posts = await getBlogPosts();

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
