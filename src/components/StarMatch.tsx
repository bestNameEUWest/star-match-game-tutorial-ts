import { useState } from "react";
import { Game } from "./Game";

export const StarMatch = (props: any) => {
  const [gameId, setGameId] = useState(1);
  return <Game key={gameId} startNewGame={() => setGameId(gameId + 1)} />;
};
