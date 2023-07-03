import { draftMode } from "next/headers";
import PreviewSuspense from "@/components/PreviewSuspense";

import { groq } from "next-sanity";
import { client } from "../../lib/sanity.client";
import BlogList from "@/components/BlogList";
import PreviewBlogList from "@/components/PreviewBlogList";
// import { Suspense } from "react";

const query = groq`
     *[_type == "post"] {
       ...,
       author->,
       categories[]->
     } | order(_createdAt desc)
     `;

export const revalidate = 60; //revalidate this page every 60 seconds

export default async function HomePage() {
  const { isEnabled } = draftMode();
  if (isEnabled) {
    return (
      <PreviewSuspense
        fallback={
          <div role="status">
            <p className="text-center text-lg animate-pulse text-[#d8195e]">
              Loading Preview Data...
            </p>
          </div>
        }
      >
        <div>Draft mode is enabled</div>
        <PreviewBlogList query={query} />
      </PreviewSuspense>
    );
  }
  const posts = await client.fetch(query);

  return (
    <div>
      <BlogList posts={posts} />
    </div>
  );
}
