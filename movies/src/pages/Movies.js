import React, { Fragment } from "react";
import { MovieItem } from "../components/MovieItem";
import { Search } from "../components/Search";
import { useSelector } from "react-redux";

export const Movies = () => {
  const movies = useSelector((state) => state);
  return (
    <Fragment>
      <Search />
      <h1> Movies </h1>
      <div className="card-main">
        {movies.movie.moviesData?.Search?.map((item) => (
          <MovieItem item={item} key={item.imdbID} />
        ))}
      </div>
    </Fragment>
  );
};
