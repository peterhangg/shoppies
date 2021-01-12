import React from 'react';
import ErrorSVG from "../asset/404.svg";
import { RequestContainer } from "../styles/index";

const Error = () => {
  return (
    <RequestContainer>
      <img src={ErrorSVG} alt="404 Error Img"/>
      <p>Looks like there was an error.</p>
      <p>Please search for another movie!</p>
    </RequestContainer>
  )
}

export default Error;
