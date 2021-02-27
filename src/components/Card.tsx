import React from "react";
import { keyframes } from "styled-components/macro";

const like = keyframes`
  from {
    transform: rotate(0deg);
    opacity: 1;
  }
  to {
    transform: translate(400px) rotate(50deg);
    opacity: 0;
  }
`;

const skip = keyframes`
  from {
    transform: rotate(0deg);
    opacity: 1;
  }
  to {
    transform: translate(-400px) rotate(-50deg);
    opacity: 0;
  }
`;

type CardProp = {
  name: string;
  pic: string;
  age: number;
  isLiked: boolean;
  isSkipped: boolean;
};

export const Card: React.FC<CardProp> = ({
  name,
  pic,
  age,
  isLiked,
  isSkipped,
}) => {
  return (
    <div
      css={`
        position: absolute;
        background-color: #fff;
        border-radius: 8px;
        box-shadow: 0 10px 25px 0 rgb(0 0 0 / 10%);
        animation: ${isLiked ? like : isSkipped ? skip : null} 1s ease-in-out;
      `}
    >
      <div>
        <img
          src={pic}
          alt=""
          css={`
            width: 100%;
            height: 60vh;
            object-fit: cover;
            border-top-right-radius: 8px;
            border-top-left-radius: 8px;
          `}
        ></img>
        <span
          css={`
            padding: 12px;
            font-size: 2rem;
            display: inline-block;
          `}
        >
          {name}
        </span>
        <span>{age}</span>
      </div>
    </div>
  );
};
