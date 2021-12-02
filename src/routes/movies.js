import Layout from "../components/Layout";
import MovieList from "../components/MovieList";

export default function Movies() {
  return (
    <Layout>
      <main>
        <h1 className="font-bold text-xl mb-8">Movies</h1>
        <MovieList />
      </main>
    </Layout>
  );
}