import React, { useState, useEffect } from "react";
import { movies$ } from "../api/movies";
import Card from "./Card/Card";
import "./Movies.css";

export default function Movies() {
  const [moviesList, setMoviesList] = useState([]);

  const deleteMovie = (id) => {
    const deleteMoviesList = moviesList.filter((movie) => movie.id !== id);
    setMoviesList(deleteMoviesList);
  };

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
          <Card {...movie} handleClick={() => deleteMovie(movie.id)} />
        </div>
      );
    });

  return (
    <>
      <div className="movies-container">{fetchMovies}</div>
    </>
  );
}
