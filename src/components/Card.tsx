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
        position: absolute;
        background-color: #fff;
        /* width: 100%; */
        border-radius: 8px;
        box-shadow: 0 10px 25px 0 rgb(0 0 0 / 10%);
      `}
    >
      <div
        css={`
          /* width: 100%; */
        `}
      >
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
