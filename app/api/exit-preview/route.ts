// // src/app/api/disable-draft/route.ts
// import type { NextApiRequest, NextApiResponse } from "next";

// export default function exit(req: NextApiRequest, res: NextApiResponse) {
//   res.clearPreviewData();
//   res.writeHead(307, { Location: "/" });
//   res.end();
// }
import { draftMode } from "next/headers";
import { redirect } from "next/navigation";

// import { nativeRedirect } from "~/lib/utils";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const draft = draftMode();

  draft.disable();

  // return nativeRedirect('/');

  redirect("/");
}
