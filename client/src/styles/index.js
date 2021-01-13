import styled, { keyframes } from "styled-components";

export const FadeIn = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1
  }
`;

export const colors = {
  gold: "#b69859",
  darkGrey: "#3c3c3c",
  white: "#ffffff",
  black: "#000000",
};

export const HomePageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  margin: auto;
  animation: 2s ${FadeIn} ease-in;

  svg {
    display: inline-block; 
    position: absolute; 
    bottom: 0; 
    left: 0; 
    z-index: -1; 
  }
`;

export const MainWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 20px;
  margin-top: 1rem;
  width: 70%;
  height: 70%;
  background-color: ${colors.white};
  box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px,
    rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;
  border-radius: 10px;
  padding: 2rem;
`;

export const PageHeader = styled.div`
  display: flex;
  align-items: center;
  h1 {
    color: ${colors.gold};
    font-size: 4rem;
  }
`;

export const IconWrapper = styled.div`
  img {
    height: 150px;
  }
`;

export const MovieContainer = styled.div`
  text-align: center;
  h2 {
    color: ${colors.gold};
    margin-bottom: ${(props) => (props.nominations ? "32px" : "10px")};
  }

  span {
    color: ${colors.gold};
  }
`;

export const MovieGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-gap: 20px;
  overflow: ${(props) => props.overflow};
  max-height: 800px;
  overflow-x: hidden;
  padding: 10px;
`;

export const MovieStyles = styled.div`
  height: 100%;
  min-height: 376px;
  magin: 0 10px;
  display: flex;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  border-radius: 5px;
  animation: 2s ${FadeIn} ease-in;
  flex-direction: column;

  img {
    width: 100%;
    height: 225px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    transition: transform 0.3s;
    &:hover {
      transform: scale(1.03);
      transition: transform 0.3s;
    }
  }

  button {
    margin-top: auto;
  }

  p {
    padding: 10px;
  }
`;

export const Button = styled.button`
  color: ${colors.gold};
  background-color: ${colors.white};
  padding: ${(props) => props.submit ? "10px" : "10px 5px"};
  border-radius: 5px;
  cursor: pointer;
  outline: none;
  transition: background-color 0.3s linear, color 0.3s linear;
  border: ${colors.gold} 1px solid;
  box-sizing: border-box;

  &:hover {
    background-color: ${colors.gold};
    color: ${colors.white};
    border: ${colors.gold} 1px solid;
  }

  &:disabled {
    opacity: 0.5;
    background-color: ${colors.darkGrey};
    color: $${colors.white};
    border : ${colors.darkGrey} 1px solid;
    pointer-events: none;
  }
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  padding: 10px;
  width: 65%;

  input {
    width: 100%;
    border: 2px solid ${colors.gold};
    padding: 5px;
    border-right: none;
    height: 50px;
    outline: none;
    border-radius: 5px 0 0 5px;
    color: ${colors.darkGrey};
  }

  button {
    color: ${colors.gold};
    background-color: ${colors.white};
    border-radius: 0 5px 5px 0;
    cursor: pointer;
    border: 2px solid ${colors.gold};
    padding: 0 10px;
    transition: background-color 0.3s linear, color 0.3s linear;
    &:hover {
      color: ${colors.white};
      background-color: ${colors.gold};
    }
  }
`;

export const RequestContainer = styled.div`
  height: 80%;
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  animation: 1s ${FadeIn} ease-in;

  img {
    margin-bottom: 15px;
  }
`;

export const ModalWrapper = styled.div `
  width: 700px;
  height: 500px;
  position: absolute;
  box-shadow: 0 5px 10px rgba(0,0,0, 0.2);
  background-color: white;
  color: ${colors.darkGrey};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
  animation: 1s ${FadeIn} ease-in;

  img {
    margin-bottom: 1.5rem;
  }
`;

export const ClosedModalButton = styled.button`
  color: ${colors.darkGrey};
  background: none;
  border: none;
  outline: none;
  position: absolute;
  top: 20px;
  right: 20px;
  height: 24px;
  width: 24px;
  padding: 0;
  cursor: pointer;

  &:hover {
    color: ${colors.gold};
  }
`;