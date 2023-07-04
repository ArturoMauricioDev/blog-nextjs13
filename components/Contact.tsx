import Link from "next/link";

const Contact = () => {
  return (
    <div>
      <Link
        href="/contact"
        // className="px-5 py-3 text-sm md:text-base bg-[#d8195e] text-white flex items-center rounded-full"
      >
        <button
          type="button"
          className="relative my-5  h-12 w-40 border-2 border-[#d8195e]  text-[#d8195e]  before:absolute before:-bottom-2 before:-right-2 before:h-4 before:w-4 before:border-b before:border-r before:border-[#d8195e] before:transition-all before:duration-300 before:ease-in-out after:absolute after:-top-2 after:-left-2 after:h-4 after:w-4 after:border-t after:border-l after:border-[#d8195e] after:transition-all after:duration-300 after:ease-in-out hover:before:h-[calc(100%+16px)] hover:before:w-[calc(100%+16px)] hover:after:h-[calc(100%+16px)] hover:after:w-[calc(100%+16px)]"
        >
          Contáctame
        </button>
      </Link>
    </div>
  );
};

export default Contact;
