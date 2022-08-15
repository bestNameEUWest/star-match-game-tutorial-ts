type PlayAgainProps = {
  onClick: () => void;
  gameStatus: string;
};

export const PlayAgain: Function = (props: PlayAgainProps) => (
  <div className="game-done">
    <div
      className="message"
      style={{ color: props.gameStatus === "lost" ? "red" : "green" }}
    >
      {props.gameStatus === "won" ? "You won!" : "Sorry, you lost."}
    </div>
    <button onClick={props.onClick}>Play Again</button>
  </div>
);
