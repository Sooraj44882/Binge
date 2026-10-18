import { useState } from "react";
import { FaUserCircle, FaCreditCard, FaLock } from "react-icons/fa";

const Settings = () => {
  const [autoplay, setAutoplay] = useState(true);

  return (
    <div className="pt-28 px-4 md:px-16 min-h-screen max-w-4xl mx-auto text-gray-300">
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-8">
        Account Settings
      </h1>

      <div className="bg-[#181818] p-6 rounded-lg mb-8 flex flex-col md:flex-row items-center gap-6 border border-zinc-800">
        <FaUserCircle className="text-7xl text-gray-500" />
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-2xl text-white font-bold">Student Developer</h2>
          <p className="text-gray-400">student@binge.com</p>
        </div>
        <button className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-2 rounded font-bold transition">
          Manage Profile
        </button>
      </div>

      <div className="mb-8">
        <h3 className="text-xl text-white font-bold mb-4 flex items-center gap-2">
          <FaCreditCard /> Plan Details
        </h3>
        <div className="bg-[#181818] p-6 rounded-lg border border-zinc-800 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <p className="text-white font-bold text-lg">Premium Ultra HD</p>
            <p className="text-sm text-gray-400">
              Next billing date: November 15, 2026
            </p>
          </div>
          <button className="text-blue-400 hover:text-white transition font-bold">
            Change Plan
          </button>
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-xl text-white font-bold mb-4 flex items-center gap-2">
          <FaLock /> Preferences
        </h3>
        <div className="bg-[#181818] p-6 rounded-lg border border-zinc-800 space-y-6">
          <div className="flex justify-between items-center pb-6 border-b border-zinc-700">
            <div className="pr-4">
              <p className="text-white font-bold">Autoplay next episode</p>
              <p className="text-sm text-gray-400 mt-1">
                Automatically play the next episode in a series on all devices.
              </p>
            </div>

            <button
              onClick={() => setAutoplay(!autoplay)}
              className={`w-14 h-7 rounded-full relative transition-colors duration-300 shrink-0 ${
                autoplay ? "bg-blue-600" : "bg-gray-600"
              }`}
            >
              <div
                className={`w-5 h-5 bg-white rounded-full absolute top-1 transition-transform duration-300 ${
                  autoplay ? "translate-x-8" : "translate-x-1"
                }`}
              ></div>
            </button>
          </div>

          <div className="flex justify-between items-center">
            <div>
              <p className="text-white font-bold">Email Notifications</p>
              <p className="text-sm text-gray-400 mt-1">
                Receive emails about new features and releases.
              </p>
            </div>
            <button className="text-blue-400 hover:text-white transition font-bold">
              Manage
            </button>
          </div>
        </div>
      </div>

      <div className="mb-12 border-t border-zinc-800 pt-8">
        <button className="border border-gray-500 text-white px-8 py-3 rounded font-bold hover:bg-white hover:text-black transition">
          Sign Out of Binge
        </button>
      </div>
    </div>
  );
};

export default Settings;
