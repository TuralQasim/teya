import React, { useState, useEffect } from "react";

type AnimatedTextProps = {
  text: string;
};
const AnimatedText: React.FC<AnimatedTextProps> = ({ text }) => {
  const [content, setContent] = useState(text);

  useEffect(() => {
    const interval = setInterval(() => {
      setContent((prevContent) => prevContent + " " + content);
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, [content]);

  return (
    <div className="animated-text-container">
      <h2 className="animated-title">{content}</h2>
    </div>
  );
};

export default AnimatedText;
