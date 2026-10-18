import { useState } from "react";
import Modal from "./Modal";
import { FaPlay, FaPlus } from "react-icons/fa"; 

const Row = ({ title }) => {
  const dummyData = [1, 2, 1, 1, 2, 1, 2, 1];
  const [selectedMovie, setSelectedMovie] = useState(null);

  return (
    <div className="w-full mb-8 relative">
      <h2 className="text-xl md:text-2xl font-bold text-white mb-4">
        {title}
      </h2>

      <div className="flex overflow-x-auto gap-4 pb-4 scroll-smooth">
        {dummyData.map((item, index) => (
          <div 
            key={index} 
            onClick={() => setSelectedMovie(item)}
            className="relative min-w-6035px] cursor-pointer hover:scale-105 transition-transform duration-300 shrink-0 group rounded-md overflow-hidden"
          >
            <img 
              src={`/images/${item}.png`} 
              alt={`Movie ${item}`} 
              className="w-full h-full object-cover"
            />
            
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3">
               <p className="text-white text-sm font-bold mb-2">Movie {item}</p>
               
               <div className="flex gap-2">
                 <div className="w-7 h-7 bg-white rounded-full flex items-center justify-center hover:bg-gray-300 transition">
                   <FaPlay className="text-black text-xs ml-0.5" />
                 </div>
                 <div className="w-7 h-7 border-2 border-gray-400 rounded-full flex items-center justify-center hover:border-white transition">
                   <FaPlus className="text-white text-xs" />
                 </div>
               </div>
            </div>
          </div>
        ))}
      </div>

      {selectedMovie && (
        <Modal movie={selectedMovie} onClose={() => setSelectedMovie(null)} />
      )}
    </div>
  );
};


export default Row;
