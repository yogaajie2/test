import Layout from "../components/Layout";
import GenreList from "../components/GenreList";

export default function Genres() {
  return (
    <Layout>
      <main>
        <h1 className="font-bold text-xl mb-8">Genres</h1>
        <GenreList />
      </main>
    </Layout>
  );
}