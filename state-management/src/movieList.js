import { useState, useContext } from "react";
import { MovieContext } from "./MovieContext";
import Movie from "./movie";

const Movielist = () => {
  const [movies, setMovies] = useContext(MovieContext);

  return (
    <div>
      {movies.map((movie) => (
        <Movie name={movie.name} price={movie.price} key={movie.id} />
      ))}
    </div>
  );
};

export default Movielist;
