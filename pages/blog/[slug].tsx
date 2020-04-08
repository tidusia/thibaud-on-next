import matter from "gray-matter";
import { NextPage } from "next";
import ReactMarkdown from "react-markdown";

const BlogTemplate: NextPage = (props: any) => {
  const frontmatter = props.data;

  return (
    <div>
      <h1>{frontmatter.title}</h1>

      <ReactMarkdown source={props.content} />
    </div>
  );
};

BlogTemplate.getInitialProps = async (context) => {
  const { slug } = context.query;

  const content = await import(`../../content/blog/${slug}.md`);
  const data = matter(content.default);

  return { ...data };
};

export default BlogTemplate;
