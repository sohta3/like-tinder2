import React from "react";
import { Deck } from "./components/Deck";
import { Reset } from "styled-reset";

export const App: React.FC = () => {
  return (
    <div>
      <Reset />
      <Deck />
    </div>
  );
};

export default App;
