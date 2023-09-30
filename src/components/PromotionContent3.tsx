import { AnimatePresence, motion } from "framer-motion";

function PromotionContent3() {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        className="promotion_content"
      >
        <p>
          *Если было от 5 съемок за текущий месяц, зачисление кэшбэка происхдит
          по итогам месяца, каждого 1 числа нового месяца. Использовать кэшбэк
          можно для любой последующей съемки.
        </p>
      </motion.div>
    </AnimatePresence>
  );
}

export default PromotionContent3;
