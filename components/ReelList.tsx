import { client } from "@/lib/sanity.client";
import { groq } from "next-sanity";
import React from "react";
const query = groq`
   *[_type == "reel"] {
       ...,
     } | order(_createdAt desc)  
    `;

export const revalidate = 60;

export const ReelList = async () => {
  const reels: Reel[] = await client.fetch(query);
  console.log(reels);
  return (
    <section className="grid grid-cols-1 md:px-10 gap-5 lg:gap-7 xlg:gap-10  gap-y-16 pb-24  md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
      {reels.map((reel) => (
        <div
          key={reel._id}
          className="group"
          dangerouslySetInnerHTML={{ __html: reel.embed || "" }}
        ></div>
      ))}
    </section>
  );
};
