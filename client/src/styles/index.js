import styled, { keyframes } from "styled-components";

export const FadeIn = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1
  }
`;

export const HomePageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  height: 100vh;
  overflow: hidden;
  position: relative;
  animation: 2s ${FadeIn} ease-in;
  background-color: ${({ theme }) => theme.backgroundColor};

  svg {
    display: inline-block;
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 10;
  }

  @media (min-width: 1024px) {
    height: 100vh;
  }
`;

export const PageHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 45%;
  max-width: 1000px;
  padding: 10px;

  h1 {
    color: ${({ theme }) => theme.primaryColor};
    font-size: clamp(1.5rem, 3vw, 4rem);
  }

  @media (max-width: 768px) {
    width: 80%;
    padding: 4px;
  }
`;

export const IconWrapper = styled.div`
  height: 11vh;
  width: 11vw;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const MainWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 20px;
  margin: 1rem 0;
  width: 75%;
  max-width: 1300px;
  height: 75%;
  background-color: ${({ theme }) => theme.backgroundColor};
  box-shadow: ${({ theme }) => theme.primaryColor} 2px 2px 5px 0px,
    rgba(255, 255, 255, 0.8) -2px -2px 5px 0px;
  border-radius: 10px;
  padding: 2rem;
  z-index: 100;

  @media (max-width: 700px) {
    width: 95%;
  }
`;

export const MovieContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px;
  height: 100%;
`;

export const CategoryWrapper = styled.div`
  text-align: center;
  padding-bottom: 5px;

  h2 {
    font-size: clamp(1rem, 2vw, 1.75rem);
    color: ${({ theme }) => theme.primaryColor};
    margin-bottom: ${(props) => (props.nominations ? "32px" : "10px")};
  }

  span {
    color: ${({ theme }) => theme.primaryColorSpan};
  }

  h3 {
    font-size: clamp(0.75rem, 2vw, 1.25rem);
  }
`;

export const MovieGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, minmax(auto, 1fr));
  grid-template-rows: auto 1fr;
  grid-gap: 20px;
  overflow: auto;
  height: 85%;
  max-height: 800px;
  padding: 10px;

  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-height: 600px) {
    max-height: 300px;
  }

  @media (min-height: 601px) and (max-height: 735px) {
    max-height: 325px;
  }

  @media (min-height: 736px) and (max-height: 800px) {
    max-height: 375px;
  }

  @media (min-height: 801px) and (max-height: 950px) {
    max-height: 425px;
  }

  @media (min-height: 951px) and (max-height: 1100px) {
    max-height: 600px;
  }
`;

export const MovieStyles = styled.div`
  magin: 0 10px;
  display: flex;
  text-align: center;
  box-shadow: ${({ theme }) => theme.primaryColor} 0px 1px 1px,
    ${({ theme }) => theme.primaryColor} 0px 1px 1px;
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

  p {
    font-size: clamp(0.75rem, 1vw, 1rem);
  }

  button {
    margin-top: auto;
  }

  p {
    padding: 10px;
  }
`;

export const Button = styled.button`
  color: ${({ theme }) => theme.primaryColor};
  background-color: ${({ theme }) => theme.backgroundColor};
  padding: ${(props) => (props.submit ? "10px" : "10px 5px")};
  border-radius: 5px;
  cursor: pointer;
  outline: none;
  transition: background-color 0.3s linear, color 0.3s linear;
  border: ${({ theme }) => theme.primaryColor} 1px solid;
  box-sizing: border-box;

  &:hover {
    background-color: ${({ theme }) => theme.primaryColor};
    color: ${({ theme }) => theme.primaryColorTextHover};
    border: ${({ theme }) => theme.primaryColor} 1px solid;
  }

  &:disabled {
    opacity: 0.5;
    background-color: ${({ theme }) => theme.disabledColor};
    color: ${({ theme }) => theme.disabledTextColor};
    border: ${({ theme }) => theme.disabledColor} 1px solid;
    pointer-events: none;
  }
`;

export const FormWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 50;

  h3 {
    font-size: clamp(0.8rem, 1.25vw, 1rem);
  }
`;
export const Form = styled.form`
  display: flex;
  justify-content: center;
  padding: 10px;
  width: 65%;

  input {
    width: 100%;
    max-width: 1000px;
    z-index: 100;
    border: 2px solid ${({ theme }) => theme.primaryColor};
    padding: 5px;
    border-right: none;
    height: 50px;
    outline: none;
    border-radius: 5px 0 0 5px;
    background-color: ${({ theme }) => theme.backgroundColor};
    color: ${({ theme }) => theme.primaryTextColor};
  }

  button {
    color: ${({ theme }) => theme.primaryColor};
    background-color: ${({ theme }) => theme.backgroundColor};
    border-radius: 0 5px 5px 0;
    cursor: pointer;
    border: 2px solid ${({ theme }) => theme.primaryColor};
    padding: 0 10px;
    transition: background-color 0.3s linear, color 0.3s linear;
    &:hover {
      color: ${({ theme }) => theme.primaryColorTextHover};
      background-color: ${({ theme }) => theme.primaryHoverColor};
    }
  }

  @media (max-width: 768px) {
    width: 80%;
  }
`;

export const RequestContainer = styled.div`
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  animation: 1s ${FadeIn} ease-in;

  img {
    margin-bottom: 15px;
  }
`;

export const ModalImageWrapper = styled.div`
  width: 60%;
  height: 60%;
  padding: 10px;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const ModalTextWrapper = styled.div`
  text-align: center;
`;

export const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 50%;
  max-width: 550px;
  max-height: 370px;
  position: absolute;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  background-color: ${({ theme }) => theme.backgroundColor};
  color: ${({ theme }) => theme.primaryTextColor};
  border-radius: 3px;
  animation: 1s ${FadeIn} ease-in;
  z-index: 1000;

  h3 {
    font-size: clamp(0.9rem, 1.25vw, 1rem);
  }

  p {
    font-size: clamp(0.75rem, 1vw, 1rem);
  }

  @media (max-width: 768px) {
    width: 60%;
    height: 40%;
  }
`;

export const ClosedModalButton = styled.button`
  color: ${({ theme }) => theme.primaryTextColor};
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
    color: ${({ theme }) => theme.primaryHoverColor};
  }
`;

export const ToastContainer = styled.div`
  position: absolute;
  box-sizing: border-box;
  top: 12px;
  right: 0px;
  transition: transform 0.5s ease;
  background-color: #b69859;
  color: white;
  display: flex;
  padding: 10px;
  border-radius: 5px;
  align-items: center;
  transform: ${(props) => props.nominations};
  -webkit-transform: ${(props) => props.nominations};

  h3 {
    font-size: clamp(0.75rem, 2vw, 1.25rem);
  }

  p {
    font-size: clamp(0.75rem, 1vw, 1rem);
  }
`;

export const CloseToastButton = styled.button`
  color: #eeeeee;
  background: none;
  border: none;
  outline: none;
  position: absolute;
  top: 5px;
  right: 5px;
  height: 15px;
  width: 15px;
  padding: 0;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.disabledColor};
  }
`;

export const CheckIconWrapper = styled.div`
  padding-right: 10px;
`;

export const ToggleWrapper = styled.div`
  position: relative;
`;

export const ToggleButtonIcon = styled.label`
  position: absolute;
  width: 55px;
  height: 28px;
  top: 0;
  left: 0;
  border-radius: 14px;
  border: 1px solid ${({ theme }) => theme.primaryColor};
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    background: url("sun.svg") no-repeat center;
    width: 20px;
    height: 20px;
    margin: 3px;
    transition: 0.2s;
  }
`;
export const ToggleButton = styled.input`
  border-radius: 15px;
  width: 55px;
  height: 28px;
  z-index: 10;
  opacity: 0;
  &:checked + ${ToggleButtonIcon} {
    background: ${({ theme }) => theme.backgroundColor};
    &::after {
      content: "";
      border: 1px soilid ${({ theme }) => theme.primaryColor};
      background: url("moon.svg") no-repeat center;
      display: block;
      border-radius: 50%;
      width: 20px;
      height: 20px;
      margin-left: 30px;
      transition: 0.2s;
    }
  }
`;

export const SubmitButtonWrapper = styled.div`
  padding: 10px;
`;
