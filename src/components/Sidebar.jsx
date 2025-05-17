import { useState } from "react";
import { IoIosHome } from "react-icons/io";
import { FaUserAlt } from "react-icons/fa";
import { FaFileCode } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { FaFolder } from "react-icons/fa";
import { IoMailUnreadSharp } from "react-icons/io5";
import { MdMenuOpen } from "react-icons/md";
import { MdCancel } from "react-icons/md";

import { Link } from "react-scroll";

const navItems = [
  { id: "home", label: "Home", icon: <IoIosHome /> },
  { id: "about", label: "About Me", icon: <FaUserAlt /> },
  { id: "skills", label: "Skills", icon: <FaFileCode /> },
  { id: "publications", label: "Publications", icon: <FaBook /> },
  { id: "projects", label: "Projects", icon: <FaFolder /> },
  { id: "contact", label: "Contact Me", icon: <IoMailUnreadSharp /> },
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex flex-col fixed top-0 left-0 h-full w-60 bg-gray-900 text-white p-6 shadow-lg z-20">
        <h1 className="text-2xl font-bold mb-8">Mosfeq</h1>
        <nav className="space-y-4">
          {navItems.map((item) => (
            <Link
              key={item.id}
              to={item.id}
              smooth={true}
              duration={500}
              className="flex items-center gap-3 cursor-pointer hover:text-blue-400 transition"
            >
              {item.icon}
              {item.label}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Mobile Header */}
      <header className="md:hidden fixed top-0 left-0 right-0 bg-gray-900 text-white flex items-center justify-between px-4 py-3 z-30 shadow-md">
        <h1 className="text-xl font-bold">Mosfeq</h1>
        <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
          {isOpen ? <MdCancel size={24} /> : <MdMenuOpen size={24} />}
        </button>
      </header>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden fixed top-14 left-0 right-0 bg-gray-800 text-white z-30 p-4 shadow-lg space-y-4">
          {navItems.map((item) => (
            <Link
              key={item.id}
              to={item.id}
              smooth={true}
              duration={500}
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 cursor-pointer hover:text-blue-400 transition"
            >
              {item.icon}
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Sidebar;
