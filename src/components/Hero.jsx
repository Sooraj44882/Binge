const Hero = () => {
  return (
    <div className="relative w-full h-[60vh] text-white">
      
      <div className="absolute top-0 left-0 w-full h-full">
        <img 
          src="/images/hero.png" 
          alt="Spider-Man" 
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-linear-to-r from-black/90 to-transparent"></div>
      </div>

      <div className="relative z-10 pt-[20vh] px-8 md:px-16 w-full md:w-[60%]">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Spider-Man: Brand New Day
        </h1>
        
        <p className="text-gray-300 text-sm md:text-base mb-6">
          When a new threat emerges in New York City, Peter Parker must balance his ordinary life with his extraordinary responsibilities.
        </p>

        <div className="flex gap-4">
          <button className="bg-white text-black px-8 py-2 font-bold rounded-sm hover:bg-gray-300 transition">
              Stream Now
          </button>

          <button className="bg-gray-600/70 text-white px-8 py-2 font-bold rounded-sm hover:bg-gray-600 transition">
              More info
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
