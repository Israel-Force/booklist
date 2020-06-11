import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { BookContextProvider } from "./context/BooklistContext";
import { ThemeContextProvider } from "./context/ThemeContext";
import Container from "./components/container";

ReactDOM.render(
  <React.StrictMode>
    <BookContextProvider>
      <ThemeContextProvider>
        <Container />
      </ThemeContextProvider>
    </BookContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
