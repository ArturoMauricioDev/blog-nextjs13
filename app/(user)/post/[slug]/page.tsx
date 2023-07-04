import { groq } from "next-sanity";
import { client } from "@/lib/sanity.client";
import Post from "@/components/Post";
import { draftMode } from "next/headers";
import PreviewSuspense from "@/components/PreviewSuspense";
import PreviewPost from "@/components/PreviewPost";

type Props = {
  params: {
    slug: string;
  };
};

export const revalidate = 60; //revalidate this page every 60 seconds

export async function generateStaticParams() {
  const query = groq`*[_type=='post']
  {
    slug
  }
  `;
  const slugs: Post[] = await client.fetch(query);
  const slugRoutes = slugs.map((slug) => slug.slug.current);

  return slugRoutes.map((slug) => ({ slug }));
}

const query = groq`
    *[_type=="post" && slug.current==$slug][0]
    {
        ...,
        author->,
        categories[]->
    }
    `;

const PostPage = async ({ params: { slug } }: Props) => {
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
        <PreviewPost query={query} slug={slug} />
      </PreviewSuspense>
    );
  }

  const post: Post = await client.fetch(query, { slug });

  return <Post post={post} />;
};

export default PostPage;
