import React from "react";

interface ProductCardProps {
  image: string;
  text: string;
  index: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ image, text, index }) => {
  return (
    <div className="card-container">
      <div className="card">
        <div className="card-inner">
          <div className="front">
            <img src={image} loading="lazy" alt="Product" className="product-image" />
            <p>{text}</p>
          </div>
          <div className="back">
            {(index == 0) | (index == 1) ? (
              <div className="product-text">
                <h5>Коммерческие съемки</h5>
                <div className="product_text_bottom">
                  <h3>
                    Маркетплейсы, каталожные, рекламные) на выгодных условиях от
                    1000₽/час.
                  </h3>
                  <p>
                    В неё входит: идеально белая и чистая циклорама,
                    профессиональное оборудование, фото/видеосъемка по запросу.
                  </p>
                  <h2>Пробный час в подарок</h2>
                </div>
              </div>
            ) : index == 2 ? (
              <div className="product-text">
                <h5>Фотосессия «под ключ»</h5>
                <div className="product_text_bottom">
                  <h3>
                    Маркетплейсы, каталожные, рекламные) на выгодных условиях от
                    1000₽/час.
                  </h3>
                  <p>
                    Идеально белая и чистая циклорама, профессиональное
                    оборудование, фото/видеосъемка по запросу.
                  </p>
                  <h2>Пробный час в подарок</h2>
                </div>
              </div>
            ) : index == 3 ? (
              <div className="product-text">
                <h5>Праздник/мероприятие «под ключ»</h5>
                <div className="product_text_bottom">
                  <h3>
                    Дни рождения, гендер-пати, девичники, мастер-классы,
                    обучения и тд.
                  </h3>
                  <p>
                    В неё входит: аренда зала, оборудование, фото/видео съемка,
                    декоратор, фуршет, образ от визажиста, гардероб, ведущий.
                  </p>
                  <p>
                    Специальные предложения и скидки от партнеров,
                    индивидуальный подход, стоимость формируется от ваших
                    запросов
                  </p>
                </div>
              </div>
            ) : index == 4 ? (
              <div className="product-text">
                <h5>Бизнес-портрет</h5>
                <div className="product_text_bottom">
                  <p>
                    В неё входит: стилист, визажист, фотограф, локации,
                    бэкстейджи для соцсетей.
                  </p>
                </div>
              </div>
            ) : index == 5 ? (
              <div className="product-text">
                <h5>Другие услуги</h5>
                <div className="product_text_bottom">
                  <ul>
                    <li>Штатный фотограф от 2000₽/час</li>
                    <li>Штатный видеограф от 2000₽/час</li>
                    <li>Штатный визажист от 1000₽ </li>
                    <li>
                      Штатный декоратор на выгодных условиях, стоимость
                      формируется от ваших запросов
                    </li>
                    <li>Бэкстейдж вашей съемки от 500₽</li>
                    <li>
                      Интересные фотопроекты с расписанием на каждый месяц с
                      участием от 3.000₽
                    </li>
                    <li>
                      Гардероб на базе студии (прокат одежды на съемку и
                      мероприятия)
                    </li>
                  </ul>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
