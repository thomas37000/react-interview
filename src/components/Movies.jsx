import React, { useState, useEffect } from "react";
import { movies$ } from "../api/movies";
import Card from "./Card/Card";
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
        <div className="card-movies">
          <Card key={movie.id} {...movie} />
        </div>
      );
    });

  return (
    <>
      <div className="movies-container">{fetchMovies}</div>
    </>
  );
}
