import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Movies from "./Movies";
import Nominations from "./Nominations";
import { MainWrapper } from "../styles";
const MovieContainer = ({ setShowModal, showMovieContainer, nominations }) => {
  return (
    <>
    {(showMovieContainer || nominations.length > 0) && (
      <MainWrapper>
        <Movies />
        <Nominations setShowModal={setShowModal} />
      </MainWrapper>
    )}
    </>
  );
};

MovieContainer.propTypes = {
  setShowModal: PropTypes.func,
  showMovieContainer: PropTypes.bool,
  nominations: PropTypes.array,
};

const mapStateToProps = (state) => ({
  nominations: state.nominationsReducer,
});

export default connect(mapStateToProps)(MovieContainer);
