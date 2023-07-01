import { groq } from "next-sanity";
import { client, clientPreview } from "../../lib/sanity.client";
import BlogList from "@/components/BlogList";

export default async function HomePage() {
  const query = groq`
     *[_type == "post"] {
       ...,
       author->,
       categories[]->
     } | order(_createdAt desc)
     `;

  const posts = await client.fetch(query);
  console.log(posts.length);
  const postsPreview = await clientPreview.fetch(query);
  console.log(postsPreview.length);

  // const posts = await getPosts();
  // console.log(posts);

  return (
    <div>
      <BlogList posts={posts} />
      <h1 className="text-4xl font-bold underline">Posts</h1>
    </div>
  );
}
