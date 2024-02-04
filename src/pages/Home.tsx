// import { Header } from "../components/Header/Header"
// import { Footer } from "../components/Footer/Footer"

import { Swiper, SwiperSlide } from "swiper/react";
import { ComponentObserver } from "../helpers/ComponentObserver";
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
  Image,
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
          <ComponentObserver Item={<Text>{t("body.introduction")}</Text>} />
          <ComponentObserver
            Item={
              <Image
                src="https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg"
                alt="photo"
              />
            }
          />
        </FittingsInfo>
        <FittingsInfo>
          <ComponentObserver
            Item={
              <Image
                src="https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg"
                alt="photo"
              />
            }
          />
          <ComponentObserver Item={<Text>{t("body.keyStrengths")}</Text>} />
        </FittingsInfo>
        <FittingsInfo>
          <ComponentObserver
            Item={<Text>{t("body.versatileConstructionApplications")}</Text>}
          />
          <ComponentObserver
            Item={
              <Image
                src="https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg"
                alt="photo"
              />
            }
          />
        </FittingsInfo>
        <Subtitle>{t("body.secondSubtitle")}</Subtitle>
        <FittingsInfo>
          <ComponentObserver
            Item={
              <Image
                src="https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg"
                alt="photo"
              />
            }
          />
          <ComponentObserver Item={<Text>{t("body.overview")}</Text>} />
        </FittingsInfo>
        <FittingsInfo>
          <ComponentObserver
            Item={<Text>{t("body.advantachesAtGlanze")}</Text>}
          />
          <ComponentObserver
            Item={
              <Image
                src="https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg"
                alt="photo"
              />
            }
          />
        </FittingsInfo>
        <FittingsInfo>
          <ComponentObserver
            Item={
              <Image
                src="https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg"
                alt="photo"
              />
            }
          />
          <ComponentObserver
            Item={<Text>{t("body.applicationsConstructionLandscape")}</Text>}
          />
        </FittingsInfo>
      </CompanyDescription>
    </>
  );
};
