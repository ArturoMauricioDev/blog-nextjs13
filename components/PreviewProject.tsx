"use client";

import { usePreview } from "@/lib/sanity.preview";
import Project from "./Project";

type Props = {
  query: string;
  slug: string;
};

export default function PreviewProject({ query, slug }: Props) {
  const queryParams = query.replace("$slug", `"${slug}"`);
  const project = usePreview(null, queryParams);
  return <Project project={project} />;
}
