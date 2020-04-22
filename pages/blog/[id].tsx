import matter from "gray-matter";
import path from "path";
import fs from "fs";
import { NextPage, GetStaticPaths, GetStaticProps } from "next";
import ReactMarkdown from "react-markdown";

const blogPath = path.relative(__dirname, "/content/blog");

const removeMarkdownExtension = (file: string) => file.slice(0, -3);

type Props = {
  frontmatter: {
    title: string;
    excerpt: string;
    date: string;
  };
  content: string;
};

const BlogTemplate: NextPage<Props> = (props) => {
  return (
    <div>
      <h1>Titre {props.frontmatter.title}</h1>
      <ReactMarkdown source={props.content} />
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
