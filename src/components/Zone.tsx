import React from "react";

type ZoneType = {
  content?: string;
  reverse?: boolean;
  image1?: string;
  image2?: string;
  image3?: string;
  image4?: string;
  image5?: string;
  image6?: string;
  p: string;
  h2: string;
};
const Zone: React.FC<ZoneType> = ({
  content,
  reverse,
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  h2,
  p,
}) => {
  return (
    <div className={reverse ? "zone zone_reverse" : "zone"}>
      <div className="zone_text">
        <h2 className={content ? "withContent" : ""}>
          <span>{content ? content : ""}</span>
          {h2}
        </h2>
        <p>{p}</p>
      </div>
      {image1 ? (
        <div className="zone_images">
          <img loading="lazy" src={image1} alt="" />
          <img loading="lazy" src={image2} alt="" />
        </div>
      ) : image3 ? (
        <div className="zone_images">
          <img loading="lazy" src={image3} alt="" />
          <img loading="lazy" src={image4} alt="" />
        </div>
      ) : (
        <div className="zone_images">
          <img loading="lazy" src={image5} alt="" />
          <img loading="lazy" src={image6} alt="" />
        </div>
      )}
    </div>
  );
};

export default Zone;
