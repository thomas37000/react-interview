import { combineReducers } from "redux";
import moviesReducer from "./movies-reducer";
import userReducer from "./user-Reducer";

export default combineReducers({ moviesReducer, userReducer });
