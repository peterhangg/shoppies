import React from "react";
import PropTypes from "prop-types";
import { connect, useDispatch } from "react-redux";
import { addNomination } from "../actions/nominationActions";
import {
  MovieContainer,
  MovieGrid,
  MovieStyles,
  Button,
} from "../styles/index";
import Theme from "./Theme";
import PosterPlaceholder from "../asset/movie-placeholder.jpeg";
const Movies = ({ data, loading, error, nominations, search }) => {
  const dispatch = useDispatch();

  return (
    <Theme>
      <MovieContainer>
        {loading && <p>Loading...</p>}
        <h2>MOVIES</h2>
        {search && (
          <h3>
            RESULTS FOR: "<span>{search}</span>"
          </h3>
        )}
        {error && (
          <p>Oops there was an error. Please search for another movie</p>
        )}
        {data && data.movies.length > 0 && (
          <MovieGrid overflow={data.movies.length > 6 ? "scroll" : "hidden"}>
            {data.movies.map((movie) => (
              <MovieStyles key={movie.id}>
                <a
                  href={`https://www.imdb.com/title/${movie.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={
                      movie.poster !== "N/A" ? movie.poster : PosterPlaceholder
                    }
                    alt={movie.name}
                  />
                </a>
                <p>
                  {movie.title} ({movie.year})
                </p>
                <Button
                  type="button"
                  disabled={
                    nominations.includes(movie) || nominations.length === 5
                  }
                  onClick={() => dispatch(addNomination(movie))}
                  theme
                >
                  Nominate
                </Button>
              </MovieStyles>
            ))}
          </MovieGrid>
        )}
      </MovieContainer>
    </Theme>
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
