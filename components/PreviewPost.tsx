"use client";

import { usePreview } from "@/lib/sanity.preview";
import Post from "./Post";

type Props = {
  query: string;
};

export default function PreviewBlogList({ query }: Props) {
  const posts = usePreview(null, query);

  return (
    <div>hola</div>
    //   <Post posts={posts} />
  );
}
