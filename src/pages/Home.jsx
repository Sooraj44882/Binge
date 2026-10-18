import Hero from "../components/Hero";
import Row from "../components/Row";

const Home = () => {
  return (
    <div>
      <Hero />

      <main className="px-4 md:px-12 py-12">
        <Row title="Trending Now" />
        <Row title="Watch Later" />
        <Row title="Top Rated" />
      </main>
    </div>
  );
};

export default Home;
