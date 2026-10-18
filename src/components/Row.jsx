const Row = ({ title }) => {
  const dummyData = [1, 2, 1, 2, 1];

  return (
    <div className="w-full mb-8">
      <h2 className="text-xl md:text-2xl font-bold text-white mb-4">
        {title}
      </h2>

      <div className="flex overflow-x-auto gap-4 pb-4 scroll-smooth">
        {dummyData.map((item, index) => (
          <div 
            key={index} 
            className="relative min-w-60 h-33.75 cursor-pointer hover:scale-105 transition-transform duration-300 shrink-0"
          >
            <img 
              src={`/images/${item}.png`} 
              alt={`Movie ${item}`} 
              className="w-full h-full object-cover rounded-md"
            />
            </div>
          ))}
      </div>
    </div>
  );
};


export default Row;
