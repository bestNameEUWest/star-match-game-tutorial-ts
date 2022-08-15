import { utils } from "./Utils";

type PlayNumberProps = {
  number: number;
  status: string;
  onClick: (number: number, status: string) => void;
};

const colors: Record<string, string> = {
  available: "lightgrey",
  used: "lightgreen",
  wrong: "lightcoral",
  candidate: "lightblue",
};

export const PlayNumber: Function = (props: PlayNumberProps) => (
  <button
    className="number"
    style={{ backgroundColor: colors[props.status] }}
    onClick={() => props.onClick(props.number, props.status)}
  >
    {props.number}
  </button>
);
