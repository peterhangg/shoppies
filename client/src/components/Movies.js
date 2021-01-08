import React from "react";
import { connect } from "react-redux";

const Movies = ({ movieState }) => {
  console.log(movieState);
  return (
    <>
      {movieState && movieState.loading && <p>Loading...</p>}
      {movieState && movieState.error && <p>Oops there was an error. Please search for another movie</p>}
      {movieState && movieState.data && movieState.data.movies.length > 0 && (
        <ul>
          {movieState.data.movies.map((movie) => (
            <li key={movie.id}>
              <p>{movie.title}</p>
              <p>{movie.year}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  movieState: state.getMoviesReducer.movieState,
});

export default connect(mapStateToProps)(Movies);
