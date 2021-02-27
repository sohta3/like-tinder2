import React from "react";
import styled from "styled-components/macro";

const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  padding: 0;
  appearance: none;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.04), 0 12px 20px 0 rgba(0, 0, 0, 0.12);
`;

type ContrllerProps = {
  handleSkip: (action: string) => void;
  handleLike: (action: string) => void;
};

export const Controller: React.FC<ContrllerProps> = ({
  handleLike,
  handleSkip,
}) => {
  return (
    <div
      css={`
        display: flex;
        justify-content: center;
      `}
    >
      <Button onClick={() => handleSkip("skip")}>
        <svg viewBox="0 0 24 24" style={{ width: "40px", height: "40px" }}>
          <path
            fill="#cbced0"
            d="M10,9V5L3,12L10,19V14.9C15,14.9 18.5,16.5 21,20C20,15 17,10 10,9Z"
          />
        </svg>
      </Button>
      <Button
        onClick={() => handleLike("like")}
        css={`
          margin-left: 1rem;
        `}
      >
        <svg style={{ width: "28px", height: "28px" }} viewBox="0 0 24 24">
          <path
            fill="#f67272"
            d="M23,10C23,8.89 22.1,8 21,8H14.68L15.64,3.43C15.66,3.33 15.67,3.22 15.67,3.11C15.67,2.7 15.5,2.32 15.23,2.05L14.17,1L7.59,7.58C7.22,7.95 7,8.45 7,9V19A2,2 0 0,0 9,21H18C18.83,21 19.54,20.5 19.84,19.78L22.86,12.73C22.95,12.5 23,12.26 23,12V10M1,21H5V9H1V21Z"
          />
        </svg>
      </Button>
    </div>
  );
};
