import { urlForImage } from "@/sanity/lib/image";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import RichTextComponents from "./RichTextComponents";
import Code from "./Code";

interface Props {
  project: Project;
}

const Project = ({ project }: Props) => {
  return (
    <article className="   px-10 pb-28">
      <section className="space-y-2 border border-[#d8195e]  text-white">
        <div className=" relative min-h-56 flex flex-col md:flex-row justify-between">
          <div className="absolute top-0 w-full h-full opacity-10 blur-sm p-10 ">
            <Image
              className="object-cover object-center mx-auto"
              src={urlForImage(project.mainImage).url()}
              alt={project.author.name}
              fill
            />
          </div>
          <section className="p-5 bg-[#d8195e] bg-opacity-90 w-full">
            <div className="flex flex-col justify-between gap-y-5 md:flex-row">
              <div>
                <h1 className="text-4xl font-extrabold">{project.title}</h1>
                <p>
                  {new Date(project._createdAt).toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
              </div>
              <div className="flex items-center  space-x-2">
                <Image
                  className="rounded-full"
                  src={urlForImage(project.author.image).url()}
                  alt={project.author.name}
                  height={40}
                  width={40}
                />
                <div className="w-64">
                  <h3 className="text-lg font-bold">{project.author.name}</h3>
                  <div>{/*TODO: Author bio */}</div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="italic pt-10">{project.description}</h2>
              <div className="flex items-center justify-end mt-auto space-x-2">
                {project.tecnologies.map((category) => (
                  <p
                    key={category._id}
                    className="bg-[#510c5c] text-[#f6e5c1] px-3 py-1 rounded-full text-sm font-semibold mt-4"
                  >
                    {category.title}
                  </p>
                ))}
              </div>
            </div>
          </section>
        </div>
      </section>

      <section className="flex flex-col m-auto mt-8 prose-lg md:prose-lg xl:prose-xl prose-ol:m-0 prose-ol:mb-6 prose-li:m-0 prose-a:text-[color:var(--primary-color)] ">
        <PortableText value={project.body} components={RichTextComponents} />
      </section>
    </article>
  );
};

export default Project;
