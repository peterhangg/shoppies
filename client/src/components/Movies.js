import React from "react";
import PropTypes from "prop-types";
import { connect, useDispatch } from "react-redux";
import { addNomination } from "../actions/nominationActions";
import {
  MovieContainer,
  MovieGrid,
  MovieStyles,
  Button,
  CategoryWrapper,
} from "../styles/index";
import Loader from "./Loader";
import Error from "./Error";
import PosterPlaceholder from "../asset/movie-placeholder.jpeg";
const Movies = ({ data, loading, error, nominations, search }) => {
  const dispatch = useDispatch();

  return (
    <MovieContainer>
      <CategoryWrapper>
        <h2>MOVIES</h2>
        {search && (
          <h3>
            RESULTS FOR: "<span>{search}</span>"
          </h3>
        )}
      </CategoryWrapper>
      {error && <Error />}
      {loading && <Loader />}
      {data && data.movies.length > 0 && (
        <MovieGrid>
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
              >
                Nominate
              </Button>
            </MovieStyles>
          ))}
        </MovieGrid>
      )}
    </MovieContainer>
  );
};

const mapStateToProps = (state) => ({
  data: state.getMoviesReducer.movieState.data,
  loading: state.getMoviesReducer.movieState.loading,
  error: state.getMoviesReducer.movieState.error,
  nominations: state.nominationsReducer,
  search: state.getSearchReducer,
});

Movies.propTypes = {
  data: PropTypes.object,
  loading: PropTypes.bool,
  nominations: PropTypes.array,
  search: PropTypes.string,
};

export default connect(mapStateToProps)(Movies);
