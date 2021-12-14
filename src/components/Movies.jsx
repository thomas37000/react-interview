import React, { useEffect, useState } from "react";
import Select from "react-select";
import { movies$ } from "../api/movies";
import Card from "./Card/Card";
import "./Movies.css";

export default function Movies({options}) {
  const [moviesList, setMoviesList] = useState([]);
  const [likeMovie, setLikeMovie] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const deleteMovie = (id) => {
    const deleteMoviesList = moviesList.filter((movie) => movie.id !== id);
    setMoviesList(deleteMoviesList);
  };

  const onToggleMovie = () => {
    setLikeMovie(!likeMovie);
  };

  const SelectGenres = () => {
    setSelectedOption(selectedOption);
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
        <div className="container" key={movie.id}>
          <Card
            {...movie}
            handleClick={() => deleteMovie(movie.id)}
            onToggle={() => onToggleMovie()}
            onChange={SelectGenres}
          />
        </div>
      );
    });

  return (
    <>
      <div className="movies-container">{fetchMovies}</div>
    </>
  );
}
