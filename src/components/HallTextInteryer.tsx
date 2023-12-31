import AnimatedHeader from "./AnimatedHeader";
import BookBtn from "./BookBtn";

function HallTextInteryer() {
  return (
    <div className="hall_text">
      <AnimatedHeader title="Интерьерный" forStyle="hall_text_title" />
      <h3>Конференц-зал</h3>
      <p>Зал в винтажном классическом стиле с тремя фото локациями.</p>
      <ul className="with_dot">
        <li>Белая современная классика</li>
        <li>Римский стиль с колоннами</li>
        <li>Винтажная стена с трещинами</li>
      </ul>
      <p>Отличный вариант для свадебных фотосессий.</p>
      <p>
        Большое пространство для ваших конференций, обучений и мастер-классов.
        Огромная зеркальная стена идеальна для любых групповых занятий.
      </p>
      <h3>Стоимость</h3>
      <ul className="without_dot">
        <li>1 час — 2000₽</li>
        <li>2 часа — 3000₽</li>
        <li>3 часа — 4000₽</li>
        <li>От 4-х часов аренды 1250₽/час</li>
      </ul>
      <p>Аренда под мероприятия и занятия на специальных условиях.</p>
      <BookBtn />
    </div>
  );
}

export default HallTextInteryer;
