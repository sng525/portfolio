import Link from "next/link";

const NavLink = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="block py-2 pl-3 pr-4 text-green-700 sm:text-xl rounded md:p-0 hover:text-green-300"
    >
      {title}
    </Link>
  );
};

export default NavLink;
