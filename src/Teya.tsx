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

import HallTextRain from "./components/HallTextRain";
import HallTextCikloma from "./components/HallTextCikloma";
import HallTextInteryer from "./components/HallTextInteryer";
import HallTextLoft from "./components/HallTextLoft";
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
          <div className="other"></div>
        </div>
      </div>
    </>
  );
}

export default Teya;
