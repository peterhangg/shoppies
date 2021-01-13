import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import MailSVG from "../asset/mail.svg";
import { resetMovie } from "../actions/movieActions";
import { resetNominations } from "../actions/nominationActions";
import { resetSearch } from "../actions/searchActions";

import { ModalWrapper, ClosedModalButton } from "../styles/index";

const Modal = ({ showModal, setShowModal }) => {
  const dispatch = useDispatch();

  const closeModalHandler = () => {
    setShowModal(false);
    dispatch(resetMovie());
    dispatch(resetNominations());
    dispatch(resetSearch());
  };

  return (
    <>
      {showModal && (
        <ModalWrapper>
          <img src={MailSVG} alt="Mail Img" />
          <h2>Thank you</h2>
          <p>Your nominations has been submitted!</p>

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
};

export default Modal;
