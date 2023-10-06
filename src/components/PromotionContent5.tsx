import { AnimatePresence, motion } from "framer-motion";

function PromotionContent5() {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        className="promotion_content"
      >
        <h3 className="after_responsive">
          Система скидок для коммерческих проектов.
        </h3>
        <p>
          При единоразовой оплате депозита на 20 часов — стоимость аренды зала
          1000₽/час, то есть 20 000₽.
        </p>
        <p>
          *Использовать часы можно в разные дни, во всех залах, кроме зала
          «Дождь».
        </p>
        <h3>
          Клиентам, нацеленным на долгосрочные взаимовыгодные отношения, которым
          не подходит система депозита, предоставляем фиксированную сумму
          1250₽/час при бронировании от 4-х часов 1200₽/час.
        </h3>
        <p>
          *Оплата может совершаться на Р/С — нужно предоставить подтверждающие
          документы.
        </p>
      </motion.div>
    </AnimatePresence>
  );
}

export default PromotionContent5;
