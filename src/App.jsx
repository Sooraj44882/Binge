import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <div className="min-h-screen bg-binge-dark text-white font-sans">
      <Navbar />
      <main>
        <p className="pt-24 px-4 md:px-8 flex flex-col items-center justify-center h-screen text-amber-500">
          Hi welcome to binge
        </p>
      </main>
    </div>
  );
}

export default App;
