import { AnimatePresence, motion } from "framer-motion";

function PromotionContent4() {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        className="promotion_content"
      >
        <p>10% кэшбэк «коммерция».</p>
        <p>Подробности уточняйте у администратора.</p>
      </motion.div>
    </AnimatePresence>
  );
}

export default PromotionContent4;
