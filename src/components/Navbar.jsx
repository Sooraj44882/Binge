const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full p-4 md:px-8 flex items-center justify-between z-40 bg-linear-to-b from-black/90 to-transparent pl-24 md:pl-28">
      <div className="text-binge-red text-3xl font-black uppercase tracking-wider cursor-pointer transform -skew-x-12">
        <span className="block transform skew-x-12">Binge</span>
      </div>

      <div>
        <input
          type="text"
          placeholder="Search movies..."
          className="bg-gray-900 border border-gray-500 p-2 text-white rounded-2xl"
        />
      </div>

      <div className="flex items-center gap-4 text-sm font-bold uppercase tracking-widest">
        <button className="text-white hover:text-gray-300 transition-colors">
          Sign
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
