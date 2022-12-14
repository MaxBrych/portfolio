import Link from "next/link";

const HeaderNavbar = () => {
  return (
    <nav className="flex items-center justify-between h-16 text-white bg-gray-900 border-b-2 border-gray-800 ">
      <h1 className="text-gray-200">Max Brych</h1>
      <ul className="flex items-center">
        <li>
          <Link
            href="/"
            className="px-3 py-1 text-gray-200 rounded-full hover:bg-gray-800"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="./About"
            className="px-3 py-1 text-gray-200 rounded-full hover:bg-gray-800"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="/"
            className="px-3 py-1 text-gray-200 rounded-full hover:bg-gray-700"
          >
            Blog
          </Link>
        </li>
      </ul>
      {/* Nav links go here */}
    </nav>
  );
};

export default HeaderNavbar;
