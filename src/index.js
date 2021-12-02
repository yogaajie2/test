import React from 'react';
import ReactDOM from 'react-dom';
import { 
  BrowserRouter,
  Routes,
  Route 
} from "react-router-dom";
import './index.css';
import App from './App';
import Genres from "./routes/genres";
import Movies from "./routes/movies";
import MovieDetails from "./routes/moviedetails";
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="genres" element={<Genres />} />
      <Route path="movies" element={<Movies />} />
      <Route path="moviedetails/:id" element={<MovieDetails />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
