import Link from "next/link";

const NavLink = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="block py-2 pl-3 pr-4 text-[#3A3A3A] sm:text-xl rounded md:p-0 hover:text-[#FFB6C1]"
    >
      {title}
    </Link>
  );
};

export default NavLink;
