import React from "react";
// eslint-disable-next-line no-unused-vars
import i18n from "../i18n/i18n";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/HomePage";
import About from "./pages/AboutPage";

function App() {
  return React.createElement(
    React.Fragment,
    null,
    React.createElement(
      BrowserRouter,
      { basename: import.meta.env.DEV ? "/" : "/crystal-auto-glass/" },
      React.createElement(
        Routes,
        null,
        React.createElement(Route, {
          path: "/",
          element: React.createElement(Home, null),
        }),
        React.createElement(Route, {
          path: "/about",
          element: React.createElement(About, null),
        })
      )
    )
  );
}

export default App;
