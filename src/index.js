import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
// à enlever avant de mettre en production si non l'extension
// est accesible à l'utilisateur & développeur qui à la même extension
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

// eslint-disable-next-line no-undef
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
