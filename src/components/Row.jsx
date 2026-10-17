const Row = ({ title }) => {
  const dummyData = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <div className="w-full mb-12">
      <div className="flex items-center mb-6">
        <div className="w-4 h-8 bg-binge-red mr-3 transform -skew-x-12"></div>
        <h2 className="text-2xl font-black uppercase tracking-widest text-zinc-100">
          {title}
        </h2>
      </div>

      <div className="relative group">
        <div
          className="flex overflow-x-scroll gap-6 pb-4 snap-x snap-mandatory scroll-smooth"
          style={{ scrollbarWidth: "none" }}
        >
          {dummyData.map((item, index) => (
            <div
              key={index}
              className="relative min-w-70 md:min-w-[320px] h-45 bg-zinc-800 snap-center cursor-pointer border-2 border-zinc-900 hover:border-binge-red transition-none duration-0 group/card"
            >
              <div className="w-full h-full bg-zinc-700 flex items-center justify-center text-zinc-500 font-mono text-sm uppercase">
                Img{index + 1}
              </div>

              <div className="absolute inset-0 bg-black/80 opacity-0 group-hover/card:opacity-100 flex flex-col justify-end p-4">
                <span className="text-white font-bold uppercase tracking-wider mb-2 block">
                  Movie {item}
                </span>
                <div className="flex gap-2">
                  <div className="px-2 py-1 bg-white text-black text-xs font-bold uppercase transform -skew-x-12">
                    <span className="block transform skew-x-12">Play</span>
                  </div>
                  <div className="px-2 py-1 border border-white text-white text-xs font-bold uppercase transform -skew-x-12">
                    <span className="block transform skew-x-12">+ Add</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


export default Row;
