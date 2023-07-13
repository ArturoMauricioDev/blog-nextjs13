import { draftMode } from "next/headers";
import PreviewSuspense from "@/components/PreviewSuspense";

import { groq } from "next-sanity";
import { client } from "../../lib/sanity.client";
import BlogList from "@/components/BlogList";
import PreviewBlogList from "@/components/PreviewBlogList";
import Banner from "@/components/Banner";
import ProjectList from "@/components/ProjectList";
import PreviewProjectList from "@/components/PreviewProjectList";

const queryPosts = groq`
     *[_type == "post"] {
       ...,
       author->,
       categories[]->
     } | order(publishedAt desc)
     `;
const queryProjects = groq`
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
        <PreviewBlogList query={queryPosts} />
        <PreviewProjectList query={queryProjects} />
      </PreviewSuspense>
    );
  }
  const posts = await client.fetch(queryPosts);
  const projects = await client.fetch(queryProjects);

  return (
    <>
      <Banner />
      <hr className="border-[#d8195e] mb-2 ml-10 w-16 border-2 rounded-md" />
      <h2 className="text-3xl text-[rgb(39,44,48)] font-bold px-10">
        Publicaciones del Blog
      </h2>
      <p className="px-10 text[color: var(--secondary-text-color)] mb-5">
        Últimas publicaciones
      </p>
      <div>
        <BlogList posts={posts} home={true} />
      </div>
      <hr className="border-[#d8195e] mb-2 ml-10 w-16 border-2 rounded-md" />
      <h2 className="text-3xl text-[rgb(39,44,48)] font-bold px-10">
        Proyectos
      </h2>
      <p className="px-10 text[color: var(--secondary-text-color)] mb-5">
        Trabajos mas recientes
      </p>
      <ProjectList projects={projects} />
    </>
  );
}
