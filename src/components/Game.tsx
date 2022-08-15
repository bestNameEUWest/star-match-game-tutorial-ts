import { useGameState } from "../hooks/UseGameState";
import { PlayAgain } from "../PlayAgain";
import { PlayNumber } from "./PlayNumber";
import { Stars } from "./Stars";
import { utils } from "./Utils";

type GameProps = {
  startNewGame: () => void;
};

export const Game: Function = (props: GameProps) => {
  const { stars, availableNums, candidateNums, secondsLeft, setGameState } =
    useGameState();

  const canditadesAreWrong = utils.sum(candidateNums) > stars;
  const gameStatus =
    availableNums.length === 0 ? "won" : secondsLeft === 0 ? "lost" : "active";

  const numberStatus = (number: number) => {
    if (!availableNums.includes(number)) {
      return "used";
    }
    if (candidateNums.includes(number)) {
      return canditadesAreWrong ? "wrong" : "candidate";
    }

    return "available";
  };

  const onNumberClick = (number: number, status: string) => {
    if (gameStatus !== "active" || status === "used") {
      return;
    }

    const newCandidateNums =
      status === "available"
        ? candidateNums.concat(number)
        : candidateNums.filter((n) => n !== number);

    setGameState(newCandidateNums);
  };

  return (
    <div className="game">
      <div className="help">
        Pick 1 or more numbers that sum to the number of stars
      </div>
      <div className="body">
        <div className="left">
          {gameStatus !== "active" ? (
            <PlayAgain onClick={props.startNewGame} gameStatus={gameStatus} />
          ) : (
            <Stars count={stars} />
          )}
        </div>
        <div className="right">
          {utils.range(1, 9).map((number) => (
            <PlayNumber
              key={"numberButton_" + number}
              number={number}
              status={numberStatus(number)}
              onClick={onNumberClick}
            />
          ))}
        </div>
      </div>
      <div className="timer">Time Remaining: {secondsLeft}</div>
    </div>
  );
};
