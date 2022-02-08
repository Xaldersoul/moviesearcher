/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import "../App.js";
import Movie from "./Movie";
import PageWrapper from "./PageWrapper";
import moviesJson from "./movies.json";
import Pagination from "./Pagination";

function ListedMovies() {
  let movies = moviesJson;

  const [actualPage, setActualPage] = useState(1);
  const [actualMovies, setActualMovies] = useState([]);
  const ItemsPerPage = 3;

  const LoadMovies = () => {
    setActualMovies(
      movies.slice((actualPage - 1) * ItemsPerPage, actualPage * ItemsPerPage)
    );
  };

  const getTotalPages = () => {
    let totalCuantity = moviesJson.length;
    return Math.ceil(totalCuantity / ItemsPerPage);
  };

  useEffect(() => {
    LoadMovies();
  }, [actualPage]);

  return (
    <PageWrapper>
      {actualMovies.map((data, index) => {
        return (
          <Movie
            title={data.title}
            year={data.year}
            clasification={data.clasification}
            description={data.description}
            release={data.release}
            director={data.director}
            image={data.image}
            key={index}
          />
        );
      })}
      <Pagination
        page={actualPage}
        totalPages={getTotalPages()}
        onChange={(page) => {
          setActualPage(page);
        }}
      />
    </PageWrapper>
  );
}

export default ListedMovies;
