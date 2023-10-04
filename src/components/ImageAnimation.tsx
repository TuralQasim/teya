import React, { useEffect, useRef } from "react";
import { useSpring, animated } from "react-spring";

interface ImageAnimationProps {
  imageUrl: string;
}

const ImageAnimation: React.FC<ImageAnimationProps> = ({ imageUrl }) => {
  const [isVisible, setIsVisible] = React.useState(false);
  const imageRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (imageRef.current) {
        const rect = imageRef.current.getBoundingClientRect();
        // Проверяем, видна ли картинка на экране, с учетом 20 пикселей
        setIsVisible(rect.top < window.innerHeight - 20 && rect.bottom >= 20);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Вызываем handleScroll после монтирования компонента
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const animationProps = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0)" : "translateY(100%)",
    config: { duration: 500 }, // Длительность анимации в миллисекундах
  });

  return (
    <animated.img
      src={imageUrl}
      alt="Your Image"
      style={animationProps}
      ref={imageRef}
    />
  );
};

export default ImageAnimation;
