import React from "react";
import PropTypes from "prop-types";
import { connect, useDispatch } from "react-redux";
import { deleteNomination } from "../actions/nominationActions";
import {
  MovieContainer,
  MovieGrid,
  MovieStyles,
  Button,
} from "../styles/index";
import PosterPlaceholder from "../asset/movie-placeholder.jpeg";

const Nominations = ({ nominations }) => {
  const dispatch = useDispatch();

  return (
    <MovieContainer nominations>
      <h2>NOMINATIONS</h2>
      {nominations && nominations.length > 0 && (
        <MovieGrid overflow={"hidden"}>
          {nominations.map((nomination) => (
            <MovieStyles key={nomination.id}>
              <a
                href={`https://www.imdb.com/title/${nomination.id}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={
                    nomination.poster !== "N/A"
                      ? nomination.poster
                      : PosterPlaceholder
                  }
                  alt={nomination.name}
                />
              </a>
              <p>
                {nomination.title} ({nomination.year})
              </p>
              <Button onClick={() => dispatch(deleteNomination(nomination.id))}>
                <i className="fas fa-trash fa-lg"/> 
              </Button>
            </MovieStyles>
          ))}
        </MovieGrid>
      )}
      {nominations.length === 5 && <p>Your nomination list is ready!</p>}
    </MovieContainer>
  );
};

Nominations.propTypes = {
  nominations: PropTypes.array,
};

const mapStateToProps = (state) => ({
  nominations: state.nominationsReducer,
});

export default connect(mapStateToProps)(Nominations);
