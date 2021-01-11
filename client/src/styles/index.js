import styled, { keyframes } from "styled-components";

export const FadeIn = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1
  }
`;

export const HomePageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  margin: auto;
  animation: 2s ${FadeIn} ease-in;
`

export const MainWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 20px;
  margin-top: 1rem;
  width: 65%;
  max-width: 1200px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 10px;
  max-height: 800px;
  padding: 2rem;
`;

export const MovieGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-gap: 15px;
  overflow: ${props => props.overflow};
  max-height: 675px;
  overflow-x: hidden;
  padding: 10px;
`;

export const MovieStyles = styled.div`
  height: auto;
  magin: 0 10px;
  display: flex;
  min-height: 310px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  animation: 2s ${FadeIn} ease-in;
  flex-direction: column;
  img {
    width: 100%;
    height: 225px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    transition: transform .3s;
    &:hover {
      transform: scale(1.05);
      transition: transform .3s;
    }
  }
  button {
    margin-top: auto;
  }
  p {
    padding-bottom: 8px;
  }
`;