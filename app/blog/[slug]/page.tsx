import ReactMarkdown from "react-markdown";
import reHypePrism from "@mapbox/rehype-prism";
import Footer from "../../../components/Footer";
import CallToActionContact from "../../../components/CallToActionContact";
import { Metadata } from "next";
import getPostBySlug from "../../../lib/getPostBySlug";
import getBlogPosts from "../../../lib/getBlogPosts";

// Return 404 for any segment that is not generated in generateStaticParams
// This avoids server errors if Next tries to access non-existing markdown files
export const dynamicParams = false;

// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);

  return {
    title: post.title,
    description: post.excerpt,
    twitter: {
      creator: "@thibaud_duthoit",
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      images: post.picture
        ? `https://www.thibaud-duthoit.fr${post.picture}`
        : undefined,
    },
  };
}

export default async function BlogPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPostBySlug(params.slug);

  return (
    <div>
      <article className="article-page mx-auto px-4 py-12">
        <h1 className="article-main-title mt-0 mb-12 sm:my-12 break-words">
          {post.title}
        </h1>
        <h2 className="mb-4 text-gray-600">{post.excerpt}</h2>
        <p className="mb-16 sm:text-right text-base leading-5 text-gray-500">
          <time dateTime={post.date} className="my-0">
            {new Date(post.date).toLocaleDateString("fr-FR", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
          <span className="mx-1">&middot;</span>
          {post.timeReading} de lecture
        </p>

        {!!post.picture && (
          <figure className="mb-16">
            <img src={post.picture} alt={post.pictureAlt} />
            <figcaption className="article-figcaption text-center text-gray-600 mt-4">
              <ReactMarkdown>{post.pictureAlt}</ReactMarkdown>
            </figcaption>
          </figure>
        )}

        <div className="article-content">
          <ReactMarkdown rehypePlugins={[reHypePrism]}>
            {post.content}
          </ReactMarkdown>
        </div>
      </article>

      <CallToActionContact />

      <Footer />
    </div>
  );
}
