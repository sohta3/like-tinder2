import React from "react";
import "styled-components/macro";

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
        padding: 12px;
        position: relative;
      `}
    >
      <button onClick={() => handleSkip("skip")}>skip</button>
      <button onClick={() => handleLike("like")}>like</button>
    </div>
  );
};
