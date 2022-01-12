import { ADD_MOVIE, GET_POSTS } from "../actions/postAction";

const initialState = {};

export default function moviesReducer(state = initialState, action) {
  switch (action.type) {
    case GET_POSTS:
      return action.payload;
    case ADD_MOVIE:
      return [action.payload, ...state];
    default:
      return state;
  }
}
