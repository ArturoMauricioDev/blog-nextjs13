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
      <PortableText value={author.bio} components={RichTextComponents} />
      <Contact />
    </div>
  );
};

export default AboutPage;
