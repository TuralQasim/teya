import React from "react";

type SlideProps = {
  src1: string;
  src2: string;
  src3: string;
};
const Slide: React.FC<SlideProps> = ({ src1, src2, src3 }) => {
  return (
    <div className="slide">
      <img src={src1} alt="" />
      <img src={src2} alt="" />
      <img src={src3} alt="" />
    </div>
  );
};

export default Slide;
