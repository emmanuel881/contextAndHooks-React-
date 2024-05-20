import { createContext, useState } from "react";

export const MovieContext = createContext();

//data will use
export const MovieProvider = (props) => {
  const [movies, setMovies] = useState([
    {
      name: "howl",
      price: "$233.99",
      id: 1,
    },
    {
      name: "hell",
      price: "$23.99",
      id: 2,
    },
    {
      name: "owl",
      price: "$33.99",
      id: 3,
    },
    {
      name: "wol",
      price: "$93.99",
      id: 4,
    },
  ]);

  return (
    <MovieContext.Provider value={[movies, setMovies]}>
      {props.children}
    </MovieContext.Provider>
  );
};
