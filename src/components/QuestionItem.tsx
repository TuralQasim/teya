import React from "react";
import { AnimatePresence, motion } from "framer-motion";

type Item = {
  h2: string;
  h4: string;
  p1?: string;
  p2?: string;
  p3?: string;
  p4?: string;
  p5?: string;
  p6?: string;
};
type QuestionItemProps = {
  item: Item;
  index: number;
  setActiveItemQues: any;
  activeItemQues: number | null;
};
const QuestionItem: React.FC<QuestionItemProps> = ({
  item,
  index,
  setActiveItemQues,
  activeItemQues,
}) => {
  const changeItem = () => {
    if (index == activeItemQues) {
      setActiveItemQues(null);
      return;
    }
    setActiveItemQues(index);
  };
  return (
    <div className="question_item">
      <div className="question_item_title" onClick={changeItem}>
        <h2>{item.h2}</h2>
        <div className="question_item_title_h4">
          <h4>{item.h4}</h4>
        </div>
        <p>{index == activeItemQues ? "-" : "+"}</p>
      </div>
      {index == activeItemQues && (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="question_item_hero"
          >
            {item.p1 && <p>{item.p1}</p>}
            {item.p2 && <p>{item.p2}</p>}
            {item.p3 && <p>{item.p3}</p>}
            {item.p4 && <p>{item.p4}</p>}
            {item.p5 && <p>{item.p5}</p>}
            {item.p6 && <p>{item.p6}</p>}
          </motion.div>
        </AnimatePresence>
      )}
      <div className="line"></div>
    </div>
  );
};

export default QuestionItem;
