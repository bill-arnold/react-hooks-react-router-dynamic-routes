
import React from "react";
import { useParams } from "react-router-dom";

function MovieShow({ movies }) {
  const params = useParams();
  const movieId = params.movieId;
  const movie = movies[movieId];

  if (!movie) {
    return <div>Movie not found</div>;
  }

  return (
    <div>
      <h3>{movie.title}</h3>
      <p>Genre: {movie.genre}</p>
      <p>Release Year: {movie.releaseYear}</p>
      {/* Add more details as needed */}
    </div>
  );
}

export default MovieShow;
