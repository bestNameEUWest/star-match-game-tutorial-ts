import { utils } from "./Utils";

type StarProps = {
  count: number;
};

export const Stars: Function = (props: StarProps) =>
  utils
    .range(1, props.count)
    .map((starId) => <div key={"star_" + starId} className="star"></div>);
