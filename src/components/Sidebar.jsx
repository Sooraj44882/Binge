import { useState } from "react";
import { FaFilm, FaHome, FaList, FaSearch, FaTv,FaCog } from "react-icons/fa";
import { Link } from "react-router-dom";


const Sidebar = () => {
  const [isHovered, setIsHovered] = useState(false);

  const menuItems = [
    { name: "Search", icon: <FaSearch />, path: "/search" },
    { name: "Home", icon: <FaHome />, path: "/home" },
    { name: "Series", icon: <FaTv />, path: "/Series" },
    { name: "Movies", icon: <FaFilm />, path: "/movies" },
    { name: "My List", icon: <FaList />, path: "/my-list" },
    { name: "Settings", icon: <FaCog />, path: "/Setting" },
  ];

  return (
    <aside
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`fixed top-0 left-0 h-screen bg-black border-r-4 border-zinc-900 z-50 flex flex-col pt-24 ${
        isHovered ? "w-64" : "w-20"
      }`}
    >
      <div className="flex flex-col gap-8 w-full">
        {menuItems.map((item, index) => (
          <Link
            to={item.path}
            key={index}
            className="flex items-center w-full px-6 cursor-pointer group"
          >
            <div className="min-w-6 text-zinc-500 group-hover:text-white text-xl">
              {item.icon}
            </div>

            {isHovered && (
              <span className="ml-6 text-zinc-500 font-bold uppercase tracking-widest group-hover:text-white whitespace-nowrap">
                {item.name}
              </span>
            )}
          </Link>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
