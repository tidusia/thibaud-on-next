import Post, { Props as PostType } from "../Post";
import Link from "next/link";
import styles from "./index.module.css";

export type Props = {
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
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <div className={styles.heading}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.subtitle}>{subtitle}</p>
        </div>

        <div className={styles.postsGrid}>
          {posts.map((post) => (
            <Post key={post.title} {...post} />
          ))}
        </div>

        {!hideLinks && (
          <div className={styles.links}>
            <Link href="/blog">
              <a className="btn btn-blue btn-big">Tous les articles</a>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedPosts;
