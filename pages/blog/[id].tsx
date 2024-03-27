import matter from "gray-matter";
import path from "path";
import fs from "fs";
import { NextPage, GetStaticPaths, GetStaticProps } from "next";
import ReactMarkdown from "react-markdown";
import reHypePrism from "@mapbox/rehype-prism";

import Nav from "../../components/Nav";
import Footer from "../../app/components/Footer";
import Head from "next/head";
import getTimeReading from "../../lib/getTimeReading";
import { BLOG_PATH } from "../../constants";
import removeMarkdownExtension from "../../lib/removeMarkdownExtension";
import { BlogFrontMatter } from "../../types/blog";
import CallToActionContact from "../../app/components/CallToActionContact";

type Props = {
  frontmatter: BlogFrontMatter;
  content: string;
};

const BlogTemplate: NextPage<Props> = (props) => {
  return (
    <div>
      <Head>
        <title>{props.frontmatter.title}</title>
        <meta name="description" content={props.frontmatter.excerpt} />

        <meta property="og:title" content={props.frontmatter.title} />
        <meta property="og:description" content={props.frontmatter.excerpt} />
        <meta property="og:type" content="article" />
        <meta name="twitter:creator" content="@thibaud_duthoit" />

        {!!props.frontmatter.picture && (
          <meta
            property="og:image"
            content={`https://www.thibaud-duthoit.fr${props.frontmatter.picture}`}
          />
        )}
      </Head>
      <header className="max-w-screen-xl mx-auto">
        <Nav />
      </header>

      <article className="article-page mx-auto px-4 py-12">
        <h1 className="article-main-title mt-0 mb-12 sm:my-12 break-words">
          {props.frontmatter.title}
        </h1>
        <h2 className="mb-4 text-gray-600">{props.frontmatter.excerpt}</h2>
        <p className="mb-16 sm:text-right text-base leading-5 text-gray-500">
          <time dateTime={props.frontmatter.date} className="my-0">
            {new Date(props.frontmatter.date).toLocaleDateString("fr-FR", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
          <span className="mx-1">&middot;</span>
          {props.frontmatter.timeReading} de lecture
        </p>

        {!!props.frontmatter.picture && (
          <figure className="mb-16">
            <img
              src={props.frontmatter.picture}
              alt={props.frontmatter.pictureAlt}
            />
            <figcaption className="article-figcaption text-center text-gray-600 mt-4">
              <ReactMarkdown>{props.frontmatter.pictureAlt}</ReactMarkdown>
            </figcaption>
          </figure>
        )}

        <div className="article-content">
          <ReactMarkdown rehypePlugins={[reHypePrism]}>
            {props.content}
          </ReactMarkdown>
        </div>
      </article>

      <CallToActionContact />

      <Footer />
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const blogSlugs = fs.readdirSync(BLOG_PATH);

  const paths = blogSlugs
    .map(removeMarkdownExtension)
    .map((post) => `/blog/${post}`);

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context?.params?.id || "";
  const content = fs.readFileSync(path.join(BLOG_PATH, `${id}.md`), "utf8");
  const markdown = matter(content);
  const computedTimeReading = getTimeReading(markdown.content);

  return {
    props: {
      content: markdown.content,
      frontmatter: {
        ...markdown.data,
        timeReading: markdown.data.timeReading || computedTimeReading,
      },
    },
  };
};

export default BlogTemplate;
