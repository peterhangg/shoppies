import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { ToastContainer, CloseToastButton, CheckIconWrapper } from "../styles/index";

const Toast = ({ nominations }) => {
  const [showToast, setShowToast] = useState(false);
  const [closeToast, setCloseToast] = useState(false);

  useEffect(() => {
    if (nominations.length === 5 && !closeToast) {
      setShowToast(true);
    }
    if (nominations.length < 5) {
      setShowToast(true);
    }
  }, [nominations.length, setShowToast, closeToast]);

  const closeToastHandler = () => {
    setShowToast(false);
    setCloseToast(true);
  };

  return (
    <ToastContainer
      nominations={
        nominations.length === 5 && showToast
          ? "translateX(0)"
          : "translateX(100%)"
      }
    >
      <CheckIconWrapper>
        <i className="fas fa-check-circle fa-lg" />
      </CheckIconWrapper>
      <div>
        <h3>Success</h3>
        <p>Your nominations is ready!</p>
      </div>
      <CloseToastButton aria-label="close toast" onClick={closeToastHandler}>
        <i className="fas fa-times fa-lg" />
      </CloseToastButton>
    </ToastContainer>
  );
};

Toast.propTypes = {
  nominations: PropTypes.array,
};

const mapStateToProps = (state) => ({
  nominations: state.nominationsReducer,
});

export default connect(mapStateToProps)(Toast);
