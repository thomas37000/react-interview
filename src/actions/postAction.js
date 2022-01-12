// poayload = les données
import axios from "axios";

export const GET_POSTS = "GET_POSTS";
export const ADD_MOVIE = "ADD_MOVIE";

export const getPosts = () => {
  return (dispatch) => {
    return axios
      .get(`http://localhost:3000/movies?_sort=id&_order=desc`)
      .then((res) => {
        dispatch({ type: GET_POSTS, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};

export const addMovie = (data) => {
    return (dispatch) => {
      return axios
        .post(`http://localhost:3000/movies`, data)
        .then(() => {
          dispatch({ type: ADD_MOVIE, payload: data });
        })
        .catch((err) => console.log(err));
    };
  };