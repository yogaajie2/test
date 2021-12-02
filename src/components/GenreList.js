import React from "react";
import axios from 'axios';
const baseURL = "https://api.themoviedb.org/3/genre/movie/list?api_key=2fccde01a371b106b09a241d6d1d5b49";

export default class GenreList extends React.Component {
  state = {
    genres: []
  }

  componentDidMount() {
    axios.get(baseURL).then(res => {
      const genres = res.data.genres;
      this.setState({ genres });
    })
  }

  render() {
    return (
      <div>
        <table className="border-2 border-gray-300 w-full text-center shadow-md">
          <thead>
            <tr className="text-sm bg-green-300 text-gray-600">
              <th>ID</th>
              <th>Name</th>
            </tr>
          </thead>

          <tbody className="divide-y-2 divide-gray-300">
            {this.state.genres.map(genre =>
              <tr>
                <td className="p-2">{genre.id}</td>
                <td className="p-2 font-bold">{genre.name}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  }
}
