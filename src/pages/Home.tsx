// import { Header } from "../components/Header/Header"
// import { Footer } from "../components/Footer/Footer"

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import slide3 from "../img/slide3.jpg";
import slide4 from "../img/slide4.jpg";
import slide from "../img/slide.jpg";
import setka from "../img/setka.jpg";
import { StyledSlide, StyledDiv } from "./homeStyles";

export const Home = () => {
  return (
    <>
      <div>
        <StyledDiv>
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <StyledSlide src={slide3} />
            </SwiperSlide>
            <SwiperSlide>
              <StyledSlide src={slide4} />
            </SwiperSlide>
            <SwiperSlide>
              <StyledSlide src={slide} />
            </SwiperSlide>
            <SwiperSlide>
              <StyledSlide src={setka} />
            </SwiperSlide>
          </Swiper>
        </StyledDiv>
      </div>
      <div>
        <h1> ТОВ "ДАСМЕТАЛ"</h1>
        <h2>Композитна Арматура</h2>
        <p>
          Що це таке? Композитна арматура - це сучасний будівельний матеріал,
          який поєднує у собі високоміцні полімерні композити та армуючі
          елементи. Вона виготовляється шляхом вплетення або вкладення в армуючі
          елементи полімерних матеріалів, таких як скловолокно або базальтове
          волокно.
        </p>
        <p>
          Основні переваги: Міцність та Легкість: Композитна арматура має високу
          міцність при невеликій вазі, що полегшує транспортування та
          встановлення. Корозійна стійкість: Вона абсолютно стійка до корозії та
          хімічної агресії, що гарантує тривалий термін служби в будь-яких
          умовах.
        </p>
        <p>
          Застосування в будівництві: Використовується для армування бетонних
          конструкцій, фундаментів, колон, балок та інших елементів будівель.
          Застосовується в мостах, тунелях, та інших об'єктах інфраструктури.
        </p>
        <h2>Сітки Полімерно-Композитні</h2>
        <p>
          Що це таке? Сітки полімерно-композитні представляють собою структурні
          елементи, виготовлені з полімерних матеріалів та армуючих компонентів,
          таких як скловолокно чи вуглецеве волокно.
        </p>
        <p>
          Основні переваги: Легкість та Простота в Монтажі: Легкість матеріалу
          полегшує процес транспортування та встановлення сіток. Висока
          Міцність: Вони володіють високою міцністю та здатні витримувати значні
          навантаження.
        </p>
        <p>
          Застосування в будівництві: Використовується для армування бетонних
          покриттів, стін, стель, теплоізоляційних систем та інших конструкцій.
          Застосовується в архітектурних проектах для створення міцних та легких
          елементів.
        </p>
      </div>
    </>
  );
};

// export const Home =()=>{
//     return (
//         <div>
//         yudtfiugkjugyg
//         </div>
//     )
// }
