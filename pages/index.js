import Link from "next/link";

import { Layout, Bio, SEO } from "@components/common";
import { getSortedPosts } from "@utils/posts";
import { generateRssPostsFeed } from "@utils/rss";

export default function Home({ posts }) {
  return (
    <Layout>
      <SEO title="Steve Kibuika || Javascript Blog" />
      <Bio className="my-14" />
      <p className="mt-16 mb-8 text-2xl font-bold">Latest Posts..</p>
      {posts.map(({ frontmatter: { title, description, date }, slug }) => (
        <article key={slug}>
          <header className="mb-2">
            <h3 className="mb-2">
              <Link href={"/posts/[slug]"} as={`/posts/${slug}`}>
                <a className="text-3xl font-bold text-yellow-600 font-display">
                  {title}
                </a>
              </Link>
            </h3>
            <span className="text-sm">{date}</span>
          </header>
          <section>
            <p className="mb-8 text-lg">{description}</p>
          </section>
        </article>
      ))}
    </Layout>
  );
}

export async function getStaticProps() {
  generateRssPostsFeed()
  const posts = getSortedPosts();

  return {
    props: {
      posts,
    },
  };
}
