import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import MailSVG from "../asset/mail.svg";
import { resetMovie } from "../actions/movieActions";
import { resetNominations } from "../actions/nominationActions";
import { resetSearch } from "../actions/searchActions";

import { ModalWrapper, ClosedModalButton, ModalImageWrapper, ModalTextWrapper } from "../styles/index";

const Modal = ({ showModal, setShowModal, setShowMovieContainer }) => {
  const dispatch = useDispatch();

  const closeModalHandler = () => {
    setShowModal(false);
    dispatch(resetMovie());
    dispatch(resetNominations());
    dispatch(resetSearch());
    setShowMovieContainer(false);
  };

  return (
    <>
      {showModal && (
        <ModalWrapper>
          <ModalImageWrapper>
            <img src={MailSVG} alt="Mail Img" />
          </ModalImageWrapper>
          <ModalTextWrapper>
            <h3>Thank you</h3>
            <p>Your nominations has been submitted!</p>
          </ModalTextWrapper>
          <ClosedModalButton
            aria-label="close modal"
            onClick={closeModalHandler}
          >
            <i className="fas fa-times fa-lg" />
          </ClosedModalButton>
        </ModalWrapper>
      )}
    </>
  );
};

Modal.propTypes = {
  showModal: PropTypes.bool,
  setShowModal: PropTypes.func,
  setShowMovieContainer: PropTypes.func,
};

export default Modal;
