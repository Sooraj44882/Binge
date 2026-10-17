import { useState } from "react";

const Sidebar = () => {
  const [isHovered, setIsHovered] = useState(false);

  const menuItems = [
    { name: "Search", path: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" },
    { name: "Home", path: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" },
    { name: "Series", path: "M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" },
    { name: "Movies", path: "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" },
    { name: "My List", path: "M12 4v16m8-8H4" },
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
          <div
            key={index}
            className="flex items-center w-full px-6 cursor-pointer group"
          >
            <div className="min-w-6 text-zinc-500 group-hover:text-white">
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="square" strokeLinejoin="miter" d={item.path} />
              </svg>
            </div>

            {isHovered && (
              <span className="ml-6 text-zinc-500 font-bold uppercase tracking-widest group-hover:text-white whitespace-nowrap">
                {item.name}
              </span>
            )}
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
