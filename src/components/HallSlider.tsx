import React, { useState } from "react";


type HallSliderType = {
  arr: string[];
};
const HallSlider: React.FC<HallSliderType> = ({ arr }) => {
  const [currentImg, setCurrentImg] = useState<string>(arr[0]);
  const changeImg = (e: any) => {
    const target = e.target;
    const src = target.getAttribute("src");
    setCurrentImg(src);
  };
  return (
    <>
      <div className="hall_slider">
        <div className="main_img">
          <img loading="lazy" src={currentImg} alt="" />
        </div>
        <div className="other_images">
          {arr.map((a, b) => {
            return (
              <img loading="lazy" src={a} key={b} onClick={changeImg} alt="" />
            );
          })}
        </div>
      </div>

    </>
  );
};

export default HallSlider;
