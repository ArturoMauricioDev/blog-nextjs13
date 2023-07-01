// src/app/api/draft/route.ts
import { draftMode } from "next/headers";
import { redirect } from "next/navigation";

// import { SANITY_PREVIEW_SECRET } from '~/config';
// import { nativeRedirect } from "~/lib/utils";

export async function GET(request: Request) {
  // const { searchParams } = new URL(request.url);
  // const secret = searchParams.get('secret');
  // const slug = searchParams.get('slug');

  // // SANITY_PREVIEW_SECRET is the same secret from above resolve preivew url.
  // if (secret !== SANITY_PREVIEW_SECRET || !slug) {
  //   return new Response('Invalid token', { status: 401 });
  // }

  const draft = draftMode();

  draft.enable();

  // return nativeRedirect(slug);
  redirect("/");
}
