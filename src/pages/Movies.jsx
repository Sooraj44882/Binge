import Row from "../components/Row.jsx";

const Movies = () => {
  return (
    <div>
      
      <main className="px-4 md:px-12 py-12">
        <Row title="Action Blockbusters" />
        <Row title="Comedy Movies" />
        <Row title="Horror & Thriller" />
        <Row title="Documentaries" />
      </main>
    </div>
  );
};

export default Movies;