"use client";
import { routes } from "@/lib/routes";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const currentRoute = usePathname();

  const activeStyle = " text-[#d8195e]";
  const nonActiveStyle = " text-[#272c30] hover:text-[#d8195e]";

  return (
    <div>
      <nav>
        <ul className="flex gap-4 items-center font-normal">
          {routes.map(({ to, name }) => (
            <li key={to}>
              <Link
                href={to}
                className={currentRoute === to ? activeStyle : nonActiveStyle}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
