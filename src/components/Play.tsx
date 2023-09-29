import React from "react";
import play from "../icons/play.svg";

const Play: React.FC = () => {
  return (
    <div className="play">
      <button className="play_btn">
        <img src={play} alt="" />
      </button>
    </div>
  );
};

export default Play;
