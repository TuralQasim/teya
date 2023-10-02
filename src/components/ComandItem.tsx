import React, { useState, useRef } from "react";
import playIcon from "../icons/play.svg";
import video3 from "../video/video3.mp4";
import comandImg from "../images/comand/comand1.png";
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
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <>
      {isVideo ? (
        <div className="comand_item">
          <div className="comand_item_video">
            <button
              className="play_btn"
              onClick={handlePlayClick}
              style={{ display: isPlaying ? "none" : "block" }}
            >
              <img loading="lazy" src={playIcon} alt="" />
            </button>
            <video
              ref={videoRef}
              controls
              style={{ display: isPlaying ? "block" : "none" }}
            >
              <source src={video3} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <img
              src={comandImg}
              className={
                isPlaying ? `comand_video_bg dnone` : "comand_video_bg"
              }
              alt=""
            />
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
