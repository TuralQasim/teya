import React, { useState, useRef } from "react";
import play from "../icons/play.svg";

type PlayProps = {
  name: string;
  videoSrc: string; // Путь к видео файлу
};

const Play: React.FC<PlayProps> = ({ name, videoSrc }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <div className={name}>
      <button
        className="play_btn"
        onClick={handlePlayClick}
        style={{ display: isPlaying ? "none" : "block" }}
      >
        <img loading="lazy" src={play} alt="" />
      </button>
      <video
        ref={videoRef}
        controls
        style={{ display: isPlaying ? "block" : "none" }}
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Play;
