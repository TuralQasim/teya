import VideoPlayer from "./components/VideoPlayer";
import logo from "./icons/logo.svg";
import HallTextContent from "./components/HallTextContent";
import HallSlider from "./components/HallSlider";
import arrow from "./icons/arrow.svg";
import img1 from "./images/content/content1.png";
import img2 from "./images/content/content2.png";
import img3 from "./images/content/content3.png";
import img4 from "./images/content/content4.png";
import img5 from "./images/content/content5.png";
import img6 from "./images/content/content6.png";
import rain1 from "./images/rain/rain1.png";
import rain2 from "./images/rain/rain2.png";
import rain3 from "./images/rain/rain3.png";
import rain4 from "./images/rain/rain4.png";
import rain5 from "./images/rain/rain5.png";
import rain6 from "./images/rain/rain6.png";
import cikoma1 from "./images/cikloma/cikloma1.png";
import cikoma2 from "./images/cikloma/cikloma2.png";
import cikoma3 from "./images/cikloma/cikloma3.png";
import cikoma4 from "./images/cikloma/cikloma4.png";
import cikoma5 from "./images/cikloma/cikloma5.png";
import cikoma6 from "./images/cikloma/cikloma6.png";
import interyer1 from "./images/interyer/interyer1.png";
import interyer2 from "./images/interyer/interyer2.png";
import interyer3 from "./images/interyer/interyer3.png";
import interyer4 from "./images/interyer/interyer4.png";
import interyer5 from "./images/interyer/interyer5.png";
import interyer6 from "./images/interyer/interyer6.png";
import loft1 from "./images/loft/loft1.png";
import loft2 from "./images/loft/loft2.png";
import loft3 from "./images/loft/loft3.png";
import loft4 from "./images/loft/loft4.png";
import loft5 from "./images/loft/loft5.png";
import loft6 from "./images/loft/loft6.png";
import zone1 from "./images/zone/zone1.png";
import zone2 from "./images/zone/zone2.png";
import zone3 from "./images/zone/zone3.png";
import zone4 from "./images/zone/zone4.png";
import zone5 from "./images/zone/zone5.png";
import zone6 from "./images/zone/zone6.png";

import HallTextRain from "./components/HallTextRain";
import HallTextCikloma from "./components/HallTextCikloma";
import HallTextInteryer from "./components/HallTextInteryer";
import HallTextLoft from "./components/HallTextLoft";
import Zone from "./components/Zone";
import AnimatedTitle from "./components/AnimatedTitle";
import Play from "./components/Play";
import BookBtn from "./components/BookBtn";
import PromotionContent1 from "./components/PromotionContent1";
import PromotionContent2 from "./components/PromotionContent2";
import PromotionContent3 from "./components/PromotionContent3";
import PromotionContent4 from "./components/PromotionContent4";
import PromotionContent5 from "./components/PromotionContent5";
import PromotionItem from "./components/PromotionItem";
import { useState } from "react";
import QuestionItem from "./components/QuestionItem";
function Teya() {
  const imgArr: string[] = [img1, img2, img3, img4, img5, img6];
  const imgArr2: string[] = [rain1, rain2, rain3, rain4, rain5, rain6];
  const imgArr3: string[] = [
    cikoma1,
    cikoma2,
    cikoma3,
    cikoma4,
    cikoma5,
    cikoma6,
  ];
  const imgArr4: string[] = [
    interyer1,
    interyer2,
    interyer3,
    interyer4,
    interyer5,
    interyer6,
  ];
  const imgArr5: string[] = [loft1, loft2, loft3, loft4, loft5, loft6];
  const items = [
    {
      h2: "01",
      h3: "100 000₽ за лучшую работу года",
      p: "Ежемесячно в нашей фотостудии проходит конкурс «лучшее фото месяца» по итогам которого мы определяем победителей и награждаем их бесплатными часами аренды нашей студии.",
      content: <PromotionContent1 />,
    },
    {
      h2: "02",
      h3: "Система депозитов",
      p: "Для постоянных фотографов и видеографов мы предоставляем особые условия на аренду и услуги нашей фотостудии.",
      content: <PromotionContent2 />,
    },
    {
      h2: "03",
      h3: "Кэшбэк",
      p: "Система лояльности для активных фотографлов и видеографов. 20% кэшбек «активным» за любую съемку от 5 броней в месяц.",
      content: <PromotionContent3 />,
    },
    {
      h2: "04",
      h3: "Кэшбэк «Коммерция»",
      p: "Система лояльности для активных фотографлов и видеографов, сотрудничающих с маркетплейсами и любыми коммерческими организациями.",
      content: <PromotionContent4 />,
    },
    {
      h2: "",
      h3: "Система скидок для коммерческих проектов",
      p: "Первый пробный час предоставляется бесплатно.",
      content: <PromotionContent5 />,
    },
  ];
  const [activeItem, setActiveItem] = useState<number | null>(null);
  const [activeItemQues, setActiveItemQues] = useState<number | null>(null);
  const questionItems = [
    {
      h2: "01",
      h4: "В аквазале вода теплая?",
      p1: "Да, вода теплая, регулируется 37-40 градусов. Кроме этого установлены теплые полы для вашего комфорта.",
    },
    {
      h2: "02",
      h4: "У вас есть фен? Он платный?",
      p1: "Да, после съемки мы предоставляем вам фен и полотенце бесплатно.",
      p2: " Дополнительное полотенце +150₽. ",
      p3: "Так же вы можете бесплатно принять душ при необходимости, воспользоваться средствами для снятия макияжа и пакетами для мокрой одежды.",
    },
    {
      h2: "03",
      h4: "Вы предоставляете полотенца? Пакеты для мокрой одежды есть? ",
      p1: "Гримерка предоставляется бесплатно за 30 минут до начала съемки. ",
      p2: "Свыше 30 минут, рассчет 250₽/час за место. У нас 2 места в гримерной зоне. Отпариватель и утюг предоставляется бесплатно.",
    },
    {
      h2: "04",
      h4: "Есть ли в студии отпариватель?",
      p1: "Да, отпариватель есть и предоставляется бесплатно. Так же есть утюг и рейлы для вашего гардероба.",
    },
    {
      h2: "05",
      h4: "Есть ли какие-то особые правила?",
      p1: "Циклорама: посещается строго с заклеенной скотчем подошвой.",
      p2: " Танцевать на каблуках в циклораме строго запрещено.",
      p3: "Ванна: Красители в ванну добавляются строго по согласованию. Вставать в ванну на каблуках строго запрещено. Специфический реквизит в виде сухих смесей и красящих жидкостей строго по согласованию. Оборудование под воду ставить запрещается.",
      p4: "Любое животное на съемке только через согласование.",
      p5: "Если вам нужна помощь, позовите администратора. У нас очень отзывчивый персонал.",
    },
    {
      h2: "06",
      h4: "Есть ли скидки?",
      p1: "Скидки предоставляются при бронировании зала от 2-х часов и больше. Согласно актуальному прайсу.",
      p2: "Так же есть спец условия для коммерческих съемок организаций и маркетплейсов.",
    },
    {
      h2: "07",
      h4: "На пол часа сдаете зал?",
      p1: "Зал сдается от 1 часа. Либо вы бронируете два зала по пол часа.",
      p2: "Так же мы можем сдать зал на 30 минут если вы бронируете другой зал на 1 час и в общей сумме у вас выходит 1,5 часа. Другие случаи обсуждаются индивидуально.",
    },
    {
      h2: "08",
      h4: "Сколько человек может находиться в зале?",
      p1: "Свыше 10 человек, согласование.",
    },
    {
      h2: "09",
      h4: "Можно ли танцевать в аквазале? Можно в зал дождь на каблуках?",
      p1: "Да, на каблуках можно. Танцевать можно.",
      p2: "Во время танцев происходит более агрессивное использование локации. В целях вашей же безопасности, администраторы вправе остановить съемку в любой момент для технического обслуживания зала. На это в среднем уходит  5-10 минут. ",
      p3: "Танцы от 10 человек: сдаем не менее чем на 2 часа,  стоимость  5000₽ ",
      p4: "Танцы от 15 человек минимум на 3 часа, стоимость 6000₽",
      p5: "Танцевальным группам 1-9 человек возможно арендовать зал на 1-1,5 часа.",
      p6: "Так же организатор проведения  съемок подписывает доп соглашение об материальной ответственности за всех участников съемки.",
    },
    {
      h2: "10",
      h4: "Сдаете зал дождь без воды?",
      p1: "Да, стоимость зала без воды 2000₽/час, от 2-х часов и больше 1500₽/час.",
    },
    {
      h2: "11",
      h4: "Сколько стоит световое оборудование? Сколько источников света предоставляете?",
      p1: "Свет входит в стоимость аренды. Заранее вы можете забронировать нужное количество источников света и фильтры, насадки и тд. ",
      p2: "Дополнительные платные услуги: Гримерка пол часа бесплатно, дальше 500₽/час. ",
      p3: "Дым, лазеры, цифровой проектор, жидкие зеркала 500₽/час.",
      p4: "Мотоцикл под воду +1000₽.",
      p5: "Ванна с водой +1000₽.",
      p6: "Гардероб по прайсу.",
    },
    {
      h2: "12",
      h4: "Сколько человек вмещает циклорама? ",
      p1: "зал «Циклорама» 40 кВ.м. Циклорама на три плоскости. Высота потолков 4 метра Стены 4 на 5,5 м.В нашей циклораме снимали клипы с 20 участниками. Вы всегда можете заранее приехать и посмотреть залы студии.",
    },
    {
      h2: "13",
      h4: "Какое оборудование у вас есть?",
      p1: "Наша студия оснащена современным разнообразным оборудованием. Импульсные и постоянные источники можно использовать в необходимом объеме. Так же много дополнительного оборудования. Вы всегда можете уточнить у администратора интересующий вас вопрос. ",
    },
    {
      h2: "14",
      h4: "У вас есть цветные фильтры?",
      p1: "Наша студия оснащена современным разнообразным оборудованием. Цветные гелевый фильтры, цветные шторки, маски гобо, RGB-свет, все это предоставляется бесплатно. ",
    },
    {
      h2: "15",
      h4: "Дождь идет все время аренды? Как работает дождь?",
      p1: "Дождем управляете вы сами. Система включает в себя: крупный дождь, мелкий дождь и тропический душ за стеклом. Крупный и мелкий дождь можно чередовать по желанию. Тропический душ включает администратор. Так же администратор может прервать съемку для технического обслуживания зала на 5-10 минут, если это требуется. ",
    },
    {
      h2: "16",
      h4: "Ванна в зале контент наполняется?",
      p1: "Да, наполнение ванны +1000₽ к аренде. Необходимо предупредить об этом заранее. Так же ванну можно перенести в любой другой зал. ",
    },
    {
      h2: "17",
      h4: "Есть ли у вас колонка?",
      p1: "Да, в каждом зале есть Яндекс станция Алиса с оплаченой подпиской. Так же можно подключить колонку к своему телефону.",
    },
    {
      h2: "18",
      h4: "Есть ли у вас колонка?",
      p1: "Да, в каждом зале есть Яндекс станция Алиса с оплаченой подпиской. Так же можно подключить колонку к своему телефону.",
    },
  ];
  return (
    <>
      {/* <div className="hero">
        <VideoPlayer />
        <div className="hero_text_bg">
          <div className="container">
            <div className="hero_text">
              <header>
                <div className="logo">
                  <img src={logo} alt="" />
                </div>
                <ul className="navbar">
                  <li>
                    <a href="#">залы</a>
                  </li>
                  <li>
                    <a href="#">оборудование</a>
                  </li>
                  <li>
                    <a href="#">услуги</a>
                  </li>
                  <li>
                    <a href="#">о студии</a>
                  </li>
                  <li>
                    <a href="#">контакты</a>
                  </li>
                </ul>
                <a href="#" className="phone">
                  +7 (987) 394-58-31
                </a>
              </header>
              <div className="book">
                <div className="book_text">
                  <p>-50% на первое посещение по промокоду «водолей»</p>
                  <h1>арт фотостудия</h1>
                </div>
                <button className="book_btn_white">
                  забронировать <img src={arrow} alt="" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="halls">
          <h2>залы</h2>
          <p>
            5 залов в разных стилях, оснащенные новым профессиональным
            оборудованием
          </p>
        </div>
        <div className="line"></div>
        <div className="hall_hero">
          <HallTextContent />
          <HallSlider arr={imgArr} />
        </div>
        <div className="line"></div>
        <div className="hall_hero hall_hero_reverse">
          <HallTextRain />
          <HallSlider arr={imgArr2} />
        </div>
        <div className="line"></div>
        <div className="hall_hero">
          <HallTextCikloma />
          <HallSlider arr={imgArr3} />
        </div>
        <div className="line"></div>
        <div className="hall_hero hall_hero_reverse">
          <HallTextInteryer />
          <HallSlider arr={imgArr4} />
        </div>
        <div className="line"></div>
        <div className="hall_hero">
          <HallTextLoft />
          <HallSlider arr={imgArr5} />
        </div>
        <div className="line"></div>
      </div>
      <div className="other_bg">
        <div className="container">
          <div className="other">
            <h2>другие зоны</h2>
            <p>
              Кроме залов мы оборудовали студию другими необходимыми зонами для
              вашего комфорта
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <Zone
          content=""
          h2="гримерная"
          p="Два рабочих места со всем необходимым. Есть отпариватель, утюг и рейлы для одежды. "
          reverse={false}
          image1={zone1}
          image2={zone2}
        />
        <Zone
          content="(для взрослых)"
          h2="гардероб"
          p="Можно воспользоваться прокатом одежды, обуви и аксессуаров на базе студии. "
          reverse={true}
          image3={zone3}
          image4={zone4}
        />
        <Zone
          content="(для детей)"
          h2="гардероб"
          p="Доступны в прокат платья для девочек разных возрастов."
          reverse={false}
          image5={zone5}
          image6={zone6}
        />
        <div className="line"></div>
      </div>
      <AnimatedTitle text="творческое пространство посмотрите рум-тур" />
      <div className="container">
        <div className="line"></div>
      </div>
      <AnimatedTitle text="как устроена фотостудия «тейя»" />
      <div className="container">
        <div className="line"></div>
        <Play name="play" />
        <div className="equipment">
          <div className="equipment_text">
            <h2>оборудование</h2>
            <ul>
              <li>Импульсные источники 6 шт </li>
              <li>Постоянный свет 4 шт </li>
              <li>RGB (Цветной свет) 4 шт</li>
              <li>Радиосинхронизатор цифровой 2шт </li>
              <li>Радиосинхронизатор механический 1 шт</li>
              <li>Стойки для оборудования 17шт </li>
              <li>Комплект стоек для цветного фона и баннеров - 1шт </li>
              <li>Журавль, систенд, пантограф </li>
            </ul>
            <div className="equipment_bottom">
              <ul>
                <li>Маски Гобо </li>
                <li>Цветные фильтры (шторки, гелевые, стекла)</li>
                <li>Шторки с сотами 2 шт </li>
                <li>Рефлекторы 7 шт </li>
                <li>Фоновый рефлектор 1 шт </li>
                <li>Портретная тарелка 2 шт </li>
                <li>Стрипбокс с сотами 4шт </li>
                <li>Софтбокс 1шт </li>
                <li>Октобокс 2 шт </li>
                <li>Отражатель на просвет 5 в 1 — 1 шт</li>
                <li>Зонты 3шт</li>
                <li>Флаги 4 шт</li>
              </ul>
              <ul>
                <li>Генератор дыма 2 шт </li>
                <li>Лазер 1шт </li>
                <li>Проектор 1шт</li>
                <li>Вентилятор напольный 1шт </li>
                <li>Жидкое зеркало и дискошар </li>
                <li>Цветные фоны (зелёный, желтый, розовый, голубой)</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="base">
          <h2 className="base_title">
            Так же на базе студии на постоянной основе проходят:
          </h2>
          <ul className="base_items">
            <li>Занятия в модельной школе для взрослых</li>
            <li>Занятия детской модельной школы</li>
            <li>мастер-классы по рисованию на мольбертах 1500₽/чел.</li>
            <li>Мастер-классы по декору от 1000₽/человек</li>
            <li>Воркшопы для фотографов и видеографов</li>
            <li>Дни открытых дверей</li>
          </ul>
        </div>
        <div className="line"></div>
      </div>
      <AnimatedTitle text="видео с открытия студии как это было" /> */}
      <div className="container">
        <div className="line"></div>
        <Play name="play2" />
        <h2 className="promotion_title">акции</h2>
        <div className="promotion_subtitle">
          <h3>
            На первое посещение студии скидка 50% по промокоду{" "}
            <span>«ВОДОЛЕЙ»</span>
          </h3>
          <button className="book_btn_white">
            забронировать <img src={arrow} alt="" />
          </button>
        </div>
        <div className="promotion_hero">
          <div className="promotion_left">
            <h5>для фотографов и видеографов</h5>
            <p>для клиентов</p>
          </div>
          <div className="promotion_right">
            <div className="line"></div>
            <div className="promotion_acc">
              {items.map((item, i) => {
                return (
                  <PromotionItem
                    key={i}
                    index={i}
                    item={item}
                    activeItem={activeItem}
                    setActiveItem={setActiveItem}
                  />
                );
              })}
            </div>
          </div>
        </div>
        <h2 className="question_title">частые вопросы</h2>
        <div className="question_acc">
          <div className="line"></div>
          {questionItems.map((item, index) => {
            return (
              <QuestionItem
                key={index}
                item={item}
                index={index}
                setActiveItemQues={setActiveItemQues}
                activeItemQues={activeItemQues}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Teya;
