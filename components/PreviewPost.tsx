"use client";

import { usePreview } from "@/lib/sanity.preview";
import Post from "./Post";

type Props = {
  query: string;
  slug: string;
};

export default function PreviewPost({ query, slug }: Props) {
  const queryParams = query.replace("$slug", `"${slug}"`);
  console.log(queryParams);
  const post = usePreview(null, queryParams);
  console.log(post);
  return <Post post={post} />;
}
