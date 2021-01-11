import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import { addNomination } from "../actions/nominationActions";
import { MovieGrid, MovieStyles } from "../styles/index";
import PosterPlaceholder from "../asset/movie-placeholder.jpeg";
const Movies = ({ data, loading, error, nominations, search }) => {
  const dispatch = useDispatch();

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Oops there was an error. Please search for another movie</p>}
      <h1>MOVIES</h1>
      {search && <h3>RESULTS FOR: {search}</h3>}
      {data && data.movies.length > 0 && (
        <MovieGrid overflow={"scroll"}>
          {data.movies.map((movie) => (
            <MovieStyles key={movie.id}>
              <a
                href={`https://www.imdb.com/title/${movie.id}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={movie.poster !== "N/A" ? movie.poster : PosterPlaceholder} alt={movie.name} />
              </a>
              <p>
                {movie.title} ({movie.year})
              </p>
              <button
                type="button"
                disabled={
                  nominations.includes(movie) || nominations.length === 5
                }
                onClick={() => dispatch(addNomination(movie))}
              >
                Nominate
              </button>
            </MovieStyles>
          ))}
        </MovieGrid>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  data: state.getMoviesReducer.movieState.data,
  loading: state.getMoviesReducer.movieState.loading,
  error: state.getMoviesReducer.movieState.error,
  nominations: state.nominationsReducer,
  search: state.getSearchReducer,
});

Movies.prototype = {
  data: PropTypes.object,
  loading: PropTypes.bool,
  nominations: PropTypes.array,
  search: PropTypes.string,
};

export default connect(mapStateToProps)(Movies);
