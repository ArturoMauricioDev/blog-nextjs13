import Image from "next/image";
import Link from "next/link";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5 border-b">
      <div className="flex items-center space-x-2">
        <Link href="/">
          <Image
            className="rounded-full"
            src="/logo.png"
            alt="logo"
            width={50}
            height={50}
          />
        </Link>
        <h1 className=" text-[rgb(39,44,48)]">Arturo Mauricio Dev</h1>
      </div>
      <div>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
