import Link from "next/link";
import type { SanityDocument } from "@sanity/client";
import Head from "next/head";
import { client } from "@/lib/sanity.client";
import { groq } from "next-sanity";

export default function Posts() {
  const postsQuery = groq`*[_type == "post" && defined(slug.current)]{
        _id, title, slug
      }`;

  const posts = async () => {
    const data = await client.fetch(postsQuery);
    return { data };
  };

  const title = posts.length === 1 ? `1 Post` : `${posts.length} Posts`;

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <main className="container mx-auto grid grid-cols-1 divide-y divide-blue-100">
        <h1 className="text-2xl p-4 font-bold">{title}</h1>
        {posts.map((post) => (
          <Link
            key={post._id}
            href={post.slug.current}
            className="p-4 hover:bg-blue-50"
          >
            <h2>{post.title}</h2>
          </Link>
        ))}
      </main>
    </>
  );
}
