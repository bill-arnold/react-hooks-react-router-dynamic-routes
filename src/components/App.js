
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MoviesPage from "./MoviesPage";

function App() {
  const [movies, setMovies] = useState({
    1: { id: 1, title: "A River Runs Through It", genre: "Drama", releaseYear: 1992 },
    2: { id: 2, title: "Se7en", genre: "Crime, Drama, Mystery", releaseYear: 1995 },
    3: { id: 3, title: "Inception", genre: "Action, Adventure, Sci-Fi", releaseYear: 2010 },
  });

  return (
    <Router>
      <Switch>
        <Route path="/movies">
          <MoviesPage movies={movies} />
        </Route>
        <Route exact path="/">
          <div>Home</div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
