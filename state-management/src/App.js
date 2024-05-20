import "./App.css";
import { MovieProvider } from "./MovieContext";

import Movielist from "./movieList";

function App() {
  return (
    <MovieProvider>
      <div className="App">
        <Movielist />
      </div>
    </MovieProvider>
  );
}

export default App;
