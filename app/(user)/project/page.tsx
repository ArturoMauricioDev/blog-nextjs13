import { draftMode } from "next/headers";
import PreviewSuspense from "@/components/PreviewSuspense";

import { groq } from "next-sanity";
import { client } from "../../../lib/sanity.client";
import ProjectList from "@/components/ProjectList";
import PreviewProjectList from "@/components/PreviewProjectList";
// import { Suspense } from "react";

const query = groq`
     *[_type == "project"] {
       ...,
       author->,
       tecnologies[]->
     } | order(publishedAt desc)
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
        <PreviewProjectList query={query} />
      </PreviewSuspense>
    );
  }
  const projects = await client.fetch(query);

  return (
    <div>
      <ProjectList projects={projects} />
    </div>
  );
}
