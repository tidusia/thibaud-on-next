import fs from "fs";
import { BLOG_PATH } from "../../constants";
import getPostBySlug from "../getPostBySlug";

export default async function getBlogPosts(limit?: number) {
  const slugs = fs.readdirSync(BLOG_PATH);
  const posts = [];

  for (const slug of slugs) {
    const post = await getPostBySlug(slug);
    posts.push(post);
  }

  posts.sort((a, b) => ("" + b.date).localeCompare(a.date));

  if (limit) return posts.slice(0, limit);

  return posts;
}
