import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteNomination } from "../actions/nominationActions";
import { MovieGrid, MovieStyles } from "../styles/index";
import PosterPlaceholder from "../asset/movie-placeholder.jpeg";

const Nominations = ({ nominations }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <h1>NOMINATIONS</h1>
      {nominations && nominations.length > 0 && (
        <MovieGrid overflow={"hidden"}>
          {nominations.map((nomination) => (
            <MovieStyles key={nomination.id}>
              <a
                href={`https://www.imdb.com/title/${nomination.id}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={nomination.poster !== "N/A" ? nomination.poster : PosterPlaceholder} alt={nomination.name} />
              </a>
              <p>
                {nomination.title} ({nomination.year})
              </p>
              <button onClick={() => dispatch(deleteNomination(nomination.id))}>
                X
              </button>
            </MovieStyles>
          ))}
        </MovieGrid>
      )}
      {nominations.length === 5 && <p>Your nomination list is ready!</p>}
    </div>
  );
};

Nominations.propTypes = {
  nominations: PropTypes.array,
};

const mapStateToProps = (state) => ({
  nominations: state.nominationsReducer,
});

export default connect(mapStateToProps)(Nominations);
