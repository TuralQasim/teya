import React from "react";

type ScrollTextProps = {
  text: string;
  position: string;
};
const ScrollText: React.FC<ScrollTextProps> = ({ text, position }) => {
  return (
    <div className="scroll_container">
      <div className="scroll">
        <div
          className={position == "toRight" ? "right_to_right" : "right_to_left"}
        >
          <p>{text}</p>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default ScrollText;
