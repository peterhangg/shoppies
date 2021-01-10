import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteNomination } from "../actions/nominationActions";

const Nominations = ({ nominations }) => {
  const dispatch = useDispatch();

  return (
    <>
      {nominations && nominations.length > 0 && (
        <div>
          <h1>NOMINATIONS</h1>
          <ul>
            {nominations.map((nomination) => (
              <li key={nomination.id}>
                <p>{nomination.title}</p>
                <p>{nomination.year}</p>
                <button
                  onClick={() => dispatch(deleteNomination(nomination.id))}
                >
                  X
                </button>
              </li>
            ))}
          </ul>
          {nominations.length === 5 && <p>Your nomination list is ready!</p>}
        </div>
      )}
    </>
  );
};

Nominations.propTypes = {
  nominations: PropTypes.array,
};

const mapStateToProps = (state) => ({
  nominations: state.nominationsReducer,
});

export default connect(mapStateToProps)(Nominations);
