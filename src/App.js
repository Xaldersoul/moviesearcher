import React from "react";
import {
  Routes, // Just Use Routes instead of "Switch"
  Route,
} from "react-router-dom";
import "./App.css";
import ListedMovies from "./components/ListedMovies";
import Blog from "./components/Blog";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ListedMovies />} />
      <Route path="/blog" element={<Blog />} />
    </Routes>
  );
}

export default App;
