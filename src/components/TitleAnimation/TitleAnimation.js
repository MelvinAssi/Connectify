import React, { useState, useEffect } from "react";
import styled from "styled-components";

// Définir les composants stylisés
const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  font-size: 20vw;
`;

const Letter = styled.span`
  display: inline-block;
  color: transparent;
  -webkit-text-stroke: 2px rgba(218, 202, 59, 1);
  animation: fillText 7.5s infinite;

  @keyframes fillText {
    0% {
      color: rgba(218, 202, 59, 1);
      -webkit-text-stroke: 2px rgba(218, 202, 59, 1);
    }
    100% {
      color: transparent;
      -webkit-text-stroke: 2px rgba(218, 202, 59, 1);
    }
  }
`;

const TitleAnimation = ({ text }) => {
  const [letters, setLetters] = useState([]);

  useEffect(() => {
    const textArray = text.split("");
    setLetters(textArray);
  }, [text]);

  const getAnimationDelay = (index) => {
    const n = letters.length;
    if (index < n / 2) {
      return `${index * 0.5}s`;
    } else {
      return `${(n - index - 1) * 0.5}s`;
    }
  };

  return (
    <TextContainer>
      {letters.map((letter, index) => (
        <Letter
          key={index}
          style={{
            animationDelay: getAnimationDelay(index),
          }}
        >
          {letter}
        </Letter>
      ))}
    </TextContainer>
  );
};

export default TitleAnimation;