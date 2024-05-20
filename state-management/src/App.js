import "./App.css";
import { MovieProvider } from "./MovieContext";

import AddMovie from "./addMovie";
import Movielist from "./movieList";

function App() {
  return (
    <MovieProvider>
      <div className="App">
        <Movielist />
        <AddMovie />
      </div>
    </MovieProvider>
  );
}

export default App;
