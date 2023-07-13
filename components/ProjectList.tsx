import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import ClientSideRoute from "./ClientSideRoute";
import urlFor from "@/lib/urlFor";

type Props = {
  projects: Project[];
};

const ProjectList = ({ projects }: Props) => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 px-10 gap-10 gap-y-16 pb-24">
        {projects.map((project) => (
          <ClientSideRoute
            key={project._id}
            route={`/project/${project.slug.current}`}
          >
            <div className="group flex cursor-pointer flex-col">
              <div className="relative h-80 w-full transform-gpu drop-shadow-xl transition-transform duration-200 ease-out group-hover:scale-105">
                <Image
                  className="object-cover object-center"
                  src={urlFor(project.mainImage).url() || ""}
                  alt={project.author.name}
                  fill
                />
                <div className="absolute bottom-0 w-full bg-opacity-20 bg-neutral-900 backdrop-blur-lg rounded drop-shadow-lg text-white p-5 flex justify-between">
                  <div>
                    <p className="font-bold">{project.title}</p>
                    <p className="transform-gpu subpixel-antialiased">
                      {new Date(project.publishedAt).toLocaleDateString(
                        "en-US",
                        {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        }
                      )}
                    </p>
                  </div>
                  <div className="flex flex-col md:flex-row gap-y-2 md:gap-x-2 items-center">
                    {project.tecnologies.map((tecnology) => (
                      <div
                        key={tecnology._id}
                        className="bg-[#d8195e] text-center text-white px-3 py-1 rounded-full text-sm font-semibold "
                      >
                        <p>{tecnology.title}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-5 flex-1">
                {/* <p className="underline text-lg font-bold">{project.title}</p> */}
                <p className="text-gray-500 line-clamp-2 ">
                  {project.description}
                </p>
              </div>
              <p className="mt-3 font-bold flex items-center group-hover:underline">
                Read Post
                <ArrowUpRightIcon className="ml-2 h-4 w-4" />
              </p>
            </div>
          </ClientSideRoute>
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
