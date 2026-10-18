import { FaPlay, FaPlus, FaTimes } from "react-icons/fa";

const Modal = ({ movie, onClose }) => {

  console.log(movie);
  console.log(onClose);
  if (!movie) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="relative w-full max-w-2xl bg-[#181818] rounded-lg overflow-hidden shadow-2xl">
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 bg-[#181818] rounded-full flex items-center justify-center text-gray-300 hover:text-white hover:bg-neutral-800 transition"
        >
          <FaTimes />
        </button>

        <div className="relative h-75 w-full bg-black">
          <img
            src={`/images/${movie}.png`}
            alt={`Movie ${movie}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 w-full h-32 bg-linear-to-t from-[#181818] to-transparent"></div>
        </div>

        <div className="p-8 pt-0">
          <h2 className="text-3xl font-bold text-white mb-6">Movie Title {movie}</h2>
          
          <div className="flex gap-3 mb-6">
            <button className="flex items-center gap-2 bg-white text-black px-6 py-2 rounded font-bold hover:bg-gray-300 transition">
              <FaPlay className="text-sm" />
              Play
            </button>
            
            <button className="flex items-center gap-2 border border-gray-500 text-white px-6 py-2 rounded font-bold hover:border-white transition">
              <FaPlus className="text-sm" />
              My List
            </button>
          </div>
          
          <p className="text-gray-300 text-sm leading-relaxed">
            This is a placeholder description for Movie {movie}. 
          </p>
        </div>
      </div>
    </div>
  );
};

export default Modal;