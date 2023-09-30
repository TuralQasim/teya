import React from "react";
import playIcon from "../icons/play.svg";
type ComandItemProps = {
  isVideo: boolean;
  h5: string;
  p: string;
  src: string;
  h6?: string;
  position?: string;
};
const ComandItem: React.FC<ComandItemProps> = ({
  isVideo,
  h5,
  p,
  src,
  h6,
  position,
}) => {
  return (
    <>
      {isVideo ? (
        <div className="comand_item">
          <div className="comand_item_video">
            <img loading="lazy" src={src} alt="" />
            <button>
              <img loading="lazy" src={playIcon} alt="" />
            </button>
          </div>
          <h5>{h5}</h5>
          <p className="top_right">{p}</p>
        </div>
      ) : position ? (
        <div className="comand_item">
          <img loading="lazy" src={src} alt="" />
          <h5>{h5}</h5>
          <h6>{h6}</h6>
          <p className={position == "topRight" ? "top_right" : "bottom_left"}>
            {p}
          </p>
        </div>
      ) : (
        <div className="comand_item">
          <img loading="lazy" src={src} alt="" />
          <h5>{h5}</h5>
          <div className="comand_item_bottom">
            <h6>{h6}</h6>
            <p>{p}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default ComandItem;
