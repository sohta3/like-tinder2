import React, { useState } from "react";
import "styled-components/macro";
import { Card } from "./Card";
import { Controller } from "./Controller";

type Partner = {
  id: number;
  pics: string[];
  name: string;
  age: number;
  distance: string;
  bio: string;
};

const data = [
  {
    id: 1,
    pics: [
      "https://cdn.vox-cdn.com/thumbor/RX04uAR-GhRdN9-en6PmkSj69iU=/0x0:6080x2546/1200x800/filters:focal(2406x699:3378x1671)/cdn.vox-cdn.com/uploads/chorus_image/image/65753797/elsainfall.0.jpg",
      "https://vignette.wikia.nocookie.net/disney/images/9/95/Profile_-_Elsa.jpeg/revision/latest?cb=20200319054311",
    ],
    name: "Elsa",
    age: 26,
    distance: "1 mile away",
    bio:
      "Ice Queen, literally. Ghost me and I'll find you & freeze you. Just ask my sister.",
  },
  {
    id: 2,
    pics: [
      "https://media1.popsugar-assets.com/files/thumbor/8AH2numkygyXyu3DWTlrb_EwSuo/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2020/02/19/863/n/3019466/48974ba25e4d8fe6328504.89366186_MCDPRIN_EC07/i/Gemini-May-21-June-20-Tiana.jpg",
      "https://i.pinimg.com/originals/16/5e/e3/165ee335555aaa283db4598f3228762d.gif",
    ],
    name: "Tiana",
    age: 28,
    distance: "15 miles away",
    bio:
      "Entrepreneur. NOLA girl. Firm believer in 'You have to kiss a few frogs to find your Prince Charming'.",
  },
  {
    id: 3,
    pics: [
      "https://ohmy.disney.com/wp-content/uploads/2013/08/beauty-and-the-beast-gaston-flexing.jpg",
      "https://vignette.wikia.nocookie.net/my-disney-villains/images/1/1e/F3861726-6329-43C5-95B0-FEF74E83C7D7-244-000000193E858348.JPEG/revision/latest?cb=20170827054129",
    ],
    name: "Gaston",
    age: 32,
    distance: "9 miles away",
    bio:
      "Here for a good time, not a long time. Eats 5 dozen eggs so I'm roughly the size of a barge.",
  },
  {
    id: 4,
    pics: [
      "https://i.pinimg.com/originals/9b/1f/7f/9b1f7fb26329f0fb1bf6cd9a65063f4f.jpg",
      "https://i.pinimg.com/originals/04/f9/35/04f93570abf5044ff3804782a9e2119d.jpg",
    ],
    name: "Flynn",
    age: 25,
    distance: "3 miles away",
    bio: "YOLO Enthusiast. Former thief, so I'll steal your heart 😉",
  },
  {
    id: 5,
    pics: [
      "https://pbs.twimg.com/media/C8HShn0VwAArWJz.jpg",
      "https://i.pinimg.com/736x/95/ee/91/95ee91b6d78ef79a317ab9482e135458.jpg",
    ],
    name: "Shang",
    age: 27,
    distance: "2 miles away",
    bio:
      "Let's get down to business: Ex-military, defeated the Huns, mysterious as the dark side of the moon.",
  },
  {
    id: 6,
    pics: [
      "https://data.whicdn.com/images/120634023/original.jpg",
      "https://medias.spotern.com/spots/w640/255/255774-1574993055.jpg",
    ],
    name: "Jasmine",
    age: 22,
    distance: "4 miles away",
    bio:
      "Cat Mom. If you have anything about Tiger King in your bio, swiping left. Not a prize to be won.",
  },
];

export const Deck: React.FC = () => {
  const [partners, setPartners] = useState<Partner[]>(data);
  const [isLiked, setIsLiked] = React.useState(false);
  const [isSkipped, setIsSkipped] = React.useState(false);

  const handleClickButton = (action: string) => {
    action === "like" ? setIsLiked(true) : setIsSkipped(true);
    setTimeout(() => {
      setIsLiked(false);
      setIsSkipped(false);
      setPartners(partners.slice(1));
    }, 1000);
  };

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
