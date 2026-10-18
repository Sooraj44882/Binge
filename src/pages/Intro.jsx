import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Intro = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleEnter = () => {
    localStorage.setItem("binge_name", name);
    localStorage.setItem("binge_email", email);
    navigate("/home");
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="bg-zinc-900 p-8 rounded-md w-full max-w-sm flex flex-col gap-4 border border-zinc-800">
        
        <h1 className="text-3xl font-bold text-white text-center mb-2">Welcome to Binge</h1>
        <p className="text-gray-400 text-center text-sm mb-4">Please enter your details</p>

        <input 
          type="text" 
          placeholder="What is your Name?" 
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="p-3 bg-zinc-800 text-white rounded-sm outline-none border border-zinc-700 focus:border-white"
        />
        
        <input 
          type="email" 
          placeholder="What is your email id?" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-3 bg-zinc-800 text-white rounded-sm outline-none border border-zinc-700 focus:border-white"
        />

        <button 
          onClick={handleEnter}
          className="bg-blue-600 text-white text-center font-bold p-3 rounded-sm mt-4 hover:bg-blue-900 transition"
        >
          Enter
        </button>
        
      </div>
    </div>
  );
};

export default Intro;
