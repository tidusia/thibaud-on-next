import matter from "gray-matter";
import fs from "fs";
import { join } from "path";
import { BlogFrontMatter } from "../../types/blog";
import getTimeReading from "../getTimeReading";
import { BLOG_PATH } from "../../constants";

export function getPostBySlug(slug: string): {
  slug: string;
  frontMatter: BlogFrontMatter;
  href: string;
  content: string;
} {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(BLOG_PATH, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  const computedTimeReading = getTimeReading(content);

  const href = `/blog/${realSlug}`;

  const frontMatter: BlogFrontMatter = {
    title: data.title || "",
    picture: data.picture || "",
    pictureAlt: data.pictureAlt || "",
    excerpt: data.excerpt || "",
    date: data.date || "",
    timeReading: data.timeReading || computedTimeReading,
  };

  return { slug: realSlug, frontMatter, content, href };
}

export function getAllPosts() {
  const slugs = fs.readdirSync(BLOG_PATH);
  return slugs.map((slug) => getPostBySlug(slug));
}
