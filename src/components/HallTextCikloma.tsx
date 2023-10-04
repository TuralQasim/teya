import AnimatedHeader from "./AnimatedHeader";
import BookBtn from "./BookBtn";

function HallTextCikloma() {
  return (
    <div className="hall_text">
      <AnimatedHeader title="Циклорама" forStyle="hall_text_title" />
      <p>
        Белоснежная угловая циклорама, ровная и чистая! Идеальна для
        коммерческих съемок, маркетплейсов и любой творческой задумки.
      </p>
      <p>Стены: 4х4.5м, потолок 4м.</p>
      <ul className="with_dot">
        <li>
          Подвесная система из 3-х пантографов и 4-х рельс. Обзор световых
          приборов на 360 и никаких стоек в кадре!
        </li>
        <li>
          Флаги 4 шт, есть все необходимые насадки для профессиональных съемок
        </li>
        <li>Современный Блэкаут 100% перекрытие света</li>
        <li>Прекрасное естественное освещение</li>
      </ul>
      <h3>Стоимость</h3>
      <ul className="without_dot">
        <li>1 час — 2000₽</li>
        <li>2 часа — 3000₽</li>
        <li>3 часа — 4000₽</li>
        <li>От 4-х часов аренды 1250₽/час</li>
      </ul>
      <p>Специальные условия для предпринимателей.</p>
      <BookBtn />
    </div>
  );
}

export default HallTextCikloma;
