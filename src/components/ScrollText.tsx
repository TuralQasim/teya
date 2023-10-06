type ScrollTextProps = {
  text: string;
  position?: string;
  speed?: number;
};

const ScrollText: React.FC<ScrollTextProps> = ({
  text,
  position,
  speed = 25000,
}) => {
  const style = {
    "--speed": `${speed}ms`,
  } as React.CSSProperties; // Указываем тип React.CSSProperties

  return (
    <div className="inner">
      <div className={`wrapper ${position}`}>
        <section style={style}>
          <p>{text}</p>
          <span></span>
          <p>{text}</p>
          <span></span>
          <p>{text}</p>
          <span></span>
        </section>
        <section style={style}>
          <p>{text}</p>
          <span></span>
          <p>{text}</p>
          <span></span>
          <p>{text}</p>
          <span></span>
        </section>
        <section style={style}>
          <p>{text}</p>
          <span></span>
          <p>{text}</p>
          <span></span>
          <p>{text}</p>
          <span></span>
        </section>
      </div>
    </div>
  );
};

export default ScrollText;
