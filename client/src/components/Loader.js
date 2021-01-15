import React from 'react';
import ClipLoader from "react-spinners/ClipLoader";
import { RequestContainer } from "../styles";

const Loader = () => {
  return (
    <RequestContainer>
      <ClipLoader color="#b69859" size={150} />
    </RequestContainer>
  )
}

export default Loader;
