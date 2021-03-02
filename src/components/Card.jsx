import React from "react";
import { keyframes } from "styled-components/macro";
import { useSpring, animated } from "react-spring";
import { useDrag } from "react-use-gesture";
import { useHistory } from "react-router-dom";

const like = () => keyframes`
  from {
    transform: rotate(0deg);
    opacity: 1;
  }
  to {
    transform: translate(400px) rotate(50deg);
    opacity: 0;
  }
`;

const skip = () => keyframes`
  from {
    transform: rotate(0deg);
    opacity: 1;
  }
  to {
    transform: translate(-400px) rotate(-50deg);
    opacity: 0;
  }
`;

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const Card = ({ name, pic, age, isLiked, isSkipped, handleSwipe }) => {
  const history = useHistory();

  const handleClick = () => {
    history.push("/profile");
  };

  const [{ x, y }, set] = useSpring(() => ({ x: 0, y: 0 }));
  // Set the drag hook and define component movement based on gesture data
  const bind = useDrag(
    ({ down, movement: [mx, my], direction: [xDir], velocity }) => {
      const trigger = velocity > 0.2; // If you flick hard enough it should trigger the card to fly out
      const isSwiped = !down && trigger;
      const dir = xDir < 0 ? -1 : 1; // Direction should either point left or right

      set({
        x: isSwiped ? (200 + window.innerWidth) * dir : down ? mx : 0,
        y: down ? my : 0,
      });
      if (isSwiped) {
        handleSwipe();
      }
    }
  );

  return (
    <animated.div
      css={`
        position: absolute;
        background-color: #fff;
        border-radius: 8px;
        box-shadow: 0 10px 25px 0 rgb(0 0 0 / 10%);
        animation: ${isLiked ? like : isSkipped ? skip : null} 1s ease-in-out;
      `}
      {...bind()}
      style={{ x, y, touchAction: "none" }}
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
        <div onClick={handleClick}>
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
    </animated.div>
  );
};
