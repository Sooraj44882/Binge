import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Home from "./pages/Home.jsx";
import Series from "./pages/series.jsx";
import Setting from "./pages/Setting.jsx";
import Intro from "./pages/Intro.jsx";
import Movies from "./pages/Movies.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<Intro />} />

        <Route path="/*" element={
          <div className="min-h-screen bg-black text-white font-sans overflow-x-hidden flex">
            <Sidebar />

            <div className="flex-1 pl-20">
              <Navbar />

              <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/Series" element={<Series />} />
                <Route path="/Setting" element={<Setting/>} />
                <Route path="/Movies" element={<Movies/>}/>

              </Routes>
            </div>
          </div>
        } />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
