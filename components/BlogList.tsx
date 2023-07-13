import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import ClientSideRoute from "./ClientSideRoute";
import urlFor from "@/lib/urlFor";
import Cta from "./Cta";

type Props = {
  posts: Post[];
  home?: boolean;
};

const BlogList = ({ posts, home = false }: Props) => {
  let numberOfColumns =
    "grid grid-cols-1 px-10 gap-5 lg:gap-7 xlg:gap-10  gap-y-16 pb-24  md:grid-cols-2";
  if (home) {
    numberOfColumns = numberOfColumns + " lg:grid-cols-3";
    posts = posts.slice(0, 3);
  }

  return (
    <div>
      <div className={numberOfColumns}>
        {/* Posts */}
        {posts.map((post) => (
          <ClientSideRoute key={post._id} route={`/post/${post.slug.current}`}>
            <div className="group flex cursor-pointer flex-col">
              <div className="relative h-80 w-full transform-gpu drop-shadow-xl transition-transform duration-200 ease-out group-hover:scale-105">
                <Image
                  className="object-cover object-center"
                  src={urlFor(post.mainImage).url() || ""}
                  alt={post.author.name}
                  fill
                />
                <div className="absolute bottom-0 w-full bg-opacity-20 bg-neutral-900 backdrop-blur-lg rounded drop-shadow-lg text-white p-5 flex justify-between">
                  <div>
                    <p className="font-bold">{post.title}</p>
                    <p className="transform-gpu subpixel-antialiased text-sm font-normal">
                      {new Date(post.publishedAt).toLocaleDateString("en-US", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </p>
                  </div>
                  <div className="flex justify-end flex-col  gap-y-2 md:gap-x-2 items-center">
                    {post.categories.map((category) => (
                      <div
                        key={category._id}
                        className="bg-[#d8195e] text-center text-white px-3 py-1 rounded-full text-sm font-normal w-full "
                      >
                        <p>{category.title}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-5 flex-1">
                {/* <p className="underline text-lg font-bold">{post.title}</p> */}
                <p className="text-gray-500 line-clamp-2 ">
                  {post.description}
                </p>
              </div>
              <p className="mt-3 font-bold flex items-center group-hover:underline">
                Read Post
                <ArrowUpRightIcon className="ml-2 h-4 w-4" />
              </p>
            </div>
          </ClientSideRoute>
        ))}
        {home && (
          <div className="flex flex-col md:items-center lg:items-start justify-center">
            <Cta href="/post" content="Visitar el Blog" />
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogList;
