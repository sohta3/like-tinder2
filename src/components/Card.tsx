import React from "react";
import "styled-components/macro";

type CardProp = {
  name: string;
  pic: string;
  age: number;
};

export const Card: React.FC<CardProp> = ({ name, pic, age }) => {
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
          <button
            onClick={() => {
              console.log("skip");
            }}
          >
            skip
          </button>
          <button
            onClick={() => {
              console.log("like");
            }}
          >
            like
          </button>
        </div>
      </div>
    </div>
  );
};
