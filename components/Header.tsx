import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
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
        <Link
          href="/contact"
          className="px-5 py-3 text-sm md:text-base bg-[#d8195e] text-white flex items-center rounded-full"
        >
          Contactame
        </Link>
      </div>
    </header>
  );
};

export default Header;