import React, { useContext } from "react";
import { MovieContext } from "./MovieContext";

const Nav = () => {
  const [movies, setMovies] = useContext(MovieContext);
  return (
    <div>
      <h3>Michael Hermawan</h3>
      <p>List of Movies: {movies.lenght}</p>
    </div>
  );
};

export default Nav;
