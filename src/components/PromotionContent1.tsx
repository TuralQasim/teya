import promotion1 from "../images/promotion/promotion1.png";
import promotion2 from "../images/promotion/promotion2.png";
import { AnimatePresence, motion } from "framer-motion";

function PromotionContent1() {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        className="promotion_content"
      >
        <p className="after_responsive">
          Ежемесячно в нашей фотостудии проходит конкурс «лучшее фото месяца» по
          итогам которого мы определяем победителей и награждаем их бесплатными
          часами аренды нашей студии.
        </p>
        <p>
          Фотографы, занявшие первые места, попадают в список участников
          годового розыгрыша на закрытую вечеринку, где мы разыгрываем депозит в
          нашу студию на 100 000₽.
        </p>
        <p>ВАЖНО:</p>
        <ul>
          <li>
            Участвовать можно каждый месяц, заявки принимаются до 15 числа
            каждого месяца
          </li>
          <li>
            Можно присылать несколько фото, если на съемке были разные
            образы/модели и если съемок было несколько
          </li>
          <li>
            Голосование проходит в Inatagram и в VK, голосовать могут только
            реальные подписчики нашего и вашего аккаунтов. Накрутка голосов
            исключена, влечет за собой дисквалификацию.
          </li>
          <li>
            Ежемесячные призы получают и фотографы и модели, при этом
            использование приза не привязывает вас друг к другу.
          </li>
        </ul>
        <p>
          Файл с фото присылайте в личные сообщения, в Telegram или ссылкой на
          облако:
        </p>
        <div className="promotion_content_images">
          <img loading="lazy" src={promotion1} alt="" />
          <img loading="lazy" src={promotion2} alt="" />
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default PromotionContent1;
