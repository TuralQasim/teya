import AnimatedHeader from "./AnimatedHeader";
import BookBtn from "./BookBtn";

function HallTextContent() {
  return (
    <div className="hall_text">
      <AnimatedHeader title="залы" forStyle="hall_text_title" />
      <p>
        Светлый зал с хорошим естественным освещением, идеален для контентной,
        каталожной, тематической, предметной съемок, съемки личного бренда и
        бизнес-съемок.
      </p>
      <ul className="with_dot">
        <li>Широкий подоконник</li>
        <li>Реквизита для предметной съемки</li>
        <li>
          Переносная ванна в стиле Бали, с возможностью наполнения водой (можно
          перенести в другой зал){" "}
        </li>
      </ul>
      <p>Диваны, кресла, стулья, монстеры, ширма, большое зеркало и тд.</p>
      <h3>Стоимость</h3>
      <ul className="without_dot">
        <li>1 час — 1500₽</li>
        <li>2 часа — 2500₽</li>
        <li>3 часа — 3000₽</li>
        <li>От 3-х часов аренды 1000₽/час</li>
      </ul>
      <p>Одно наполнение ванны водой — 1000₽, сообщать необходимо заранее</p>
      <BookBtn />
    </div>
  );
}

export default HallTextContent;
