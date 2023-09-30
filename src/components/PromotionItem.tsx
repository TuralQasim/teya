import React from "react";
import star from "../icons/star.svg";
type Item = {
  h2?: string;
  h3: string;
  p: string;
  content: any;
};
type PromotionItemProps = {
  index: number;
  item: Item;
  activeItem: number | null;
  setActiveItem: any;
};
const PromotionItem: React.FC<PromotionItemProps> = ({
  index,
  item,
  activeItem,
  setActiveItem,
}) => {
  const changeIndex = () => {
    if (index == activeItem) {
      setActiveItem(null);
      return;
    }
    setActiveItem(index);
  };
  return (
    <div className="promotion_item">
      <div onClick={changeIndex} className="promotion_item_title">
        <div className="promotion_item_title_left">
          {item.h2 ? (
            <h2>{item.h2}</h2>
          ) : (
            <img loading="lazy" className="pro,otion_star" src={star} alt="" />
          )}
        </div>
        <div className="promotion_item_title_text">
          <h3>{item.h3}</h3>
          <p>{item.p}</p>
        </div>
        <div className="promotion_item_title_plus">
          {index == activeItem ? "-" : "+"}
        </div>
      </div>
      {index == activeItem && item.content}
      <div className="line"></div>
    </div>
  );
};

export default PromotionItem;
