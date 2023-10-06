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
        <h3 className="after_responsive">
          Система лояльности активным фотографам и видеографам.
        </h3>
        <p>
          Система лояльности для активных фотографлов и видеографов. 20% кэшбек
          «активным» за любую съемку от 5 броней в месяц.
        </p>
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
