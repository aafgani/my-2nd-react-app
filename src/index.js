import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Cocktail, SingleCocktail } from "./component/cocktail";
import { Provider } from "react-redux";
import store from "./redux/store";
import Todo from "./component/todo";
import Movie from "./component/movie";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/cocktail" element={<Cocktail />} />
          <Route path="/cocktail/:id" element={<SingleCocktail />} />
          <Route path="todo" element={<Todo />} />
          <Route path="movie" element={<Movie />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
