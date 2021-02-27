import React from "react";
import "styled-components/macro";

type ContrllerProps = {
  handleSkip: () => void;
  handleLike: () => void;
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
      <button onClick={handleSkip}>skip</button>
      <button onClick={handleLike}>like</button>
    </div>
  );
};
