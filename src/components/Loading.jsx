import styled, { keyframes } from 'styled-components';

// Keyframes for left-to-right animation


// Keyframes for right-to-left animation


// Keyframes for bubble scale animation
const grow = keyframes`
  0%, 40%, 100% {
    transform: scale(0.5);
  }
  20% {
    transform: scale(1);
  }
`;

// Keyframes for the TutorCamp text animation
const textAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Styled components
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  /* background-color: rgba(0, 0, 0, 0.9); */
`;

const BubbleText = styled.div`
  display: flex;
  font-size: 2.5rem;
  color: #fff;
  animation: ${textAnimation} 1.5s ease-in-out;
`;

const Bubble = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #fff;
  color: #000;
  margin: 0 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
  box-shadow: 0 0 50px #fff; /* Default box shadow, adjust as needed */
`;

const ColoredBubble = styled(Bubble)`
  animation: ${grow} 2s ease-in-out infinite;

  &:nth-child(1) {
    animation-delay: -1.4s;
    background: #ffff00;
    box-shadow: 0 0 50px #ffff00;
  }

  &:nth-child(2) {
    animation-delay: -1.2s;
    background: #76ff03;
    box-shadow: 0 0 50px #76ff03;
  }

  &:nth-child(3) {
    animation-delay: -1s;
    background: #f06292;
    box-shadow: 0 0 50px #f06292;
  }

  &:nth-child(4) {
    animation-delay: -0.8s;
    background: #4fc3f7;
    box-shadow: 0 0 50px #4fc3f7;
  }

  &:nth-child(5) {
    animation-delay: -0.6s;
    background: #ba68c8;
    box-shadow: 0 0 50px #ba68c8;
  }

  &:nth-child(6) {
    animation-delay: -0.4s;

    background: #f57c00;
    box-shadow: 0 0 50px #f57c00;
  }

  &:nth-child(7) {
    animation-delay: -0.2s;

    background: #673ab7;
    box-shadow: 0 0 50px #673ab7;
  }
`;

// React component
const TutorCampText = () => {
  return (
    <Container className='bg-slate-950 '>
      <BubbleText>
        <ColoredBubble>T</ColoredBubble>
        <ColoredBubble>u</ColoredBubble>
        <ColoredBubble>t</ColoredBubble>
        <ColoredBubble>o</ColoredBubble>
        <ColoredBubble>r</ColoredBubble>
        <ColoredBubble>C</ColoredBubble>
        <ColoredBubble>a</ColoredBubble>
        <ColoredBubble>m</ColoredBubble>
        <ColoredBubble>p</ColoredBubble>
      </BubbleText>
    </Container>
  );
};

export default TutorCampText;
