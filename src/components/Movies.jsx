import React, { useEffect, useState } from "react";
import Select from "react-select";
import { useSelector } from "react-redux";
import ReactPaginate from "react-paginate";
import { movies$ } from "../api/movies";
import Card from "./Card/Card";
import "./Movies.css";
import { isEmpty } from "./utils";
import Form from "./Form";

export default function Movies() {
  const [moviesList, setMoviesList] = useState([]);
  const [selectedOption, setSelectedOption] = useState("All Genres");
  const [pageNumber, setPageNumber] = useState(0);
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);
  const allMovies = useSelector((state) => state.moviesReducer);
  console.log("redux", allMovies);

  /************************ delete movie filter by id ************************/
  const deleteMovie = (id) => {
    const deleteMoviesList = moviesList.filter((movie) => movie.id !== id);
    setMoviesList(deleteMoviesList);
  };

  /************************ toggle button like && dislike ************************/
  const AddOneLike = () => {
    setLike(like + 1);
    console.log(like);
  };

  const AddOneDislike = () => {
    setDislike(dislike + 1);
    console.log(dislike);
  };

  /************************ pagination ************************/
  const moviePagination = 3;
  const pagesVisited = pageNumber * moviePagination;

  const pageCount = Math.ceil(moviesList.length / moviePagination);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  /************************ Filter select-categories ************************/

  const SelectGenres = () => {
    setSelectedOption(selectedOption);
  };

  const categoriesMovies = [
    ...new Map(
      moviesList.map((movie) => [movie.category, movie.category])
    ).values(),
  ];

  const options = [{ value: "All", label: "All Genres" }];

  categoriesMovies.forEach((category) => {
    options.push({ value: category, label: category });
  });

  /************************ fetch movies list ************************/
  useEffect(() => {
    const loadJsonMovies = async () => {
      await movies$.then((res) => {
        // console.log("movies list", res);
        setMoviesList(res);
      });
    };
    loadJsonMovies();
  }, []);

  const fetchMovies =
    !isEmpty(allMovies) &&
    allMovies
      .slice(pagesVisited, pagesVisited + moviePagination)
      .map((movie, index) => {
        return (
          <div className="container" key={index}>
            <Card
              {...movie}
              handleClick={() => deleteMovie(movie.id)}
              onChange={SelectGenres}
              onLike={() => AddOneLike()}
              onDislike={() => AddOneDislike()}
            />
          </div>
        );
      });

  return (
    <>
      <div className="movies-container">
        <Form />
        {/************************ Filter select-categories ************************/}
        <div className="select-categories">
          <Select
            data-testid="filter-movies"
            defaultValue={selectedOption}
            value={selectedOption}
            placeholder={selectedOption}
            onChange={SelectGenres}
            options={options}
            isSearchable
          />
        </div>
        {/************************ fetch movies list ************************/}
        {fetchMovies}
        {/************************ pagination ************************/}
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
