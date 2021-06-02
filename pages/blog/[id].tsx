import matter from "gray-matter";
import path from "path";
import Link from "next/link";
import fs from "fs";
import { NextPage, GetStaticPaths, GetStaticProps } from "next";
import ReactMarkdown from "react-markdown";
import reHypePrism from "@mapbox/rehype-prism";

import navigation from "../../data/navigation";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import { yearsWorking } from "../../data/hours-working";
import Head from "next/head";

const blogPath = path.relative(__dirname, "/content/blog");

const removeMarkdownExtension = (file: string) => file.slice(0, -3);

type Props = {
  frontmatter: {
    title: string;
    excerpt: string;
    date: string;
    timeReading: string;
    picture: string;
    pictureAlt: string;
  };
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
        <Nav navItems={navigation} />
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

      <section className="py-12 bg-gray-50 overflow-hidden md:py-20 lg:py-24">
        <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <svg
            className="absolute top-full right-full transform translate-x-1/3 -translate-y-1/4 lg:translate-x-1/2 xl:-translate-y-1/2"
            width="404"
            height="404"
            fill="none"
            viewBox="0 0 404 404"
            role="img"
          >
            <defs>
              <pattern
                id="ad119f34-7694-4c31-947f-5c9d249b21f3"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x="0"
                  y="0"
                  width="4"
                  height="4"
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width="404"
              height="404"
              fill="url(#ad119f34-7694-4c31-947f-5c9d249b21f3)"
            />
          </svg>

          <div className="relative">
            <blockquote>
              <div className="max-w-3xl mx-auto text-center text-2xl leading-9 font-medium text-gray-900">
                <footer className="mb-8 md:flex md:items-center md:justify-center">
                  <img
                    className="mx-auto h-40 w-40 rounded-full"
                    src="/images/thibaud-duthoit.jpg"
                    alt="Profil de Thibaud Duthoit, développeur front-end spécialisé en React.js"
                  />
                </footer>
                <p>
                  Je m'appelle Thibaud Duthoit, et je suis développeur front-end
                  depuis {yearsWorking}&nbsp;ans, spécialisé en intégration et
                  en React.js.
                </p>
                <p className="mt-4">
                  Si vous cherchez un développeur passionné, je serais ravi de{" "}
                  <Link href="/contact">
                    <a className="text-blue-500 underline">
                      prendre&nbsp;contact
                    </a>
                  </Link>{" "}
                  avec vous.
                </p>
              </div>
            </blockquote>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const blogSlugs = fs.readdirSync(blogPath);

  const paths = blogSlugs
    .map(removeMarkdownExtension)
    .map((post) => `/blog/${post}`);

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context?.params?.id || "";
  const content = await import(`../../content/blog/${id}.md`);
  const markdown = matter(content.default);

  return {
    props: {
      content: markdown.content,
      frontmatter: markdown.data,
    },
  };
};

export default BlogTemplate;
