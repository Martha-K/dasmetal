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
import {
  StyledSlide,
  Hero,
  StyledDiv,
  CompanyDescription,
  Title,
  FittingsInfo,
  Text,
  Subtitle,
} from "./homeStyles";
import { useTranslation } from "react-i18next";

export const Home = () => {
  const { t } = useTranslation();

  return (
    <>
      <Hero>
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
      </Hero>
      <CompanyDescription>
        <Title> {t("body.title")}</Title>
        <Subtitle>{t("body.subtitle")}</Subtitle>
        <FittingsInfo>
          <Text>{t("body.introduction")}</Text>
          <img src="https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg" alt="photo" width='360px'/>
        </FittingsInfo>
        <FittingsInfo>
          
          <img src="https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg" alt="photo" width='360px'/>
          <Text>{t("body.keyStrengths")}</Text>
        </FittingsInfo>
        <FittingsInfo>
          <Text>{t("body.versatileConstructionApplications")}</Text>
          <img src="https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg" alt="photo" width='360px'/>
        </FittingsInfo>

        {/* <p>{t("body.keyStrengths")}</p> */}
        {/* <p>{t("body.versatileConstructionApplications")}</p> */}
        <h2>{t("body.secondSubtitle")}</h2>
        <p>{t("body.overview")}</p>
        <p>{t("body.advantachesAtGlanze")}</p>
        <p>{t("body.applicationsConstructionLandscape")}</p>
      </CompanyDescription>
    </>
  );
};
