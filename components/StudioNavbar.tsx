import Link from "next/link";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";

const StudioNavbar = (props: any) => {
  return (
    <div>
      <div className="flex items-center justify-between p-5">
        <Link className="text-[#F7AB0A] flex items-center" href="/">
          <ArrowUturnLeftIcon className="h-6 w-6 mr-2" />
          Go to website
        </Link>
        <div className="hidden md:flex p-5 rounded-lg justify-center border-2 border-[#F7AB0A]">
          <h1 className="font-bold text-white">
            Want Coding challenge & Solutions sent to your inbox daily? 👉
          </h1>
          <Link
            href="https://example.com"
            className="text-[#F7AB0A] font-bold ml-2"
          >
            www.example.com
          </Link>
        </div>
      </div>
      <>{props.renderDefault(props)}</>
    </div>
  );
};

export default StudioNavbar;
