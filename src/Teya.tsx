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
      <AnimatedTitle text="как устроена фотостудия «тейя»" /> */}
      {/* <div className="container">
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
      </div> */}
      {/* <AnimatedTitle text="видео с открытия студии как это было" /> */}
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
      </div>
    </>
  );
}

export default Teya;
