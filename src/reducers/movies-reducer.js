import { GET_POSTS } from "../actions/postAction";

const initialState = {};

export default function moviesReducer(state = initialState, action) {
  switch (action.type) {
    case GET_POSTS:
      return action.payload;
    default:
      return state;
  }
}
