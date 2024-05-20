import { useReducer, useContext, useState } from "react";
import { MovieContext } from "./MovieContext";

const ACTIONS = {
  Add_New_Movie: "add_movie",
};
function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.Add_New_Movie:
      return [...state, newMovie(action.payload.title, action.payload.price)];
    default:
      return state;
  }
}

function newMovie(title, price) {
  return { id: Date.now(), title: title, price: price, complete: false };
}

const AddMovie = () => {
  const [movie, setMovies] = useContext(MovieContext);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [state, dispatch] = useReducer(reducer, movie);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: ACTIONS.Add_New_Movie,
      payload: { title: title, price: price },
    });
    setTitle("");
    setPrice("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add Movie title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="Number"
        placeholder="Movie price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        required
      />
      <button>Add Movie</button>
    </form>
  );
};

export default AddMovie;
