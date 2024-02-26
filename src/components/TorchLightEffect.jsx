// src/TailwindComponent.js
import { styled, keyframes } from "styled-components";
import BgImageLight from "../assets/bg-light-image.svg";
import RoboticsImage from "../assets/robotics-image.svg"

const bgSpin1 = keyframes`
  0% {
    transform: scale(1.5) rotate(-20deg);
  }
  100% {
    transform: scale(1.5) rotate(0deg);
  }
`;
const bgSpin2 = keyframes`
  0% {
    transform: scale(1.5) rotate(-80deg);
    
  }
  100% {
    transform: scale(1.5) rotate(-60deg);
   
  }
`;
const OuterContainer=styled.div`
   width: 100vw;
  height: 100vh;
  position: relative;
  display: grid;
  place-content: center;
  padding: 1rem;
`;
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  display: grid;
  place-content: center;
  background-image: radial-gradient(#323260 0.5px, transparent 1px);
    background-size: 10px 10px; /* Adjust the size of the dots as needed */
 
`;

const Cont1 = styled.div`
  width: 100vw;
  height: 100vh;

  position: absolute;
  top: -0.5rem;
  left: -48%;
  z-index: 20;
  transform-origin: 50% 100%;
  transform: scale(1.5) rotate(-10deg);
  animation: ${bgSpin1} 5s linear infinite alternate;
  background: conic-gradient(
    at 50% 100%,
    rgba(255, 255, 255, 0) 0 30deg,
    rgba(13, 102, 203, 0.5) 0deg 60deg,
    rgba(255, 255, 255, 0) 0deg 30deg
  );

  isolation: auto;
  filter: blur(30px);
`;
const Cont2 = styled.div`
  width: 100vw;
  height: 100vh;

  position: absolute;
  top: 0rem;
  left: 48%;
  z-index: 20;
  transform-origin: 50% 100%;
  transform: scale(1.5) rotate(0deg);
  animation: ${bgSpin2} 5s linear infinite alternate;
  background: conic-gradient(
    at 50% 100%,
    rgba(255, 255, 255, 0) 0 30deg,
    rgba(13, 102, 203, 0.5) 0deg 60deg,
    rgba(255, 255, 255, 0) 0deg 30deg
  );

  isolation: auto;
  filter: blur(30px);
`;

// const Cont2 = styled.div`
//   width: 100vw;
//   height: 100vh;
//   position: absolute;
//   top: 0;
//   left: 0;
//   transform-origin: 50% 100%;
//   transform: scale(1.5) rotate(0);
//   animation: ${bgSpin} 5s linear infinite alternate 5s;
//   background: conic-gradient(
//   at 50% 100%,
//   rgba(75, 45, 125, 0.7) 0 20deg,
//   transparent 20deg 60deg,
//   rgba(81, 81, 143, 0.9) 60deg 90deg,
//   transparent 90deg 360deg
// );

//   mix-blend-mode: hue;
//   isolation: auto;
//   filter: blur(10px);
// `;

const Box1 = styled.div`
  width: 300px;
  height: 300px;
  position: relative;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
`;

const Box = styled.div`
  width: 100%;
  height: 100%;
  background: #060c21;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius:5px;
  background-image: url(${RoboticsImage});

/* Set the size and position of the background image */
background-size: cover; /* You can use other values like 'contain' or specific dimensions */
background-position: center center; /* You can adjust the position as needed */
  &::before {
    content: "";
    position: absolute;
    top: -2px;
    left: -2px;
    bottom: -2px;
    right: -2px;
    background-color: #151f41;
    z-index: -1;
    filter: blur(20px);
  }
  &::after {
    content: "";
    position: absolute;
    top: -2px;
    left: -2px;
    bottom: -2px;
    right: -2px;
    background-color: #fff;
    z-index: -2;
    filter: blur(40px);
  }
  &::before,
  &::after {
    background: linear-gradient(235deg, #89ff00, #060c21, #00bcd4);
  }
`;

const Text = styled.p`
  font-family: sans-serif;
  font-size: 1.5rem;
  font-weight: 900;
  color: transparent;
  text-align: center;
  /* mix-blend-mode:darken; */
  -webkit-text-stroke: 2px #f4e5e5;
`;

const TorchLightEffect = () => {
  return (
    <OuterContainer>
    <Container className="bg-slate-950 box-border overflow-hidden">
      <Box1>
        <Box>
          <Text>Learning Make You Feel Delighted</Text>
        </Box>
      </Box1>
      <Cont1 />
      <Cont2 />
    </Container>
    </OuterContainer>
  );
};

export default TorchLightEffect;
