import React from "react";
import "styled-components/macro";
import { Card } from "./Card";
import { Controller } from "./Controller";
import { Partner } from "../App";

type DeckProps = {
  partners: Partner[];
  handleClickButton: (action: string) => void;
  handleSwipe: () => void;
  isLiked: boolean;
  isSkipped: boolean;
};

export const Deck: React.FC<DeckProps> = ({
  partners,
  handleClickButton,
  handleSwipe,
  isLiked,
  isSkipped,
}) => {
  return (
    <div
      css={`
        padding: 1rem;
        display: flex;
        justify-content: center;
        height: 84vh;
        flex-direction: column;
      `}
    >
      <div
        css={`
          height: 100%;
          position: relative;
        `}
      >
        {partners[1] !== undefined ? (
          <Card
            key={partners[1].id}
            name={partners[1].name}
            pic={partners[1].pics[0]}
            age={partners[1].age}
            isLiked={false}
            isSkipped={false}
            handleSwipe={null}
          ></Card>
        ) : null}

        {partners[0] !== undefined ? (
          <Card
            key={partners[0].id}
            name={partners[0].name}
            pic={partners[0].pics[0]}
            age={partners[0].age}
            isLiked={isLiked}
            isSkipped={isSkipped}
            handleSwipe={handleSwipe}
          ></Card>
        ) : (
          <span>empty</span>
        )}
      </div>
      {partners[0] !== undefined ? (
        <Controller
          handleSkip={handleClickButton}
          handleLike={handleClickButton}
        />
      ) : null}
    </div>
  );
};
