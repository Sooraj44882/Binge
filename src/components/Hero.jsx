const Hero = () => {
  return (
    <div className="relative w-full h-[70vh] border-b-8 border-binge-red">
      <div className="absolute top-0 left-0 w-full h-full bg-zinc-900">
        <div className="absolute w-full h-full bg-linear-to-r from-black via-black/80 to-transparent z-10"></div>
      </div>

      <div className="relative z-20 pt-[25vh] px-4 md:px-12 w-full md:w-[65%]">
        <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white mb-4">
          NAMe
        </h1>
        <p className="text-zinc-400 text-lg mb-8 max-w-xl font-mono">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam,
          dolorem.
        </p>

        <div className="flex flex-wrap gap-6">
          <button className="bg-binge-red px-10 py-3 transform -skew-x-12 hover:bg-white hover:text-black transition-none duration-0">
            <span className="block transform skew-x-12 font-bold uppercase tracking-widest">
              Stream Now
            </span>
          </button>

          <button className="bg-transparent border-2 border-zinc-500 px-10 py-3 transform -skew-x-12 hover:border-white hover:bg-white hover:text-black transition-none duration-0">
            <span className="block transform skew-x-12 font-bold uppercase tracking-widest">
              More info
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
