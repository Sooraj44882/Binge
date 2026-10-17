const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full p-4 md:px-8 flex items-center justify-between z-50 bg-linear-to-b from-black/90 to-transparent">
      <div className="text-binge-red text-3xl font-bold uppercase tracking-wider cursor-pointer">
        Binge
      </div>

      <div>
        <input
          type="text"
          placeholder="Search movies..."
          className="bg-gray-900 border border-gray-500 p-2 text-white rounded-2xl"
        />
      </div>

      <div className="flex items-center gap-4 text-sm font-medium">
        <button className="text-white hover:text-gray-300 transition-colors">
          Sign
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
