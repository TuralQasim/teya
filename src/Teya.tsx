import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import HallTextContent from "./components/HallTextContent";
import HallSlider from "./components/HallSlider";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaXmark } from "react-icons/fa6";
import HallTextRain from "./components/HallTextRain";
import HallTextCikloma from "./components/HallTextCikloma";
import HallTextInteryer from "./components/HallTextInteryer";
import HallTextLoft from "./components/HallTextLoft";
import Zone from "./components/Zone";
import Play from "./components/Play";
import BookBtn from "./components/BookBtn";
import PromotionContent1 from "./components/PromotionContent1";
import PromotionContent2 from "./components/PromotionContent2";
import PromotionContent3 from "./components/PromotionContent3";
import PromotionContent4 from "./components/PromotionContent4";
import PromotionContent5 from "./components/PromotionContent5";
import PromotionItem from "./components/PromotionItem";
import QuestionItem from "./components/QuestionItem";
import ComandItem from "./components/ComandItem";

import arrow from "./icons/arrow.svg";
import VideoPlayer from "./components/VideoPlayer";
import logo from "./icons/logo.svg";
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
import galery1 from "./images/galery/galery1.png";
import galery2 from "./images/galery/galery2.png";
import galery3 from "./images/galery/galery3.png";
import galery4 from "./images/galery/galery4.png";
import galery5 from "./images/galery/galery5.png";
import galery6 from "./images/galery/galery6.png";
import galery7 from "./images/galery/galery7.png";
import galery8 from "./images/galery/galery8.png";
import galery9 from "./images/galery/galery9.png";
import comand1 from "./images/comand/comand1.png";
import comand2 from "./images/comand/comand2.png";
import comand3 from "./images/comand/comand3.png";
import comand4 from "./images/comand/comand4.png";
import comand5 from "./images/comand/comand5.png";
import comand6 from "./images/comand/comand6.png";
import footLogo from "./icons/footLogo.svg";
import discount1 from "./images/discount/discount1.png";
import discount2 from "./images/discount/discount2.png";
import discount3 from "./images/discount/discount3.png";
import discount4 from "./images/discount/discount4.png";
import discount5 from "./images/discount/discount5.png";
import product1 from "./images/product/product1.png";
import product2 from "./images/product/product2.png";
import product3 from "./images/product/product3.png";
import product4 from "./images/product/product4.png";
import product5 from "./images/product/product5.png";
import product6 from "./images/product/product6.png";
import video1 from "./video/video1.mp4";
import video2 from "./video/video2.mp4";

import ProductCard from "./components/ProductCard";
import ScrollText from "./components/ScrollText";

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
  const [burger, setBurger] = useState<boolean>(false);
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
  const products = [
    {
      image: product1,
      text: "Коммерческие съемки",
    },
    {
      image: product2,
      text: "Предметная съемка «под ключ»",
    },
    {
      image: product3,
      text: "Фотосессия «под ключ»",
    },
    {
      image: product4,
      text: "Праздник/мероприятие «под ключ»",
    },
    {
      image: product5,
      text: "Бизнес-портрет",
    },
    {
      image: product6,
      text: "Другие услуги",
    },
  ];

  return (
    <>
      <div className="hero">
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
                <div className="burger">
                  <GiHamburgerMenu onClick={() => setBurger(true)} />
                  {burger && (
                    <AnimatePresence>
                      <motion.div
                        initial={{ y: -200 }}
                        animate={{ y: 0 }}
                        exit={{ y: -200 }}
                        className="burger_menu"
                      >
                        <ul>
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
                        <a href="#">+7 (987) 394-58-31</a>
                        <FaXmark onClick={() => setBurger(false)} />
                      </motion.div>
                    </AnimatePresence>
                  )}
                </div>
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
      <div className="container">
        <div className="line"></div>
        <div className="discount">
          <div className="discount_top">
            <div className="discount_top_left">
              <img src={discount1} alt="" />
              <h2>акция</h2>
            </div>
            <div className="discount_top_rigt">
              <img src={discount2} alt="" />
            </div>
          </div>
          <div className="discount_mid">
            <div className="discount_mid_left">
              <p>
                На первое посещение студии по промокоду
                <span>«ВОДОЛЕЙ»</span>
              </p>
            </div>
            <div className="discount_mid_right">
              <h2>скидка 50%</h2>
              <BookBtn />
            </div>
          </div>
          <div className="discount_bottom">
            <div className="discount_bottom_left">
              <img src={discount3} alt="" />
              <img src={discount4} alt="" />
            </div>
            <div className="discount_bottom_right">
              <p>
                Первая и единственная фотостудия Нижнего Новгорода с аквазалом
              </p>
              <img src={discount5} alt="" />
            </div>
          </div>
        </div>
        <div className="line"></div>
      </div>
      <ScrollText
        text="творческое пространство посмотрите рум-тур"
        position="toRight"
      />
      <div className="container">
        <div className="line"></div>
      </div>
      <ScrollText text="как устроена фотостудия «тейя»" position="toLeft" />
      <div className="container">
        <div className="line"></div>
        <Play name="play" videoSrc={video1} />
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
      <div className="container">
        <div className="service_title">услуги</div>
        <div className="service_hero">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              index={index}
              image={product.image}
              text={product.text}
            />
          ))}
        </div>
      </div>
      <ScrollText
        text="видео с открытия студии как это было"
        position="toRight"
      />
      <div className="container">
        <div className="line"></div>
        <Play name="play2" videoSrc={video2} />
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
        <div className="galery">
          <h2 className="galery_title">фотогалерея</h2>
          <div className="galery_hero">
            <div className="galery_top">
              <div className="galery_top_left">
                <img loading="lazy" src={galery1} alt="" />
                <img loading="lazy" src={galery2} alt="" />
              </div>
              <img loading="lazy" src={galery3} alt="" />
            </div>
            <div className="galery_mid">
              <div className="galery_mid_left">
                <img loading="lazy" src={galery4} alt="" />
              </div>
              <div className="galery_mid_right">
                <img loading="lazy" src={galery5} alt="" />
                <img loading="lazy" src={galery6} alt="" />
              </div>
            </div>
            <div className="galery_top galery_top_reverse">
              <div className="galery_top_left galery_top_left_reverse">
                <img loading="lazy" src={galery9} alt="" />
                <img loading="lazy" src={galery8} alt="" />
              </div>
              <img loading="lazy" src={galery7} alt="" />
            </div>
          </div>
        </div>
        <div className="comand">
          <div className="comand_title">
            <h2>наша</h2>
            <span></span>
            <h2>команда</h2>
          </div>
          <div className="comand_items">
            <div className="comand_items_left">
              <ComandItem
                isVideo={true}
                h6=""
                h5="Прочувствуйте атмосферу съемок"
                p="(01)"
                src={comand1}
                position="topRight"
              />
            </div>
            <div className="comand_items_mid">
              <ComandItem
                isVideo={false}
                h6="(управляющий студии)"
                h5="Александр Зверев"
                p="(02)"
                src={comand2}
                position="bottomLeft"
              />
              <ComandItem
                isVideo={false}
                h6="(арт-директор/штатный декоратор)"
                h5="ульяна Жаворонкова"
                p="(03)"
                src={comand3}
                position="topRight"
              />
              <ComandItem
                isVideo={false}
                h6="(штатный видеограф)"
                h5="Роман Худяков"
                p="(04)"
                src={comand4}
                position="bottomLeft"
              />
              <ComandItem
                isVideo={false}
                h6="(управляющий студии)"
                h5="Александр Зверев"
                p="(05)"
                src={comand5}
                position=""
              />
            </div>
            <div className="comand_items_right">
              <ComandItem
                isVideo={false}
                h6="(штатный фотограф)"
                h5="Кристина Середнёва"
                p="(06)"
                src={comand6}
                position=""
              />
            </div>
          </div>
          <div className="comand_text">
            <h2>Арт-фотостудия «Тейя» —</h2>
            <h2>это 300 кв.м для вашего</h2>
            <h2>комфортного творчества!</h2>
            <p>
              У нас крутой сервис — с комфортной зоной ожидания, кофе и
              отзывчивым персоналом. Наши штатные фотограф, видеограф и
              декоратор всегда готовы воплощать ваши идеи и предлагают свои!
            </p>
          </div>
        </div>
        {/* <SwiperComponent
          slidesPerView={3}
          spaceBetween={30}
          paginationClickable={true}
        >
          <SwiperSlide>
            <Slide src1={slide1} src2={slide2} src3={slide3} />
          </SwiperSlide>
          <SwiperSlide>
            <Slide src1={slide4} src2={slide5} src3={slide6} />
          </SwiperSlide>
          <SwiperSlide>
            <Slide src1={slide7} src2={slide8} src3={slide9} />
          </SwiperSlide>
          <SwiperSlide>
            <Slide src1={slide1} src2={slide2} src3={slide3} />
          </SwiperSlide>
          <SwiperSlide>
            <Slide src1={slide4} src2={slide5} src3={slide6} />
          </SwiperSlide>
          <SwiperSlide>
            <Slide src1={slide7} src2={slide8} src3={slide9} />
          </SwiperSlide>
          <SwiperSlide>
            <Slide src1={slide1} src2={slide2} src3={slide3} />
          </SwiperSlide>
          <SwiperSlide>
            <Slide src1={slide4} src2={slide5} src3={slide6} />
          </SwiperSlide>
          <SwiperSlide>
            <Slide src1={slide7} src2={slide8} src3={slide9} />
          </SwiperSlide>
        </SwiperComponent> */}
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
        <footer>
          <div className="foot_top">
            <img src={footLogo} alt="" />
            <h2>арт фотостудия</h2>
          </div>
          <div className="line"></div>
          <div className="foot_hero">
            <div className="foot1">
              <div className="foot_address">
                <h2 className="foot_title">Адрес фотостудии</h2>
                <p>Нижний Новгород, улица Нестерова, 22</p>
                <a href="#">+7 (987) 394-58-31</a>
              </div>
              <div className="how_get">
                <h2 className="foot_title">Как добраться</h2>
                <p>
                  В навигаторе набирайте Тейя, приведет с нужной стороны, с
                  Большой Печерской. Ориентир ресторан АМО, мы их соседи.
                </p>
                <p>
                  Если забьете ул. Нестерова, д.22, то приведет с другой
                  стороны. Придется обходить дом.
                </p>
              </div>
            </div>
            <div className="foot2">
              <div className="foot_nav">
                <h2 className="foot_title">Навигация</h2>
                <ul>
                  <li>
                    <a href="#">Залы</a>
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
                </ul>
              </div>
              <div className="foot_policy">
                <p>Политика конфиденциальности</p>
                <p>Все права защищены</p>
              </div>
            </div>
            <div className="foot3">
              <div className="foot_social">
                <h2 className="foot_title">Социальные сети</h2>
                <ul>
                  <li>
                    <a href="#">telegram</a>
                  </li>
                  <li>
                    <a href="#">вконтакте</a>
                  </li>
                  <li>
                    <a href="#">instagram</a>
                  </li>
                </ul>
              </div>
              <p>Meta признана экстремистской организацией в РФ</p>
            </div>
            <div className="foot4">
              <a href="#">Смотреть на Яндекс картах</a>
              <div className="map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.925868895192!2d49.8347487749935!3d40.366168058716724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d44daf66477%3A0xdbe14ece0c3f896e!2zUcSxeiBRYWxhc8Sx!5e0!3m2!1saz!2saz!4v1696105979932!5m2!1saz!2saz"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
          <div className="line"></div>
        </footer>
      </div>
    </>
  );
}

export default Teya;
