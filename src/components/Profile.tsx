import React from "react";
import { useHistory } from "react-router-dom";
import "styled-components/macro";
import { Partner } from "../App";

type ProfileProps = {
  partner: Partner;
};
export const Profile: React.FC<ProfileProps> = ({ partner }) => {
  const history = useHistory();

  const handleClick = () => {
    history.push("/");
  };

  return (
    <div>
      <img
        src={partner.pics[0]}
        alt=""
        css={`
          width: 100%;
          height: 60vh;
          object-fit: cover;
          border-top-right-radius: 8px;
          border-top-left-radius: 8px;
        `}
      ></img>
      <div>
        <span
          css={`
            padding: 12px;
            font-size: 2rem;
            display: inline-block;
          `}
        >
          {partner.name}
        </span>
        <span>{partner.age}</span>
      </div>
      <div>
        <span
          css={`
            padding: 12px;
            font-size: 1rem;
            display: inline-block;
          `}
        >
          {partner.distance}
        </span>
      </div>
      <div>
        <span
          css={`
            padding: 12px;
            font-size: 1rem;
            display: inline-block;
          `}
        >
          {partner.bio}
        </span>
      </div>
      <div
        css={`
          margin-top: 4rem;
          display: flex;
          justify-content: center;
        `}
      >
        <button onClick={handleClick}>back</button>
      </div>
    </div>
  );
};
