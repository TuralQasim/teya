import React from "react";
import play from "../icons/play.svg";

type PlayProps = {
  name: string;
};

const Play: React.FC<PlayProps> = ({ name }) => {
  return (
    <div className={name}>
      <button className="play_btn">
        <img loading="lazy" src={play} alt="" />
      </button>
    </div>
  );
};

export default Play;
