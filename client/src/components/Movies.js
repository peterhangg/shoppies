import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import { addNomination } from "../actions/nominationActions";
const Movies = ({ data, loading, error, nominations, search }) => {
  const dispatch = useDispatch();

  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <p>Oops there was an error. Please search for another movie</p>}
      {data && data.movies.length > 0 && (
        <div>
          <h1>MOVIES</h1>
          {search && <h3>Results for {search}</h3>}
          <ul>
            {data.movies.map((movie) => (
              <li key={movie.id}>
                <p>{movie.title}</p>
                <p>{movie.year}</p>
                <button
                  type="button"
                  disabled={
                    nominations.includes(movie) || nominations.length === 5
                  }
                  onClick={() => dispatch(addNomination(movie))}
                >
                  Nominate
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
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
