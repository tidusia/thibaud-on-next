import { join } from "path";
import { BLOG_PATH } from "../../constants";
import fs from "fs";
import matter from "gray-matter";
import getTimeReading from "../getTimeReading";

export default async function getPostBySlug(slug: string): Promise<{
  slug: string;
  content: string;
  href: string;
  title: string;
  excerpt: string;
  date: string;
  timeReading: string;
  picture: string;
  pictureAlt: string;
}> {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(BLOG_PATH, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  const computedTimeReading = getTimeReading(content);

  return {
    slug: realSlug,
    content,
    href: `/blog/${realSlug}`,
    title: data.title || "",
    picture: data.picture || "",
    pictureAlt: data.pictureAlt || "",
    excerpt: data.excerpt || "",
    date: data.date || "",
    timeReading: data.timeReading || computedTimeReading,
  };
}
