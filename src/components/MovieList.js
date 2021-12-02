import React from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
const baseURL = "https://api.themoviedb.org/3/movie/upcoming?api_key=2fccde01a371b106b09a241d6d1d5b49&page=1";

export default class MovieList extends React.Component {
  state = {
    movies: []
  }

  componentDidMount() {
    axios.get(baseURL).then(res => {
      const movies = res.data.results;
      this.setState({ movies });
    })
  }

  render() {
    return (
      <div>
        <table className="border-2 border-gray-300 w-full text-center shadow-md">
          <thead>
            <tr className="text-sm bg-green-300 text-gray-600">
              <th>ID</th>
              <th>Title</th>
            </tr>
          </thead>

          <tbody className="divide-y-2 divide-gray-300">
            {this.state.movies.map(movie =>
              <tr>
                <td className="p-2">{movie.id}</td>
                
                <Link to={`/moviedetails/${movie.id}`}>
                  <td className="p-2 font-bold">{movie.title}</td>
                </Link>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  }
}
