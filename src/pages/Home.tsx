import { Swiper, SwiperSlide } from "swiper/react";
import { ComponentObserver } from "../helpers/ComponentObserver";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import slide3 from "../img/slide3.jpg";
import slide4 from "../img/slide4.jpg";
import slide from "../img/slide.jpg";
import slide2 from "../img/slide2.jpg";
import armature from "../img/armature.jpg";
import armature2 from "../img/armature2.jpg";
import armature3 from "../img/armature3.jpg";
import grid from "../img/grid.jpg";
import grid2 from "../img/grid2.jpg";
import grid3 from "../img/grid3.jpg";
import {
  StyledSlide,
  Hero,
  StyledDiv,
  CompanyDescription,
  FittingsInfo,
  Text,
  Image,
  Subtitle,
} from "./HomeStyles";
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
              delay: 2500,
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
              <StyledSlide src={slide2} />
            </SwiperSlide>
          </Swiper>
        </StyledDiv>
      </Hero>
      <CompanyDescription>
        <div>
          <Subtitle>{t("body.subtitle")}</Subtitle>
          <FittingsInfo>
            <ComponentObserver
              position="right"
              Item={<Image src={armature} alt="armature" />}
            />
            <ComponentObserver Item={<Text>{t("body.introduction")}</Text>} />
          </FittingsInfo>
          <FittingsInfo>
            <ComponentObserver
              Item={<Image src={armature2} alt="armature" />}
            />
            <ComponentObserver
              position="right"
              Item={<Text>{t("body.keyStrengths")}</Text>}
            />
          </FittingsInfo>
          <FittingsInfo>
            <ComponentObserver
              position="right"
              Item={<Image src={armature3} alt="armature" />}
            />
            <ComponentObserver
              Item={<Text>{t("body.versatileConstructionApplications")}</Text>}
            />
          </FittingsInfo>
        </div>
        <Subtitle>{t("body.secondSubtitle")}</Subtitle>
        <FittingsInfo>
          <ComponentObserver Item={<Image src={grid} alt="grid" />} />
          <ComponentObserver
            position="right"
            Item={<Text>{t("body.overview")}</Text>}
          />
        </FittingsInfo>
        <FittingsInfo>
          <ComponentObserver
            position="right"
            Item={<Image src={grid2} alt="grid" />}
          />
          <ComponentObserver
            Item={<Text>{t("body.advantagesAtGlance")}</Text>}
          />
        </FittingsInfo>
        <FittingsInfo>
          <ComponentObserver Item={<Image src={grid3} alt="grid" />} />
          <ComponentObserver
            position="right"
            Item={<Text>{t("body.applicationsConstructionLandscape")}</Text>}
          />
        </FittingsInfo>
      </CompanyDescription>
    </>
  );
};
