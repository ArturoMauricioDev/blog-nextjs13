import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import CodeBlock from "./CodeBlock";
import { string_to_slug } from "@/lib/createSlug";

const RichTextComponents = {
  types: {
    image: ({ value }: any) => {
      return (
        <div className="relative  mx-auto h-[24rem]  md:h-[50rem]  w-full">
          <Image
            className="object-contain !my-0"
            src={urlForImage(value).url()}
            alt="Blog post Image"
            fill
          ></Image>
        </div>
      );
    },
    code: ({ value }: any) => {
      return <CodeBlock data={value} />;
    },
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="ml-10 list-disc   ">{children}</ul>
    ),
    number: ({ children }: any) => <ol className="list-decimal">{children}</ol>,
  },
  block: {
    h1: ({ children }: any) => (
      <h1 className="text-5xl font-bold">{children}</h1>
    ),
    h2: ({ children }: any) => {
      let [slug]: string = children;

      slug = string_to_slug(slug);

      return (
        <h2 id={slug} className="text-4xl font-bold">
          {children}
        </h2>
      );
    },
    h3: ({ children }: any) => {
      let [slug]: string = children;

      slug = string_to_slug(slug);

      return (
        <h3 id={slug} className="text-3xl font-bold">
          {children}
        </h3>
      );
    },
    h4: ({ children }: any) => (
      <h4 className="text-2xl font-bold">{children}</h4>
    ),

    blockquote: ({ children }: any) => (
      <blockquote className="my-5 border-l-4 border-[#d8195e] border-opacity-60  py-5 pl-5 text-xl italic">
        {children}
      </blockquote>
    ),
    // code: ({ children }: any) => (
    //   // <pre className="prose prose-code:text-red-500 my-5  py-5 pl-5">
    //   //   <code>{children}</code>
    //   // </pre>
    //   <Code texto={children} />
    // ),
  },
  marks: {
    link: ({ children, value }: any) => {
      const rel = !value.href.startsWith("/")
        ? "noreferrer noopener"
        : undefined;

      return (
        <Link
          href={value.href}
          rel={rel}
          className="underline decoration-emphasize hover:decoration-pink-800"
        >
          {children}
        </Link>
      );
    },
  },
};

export default RichTextComponents;
