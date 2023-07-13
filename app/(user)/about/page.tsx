import Contact from "@/components/Contact";
import ContactBanner from "@/components/ContactBanner";
import RichTextComponents from "@/components/RichTextComponents";
import { client } from "@/lib/sanity.client";
import { urlForImage } from "@/sanity/lib/image";
import { PortableText } from "@portabletext/react";
import { groq } from "next-sanity";
import Image from "next/image";

const query = groq`
     *[_type == "author"] 
     `;

const AboutPage = async () => {
  const [author]: [Author] = await client.fetch(query);
  return (
    <div className="px-10">
      <ContactBanner />
      <div className=" relative w-full h-96">
        <Image
          className=" object-contain"
          alt={author.name}
          src={urlForImage(author.image).url()}
          fill
        />
      </div>
      <section className="flex flex-col m-auto mt-8 prose-lg">
        <PortableText value={author.bio} components={RichTextComponents} />
        <div className="flex items-center justify-center">
          <Contact />
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
