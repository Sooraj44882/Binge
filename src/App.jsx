import Hero from "./components/Hero.jsx";
import Navbar from "./components/Navbar.jsx";
import Row from "./components/Row.jsx";
import Sidebar from "./components/Sidebar.jsx";

function App() {
  return (
    <div className="min-h-screen bg-binge-dark text-white font-sans overflow-x-hidden flex">
      <Sidebar />

      <div className="flex-1 pl-20">
        <Navbar />
        <Hero />
        
        <main className="px-4 md:px-12 py-12">
          <Row title="Trending Now" />
          <Row title="Watch Later" />
          <Row title="Top Rated" />
        </main>
      </div>
    </div>
  );
}

export default App;
