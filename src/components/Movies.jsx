import React, { useEffect, useState } from "react";
import Select from "react-select";
import ReactPaginate from "react-paginate";
import { movies$ } from "../api/movies";
import Card from "./Card/Card";
import "./Movies.css";

export default function Movies({ options }) {
  const [moviesList, setMoviesList] = useState([]);
  const [likeMovie, setLikeMovie] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [pageNumber, setPageNumber] = useState(0);

  const moviePagination = 3;
  const pagesVisited = pageNumber * moviePagination;

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
    moviesList
      .slice(pagesVisited, pagesVisited + moviePagination)
      .map((movie) => {
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

  const pageCount = Math.ceil(moviesList.length / moviePagination);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <>
      <div className="movies-container">
        <div className="select-categories">
          <Select />
        </div>
        {fetchMovies}{" "}
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={"paginationBtn"}
          previousLinkClassName={"previousBtn"}
          nextLinkClassName={"nextBtn"}
          disabledClassName={"paginationDisabled"}
          activeClassName={"paginationActive"}
        />
      </div>
    </>
  );
}
