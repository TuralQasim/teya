import { AnimatePresence, motion } from "framer-motion";

function PromotionContent2() {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        className="promotion_content"
      >
        <p>
          Депозит на 10 000₽ предоставляет скидку 10% на весь общий прайс и
          скидку 5% на пакеты часов.
        </p>
        <p>
          Депозит на 20 000₽ предоставляет скидку 20% на весь общий прайс и
          скидку 7% на пакеты часов.
        </p>
        <p>
          Депозит на 30 000₽ предоставляет скидку 30% на весь общий прайс и
          скидку 10% на пакеты часов.
        </p>
        <p>
          НАПРИМЕР: <br /> 1 час аренды зала «Дождь» по прайсу 3000₽ - 30% =
          2100₽ <br /> ИЛИ
        </p>
        <p>
          пакет на 3 часа аренды зала «Дождь» по прайсу 6000₽ - 10% = 5400₽
          1800₽/час вместо 2000₽/час
        </p>
        <p>
          *Если студию оплачивает ваш клиент, то мы просто компенсируем обратно
          в депозит сумму скидки.
        </p>
        <p>*Депозит действует 3 месяца с первой съемки.</p>
      </motion.div>
    </AnimatePresence>
  );
}

export default PromotionContent2;
