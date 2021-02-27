import React from "react";
import "styled-components/macro";

type CardProp = {
  name: string;
  pic: string;
  age: number;
  handleSkip: () => void;
  handleLike: () => void;
};

export const Card: React.FC<CardProp> = ({
  name,
  pic,
  age,
  handleSkip,
  handleLike,
}) => {
  return (
    <div
      css={`
        margin: 0 auto;
        padding: 16px 0;
      `}
    >
      <div
        css={`
          width: 100%;
        `}
      >
        <img
          src={pic}
          alt=""
          css={`
            width: 100%;
            height: 60vh;
            object-fit: cover;
          `}
        ></img>
        <span>{name}</span>
        <span>{age}</span>
        <div>
          <button onClick={handleSkip}>skip</button>
          <button onClick={handleLike}>like</button>
        </div>
      </div>
    </div>
  );
};
