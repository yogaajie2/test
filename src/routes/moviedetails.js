import Layout from "../components/Layout";
import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";

export default function MovieDetails() {
  const id  = useParams();
  const [movieDetails, SetMovieDetails] = useState({});

  useEffect(() => {
    const fetch = async () => {
      try {
        const { data } = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=2fccde01a371b106b09a241d6d1d5b49`);
        SetMovieDetails(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetch();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Layout>
      <main> 
        <table>
          <tbody>
            <tr>
              <th className="text-left p-2 align-baseline">Title</th>
              <td className="p-2 align-baseline">{movieDetails.title}</td>
            </tr>

            <tr>
              <th className="text-left p-2 align-baseline">Overview</th>
              <td className="p-2 align-baseline">{movieDetails.overview}</td>
            </tr>

            <tr>
              <th className="text-left p-2 align-baseline">Release Date</th>
              <td className="p-2 align-baseline">{movieDetails.release_date}</td>
            </tr>

            <tr>
              <th className="text-left p-2 align-baseline">Rating</th>
              <td className="p-2 align-baseline">{movieDetails.vote_average}</td>
            </tr>
          </tbody>
        </table>
      </main>
    </Layout>
  );
}