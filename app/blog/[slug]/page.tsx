import matter from "gray-matter";
import path from "path";
import fs from "fs";
import ReactMarkdown from "react-markdown";
import reHypePrism from "@mapbox/rehype-prism";
import Nav from "../../../components/Nav";
import Footer from "../../../components/Footer";
import getTimeReading from "../../../lib/getTimeReading";
import { BLOG_PATH } from "../../../constants";
import removeMarkdownExtension from "../../../lib/removeMarkdownExtension";
import CallToActionContact from "../../../components/CallToActionContact";
import { Metadata } from "next";

// Return 404 for any segment that is not generated in generateStaticParams
// This avoids server errors if Next tries to access non-existing markdown files
export const dynamicParams = false;

// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
  return fs
    .readdirSync(BLOG_PATH)
    .map(removeMarkdownExtension)
    .map((slug) => ({ slug }));
}

// Fetch the markdown file corresponding to the slug and prepare clean post object
async function getPostData(slug: string) {
  const content = fs.readFileSync(path.join(BLOG_PATH, `${slug}.md`), "utf8");
  const markdown = matter(content);
  const computedTimeReading = getTimeReading(markdown.content);

  return {
    content: markdown.content,
    frontmatter: {
      title: markdown.data.title || "",
      picture: markdown.data.picture || "",
      pictureAlt: markdown.data.pictureAlt || "",
      excerpt: markdown.data.excerpt || "",
      date: markdown.data.date || "",
      timeReading: markdown.data.timeReading || computedTimeReading,
    },
  };
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const content = fs.readFileSync(
    path.join(BLOG_PATH, `${params.slug}.md`),
    "utf8",
  );
  const markdown = matter(content);

  return {
    title: markdown.data.title,
    description: markdown.data.excerpt,
    twitter: {
      creator: "@thibaud_duthoit",
    },
    openGraph: {
      title: markdown.data.title,
      description: markdown.data.excerpt,
      type: "article",
      images: markdown.data.picture
        ? `https://www.thibaud-duthoit.fr${markdown.data.picture}`
        : undefined,
    },
  };
}

export default async function BlogPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPostData(params.slug);

  return (
    <div>
      <header className="max-w-screen-xl mx-auto">
        <Nav />
      </header>

      <article className="article-page mx-auto px-4 py-12">
        <h1 className="article-main-title mt-0 mb-12 sm:my-12 break-words">
          {post.frontmatter.title}
        </h1>
        <h2 className="mb-4 text-gray-600">{post.frontmatter.excerpt}</h2>
        <p className="mb-16 sm:text-right text-base leading-5 text-gray-500">
          <time dateTime={post.frontmatter.date} className="my-0">
            {new Date(post.frontmatter.date).toLocaleDateString("fr-FR", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
          <span className="mx-1">&middot;</span>
          {post.frontmatter.timeReading} de lecture
        </p>

        {!!post.frontmatter.picture && (
          <figure className="mb-16">
            <img
              src={post.frontmatter.picture}
              alt={post.frontmatter.pictureAlt}
            />
            <figcaption className="article-figcaption text-center text-gray-600 mt-4">
              <ReactMarkdown>{post.frontmatter.pictureAlt}</ReactMarkdown>
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
