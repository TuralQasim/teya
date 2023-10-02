import { useEffect, useRef } from "react";
import video from "../video/video.mp4";

function VideoPlayer() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.volume = 0;
      videoRef.current.addEventListener("ended", () => {
        videoRef.current!.currentTime = 0;
        videoRef.current!.play().catch((error) => {
          console.error("Воспроизведение видео не удалось:", error);
        });
      });

      videoRef.current.play().catch((error) => {
        console.error("Воспроизведение видео не удалось:", error);
      });
    }
  }, []);

  return (
    <video ref={videoRef} autoPlay>
      <source src={video} type="video/mp4" />
    </video>
  );
}

export default VideoPlayer;
