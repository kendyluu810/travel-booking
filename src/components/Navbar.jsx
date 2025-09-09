import { assets } from "../assets/assets";
import MobileMenu from "./MobileMenu";

export const menuItems = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Stays",
    link: "/stays",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Blogs",
    link: "/blogs",
  },
  {
    name: "Contact",
    link: "/contact",
  },
];

const Navbar = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-5 md:px-8">
      {/* --- Desktop Navbar (3 Columns) --- */}
      <div className="hidden md:grid md:grid-cols-12 md:items-center">
        {/* Column 1: Logo */}
        <div className="md:col-span-3">
          <a href="/">
            <img src={assets.logo} alt="Logo" className="h-10 w-auto" />
          </a>
        </div>

        {/* Column 2: Menu Items */}
        <nav className="md:col-span-6 md:flex md:justify-center md:space-x-8">
          {menuItems.map((item) => (
            <a
              href={item.link}
              key={item.link}
              className="text-gray-700 hover:text-blue-500"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Column 3: Language Selector */}
        <div className="md:col-span-3 md:flex md:justify-end">
          <ul className="flex items-center space-x-4 font-medium text-gray-600">
            <li className="cursor-pointer hover:text-blue-500">EN</li>
            <li className="cursor-pointer hover:text-blue-500">VI</li>
          </ul>
        </div>
      </div>

      {/* --- Mobile Navbar --- */}
      <div className="md:hidden flex justify-between items-center">
        {/* Logo */}
        <a href="/">
          <img src={assets.logo} alt="Logo" className="h-10 w-auto" />
        </a>

        {/* Mobile Menu Trigger */}
        <MobileMenu />
      </div>
    </div>
  );
};

export default Navbar;
