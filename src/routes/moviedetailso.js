import React from "react";
import Layout from "../components/Layout";
import axios from 'axios';
import { useParams } from "react-router-dom";

export default class MovieDetails extends React.Component {
  state = {
    movieDetails: []
  }
  const { id } = useParams();

  componentDidMount() {
    axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=2fccde01a371b106b09a241d6d1d5b49`).then(res => {
      const movieDetails = res.data;
      this.setState({ movieDetails });
    })
  }

  render() {
    return (
      <Layout>
        <main>
          {this.state.movieDetails.map((movieDetail) => (
            <div>
              <span>{movieDetail.title}</span>
              <span>{movieDetail.overview}</span>
            </div>
          ))}
        </main>
      </Layout>
    );
  }
}