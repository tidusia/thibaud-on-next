import Post, { Props as PostType } from "../Post";
import Link from "next/link";

type Props = {
  title: string;
  subtitle?: string;
  posts: Array<PostType>;
  hideLinks?: boolean;
};

const FeaturedPosts = ({
  title,
  subtitle,
  posts,
  hideLinks = false,
}: Props) => {
  if (!posts || !posts.length) return null;

  return (
    <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl leading-9 tracking-tight font-extrabold text-gray-900 sm:text-4xl sm:leading-10">
            {title}
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl leading-7 text-gray-500 sm:mt-4">
            {subtitle}
          </p>
        </div>
        <div className="mt-12 grid gap-5 max-w-lg mx-auto lg:grid-cols-3 lg:max-w-none">
          {posts.map((post) => (
            <Post key={post.title} {...post} />
          ))}
        </div>

        {!hideLinks && (
          <div className="mt-16 sm:flex sm:justify-center">
            <Link href="/blog">
              <a className="btn btn-blue btn-big">Tous les articles</a>
            </Link>
            <Link href="/news">
              <a className="btn btn-light btn-big mt-3 sm:mt-0 sm:ml-3">
                Toutes les news
              </a>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default FeaturedPosts;
