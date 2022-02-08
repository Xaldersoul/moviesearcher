/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function Movie({
  title,
  year,
  clasification,
  description,
  release,
  director,
  image,
}) {
  return (
    <div className="movie-item-style-2">
      <img src={image} alt="" />
      <div className="mv-item-infor">
        <h6>
          <a href="moviesingle.html">
            {title}
            <span>{year}</span>
          </a>
        </h6>
        <p className="rate">
          <i className="ion-android-star"></i>
          <span>{clasification}</span> /10
        </p>
        <p className="describe">{description}</p>
        <p className="run-time">
          {" "}
          Run Time: 2h21’ . <span>MMPA: PG-13 </span> .{" "}
          <span>Release: {release}</span>
        </p>
        <p>
          Director: <a href="#">{director}</a>
        </p>
        <p>
          Stars: <a href="#">Robert Downey Jr.,</a> <a href="#">Chris Evans,</a>{" "}
          <a href="#"> Chris Hemsworth</a>
        </p>
      </div>
    </div>
  );
}

export default Movie;
