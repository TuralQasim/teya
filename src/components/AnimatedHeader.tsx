import React from "react";
import { useInView } from "react-intersection-observer";

interface Props {
  title: string;
  forStyle?: string;
  content?: string;
}

const AnimatedHeader: React.FC<Props> = ({ title, forStyle, content }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <h2
      ref={ref}
      className={`${forStyle} animated-header ${inView ? "fadeInUp" : ""}`}
    >
      {content && <span>{content}</span>}
      {title}
    </h2>
  );
};

export default AnimatedHeader;
