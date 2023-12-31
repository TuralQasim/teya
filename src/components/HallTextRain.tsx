import AnimatedHeader from "./AnimatedHeader";
import BookBtn from "./BookBtn";

function HallTextRain() {
  return (
    <div className="hall_text">
      <AnimatedHeader title="дождь" forStyle="hall_text_title" />
      <p>
        Это большая площадка для АКВАСЪЕМКИ.Зал оборудован системами, с помощью
        которых можно создавать крутые кадры с водой.
      </p>
      <ul className="with_dot">
        <li>Мелкий дождь с туманом</li>
        <li>Крупный дождь</li>
        <li>Тропический душ за стеклом</li>
        <li>Шланг с лейкой разных режимов</li>
      </ul>
      <p>
        <span>Много бесплатного реквизита:</span> зонты, дождевики, сигнальные
        ленты, конусы, бочка, вейкборд, надувной фламинго и тд.
      </p>
      <p>Мотоцикл, шлем и джерси — 1000₽/час.</p>
      <h3>Стоимость</h3>
      <ul className="without_dot">
        <li>1 час — 3000₽</li>
        <li>2 часа — 5000₽</li>
        <li>3 часа — 6000₽</li>
        <li>От 3-х часов аренды 2000₽/час</li>
      </ul>
      <p>Одно наполнение ванны водой — 1000₽, сообщать необходимо заранее</p>
      <BookBtn />
    </div>
  );
}

export default HallTextRain;
