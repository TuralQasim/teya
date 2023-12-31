import AnimatedHeader from "./AnimatedHeader";
import BookBtn from "./BookBtn";

function HallTextLoft() {
  return (
    <div className="hall_text">
      <AnimatedHeader title="Лофт" forStyle="hall_text_title" />
      <h3>Коворкинг</h3>
      <p>
        Зал в стиле лофт с красивым естественным освещением! Место для создания
        стильных фото/видео кадров.
      </p>
      <p>
        Есть свой отдельный вход и зона раздевалки. Зал подходит для создания
        комьюнити с рабочими местами, в уютной атмосфере.
      </p>
      <p>
        Высокоскоростной wi-fi и кофе-машина, проектор для тебя или твоей
        творческой группы.
      </p>
      <h3>Стоимость</h3>
      <ul className="without_dot">
        <li>1 час — 1500₽</li>
        <li>2 часа — 2500₽</li>
        <li>3 часа — 3000₽</li>
        <li>От 4-х часов аренды 1250₽/час</li>
      </ul>
      <p>
        Мастер-классы, интервью, обучение, коворкинг на специальных условиях.
      </p>
      <BookBtn />
    </div>
  );
}

export default HallTextLoft;
