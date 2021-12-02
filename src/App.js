import Layout from "./components/Layout";
import { Link } from "react-router-dom";

function App() {
  return (
    <Layout>      
      <main className="flex h-screen justify-center">
        <div>
          <h1 className="font-bold text-center text-xl mb-8">Welcome</h1>
  
          <nav className="flex justify-around mt-16 gap-8 text-gray-600 text-lg lg:justify-center">
            <Link to="/genres" className="transition-colors hover:text-black">
              <span className="p-8 rounded-lg w-1/2 text-2xl bg-green-300 shadow-lg">Genres</span>
            </Link>
  
            <Link to="/movies" className="transition-colors hover:text-black">
              <span className="p-8 rounded-lg w-1/2 text-2xl bg-green-300 shadow-lg">Movies</span>
            </Link>
          </nav>
        </div>
      </main>
    </Layout>
  );
}

export default App;
