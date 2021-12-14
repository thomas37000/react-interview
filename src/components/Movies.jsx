import React, { useState, useEffect } from "react";
import { movies$ } from "../api/movies";
import "./Movies.css";

export default function Movies() {
  const [moviesList, setMoviesList] = useState([]);

  useEffect(() => {
    const loadJsonMovies = async () => {
      await movies$.then((res) => {
        console.log("movies list", res);
        setMoviesList(res);
      });
    };
    loadJsonMovies();
  }, []);

  const fetchMovies =
    moviesList &&
    moviesList.map((movie) => {
      return (
        <div className="card-movies" key={movie.id}>
          <h1>{movie.title}</h1>
        </div>
      );
    });

  return (
    <>
      <div className="movies-container">{fetchMovies}</div>
    </>
  );
}
