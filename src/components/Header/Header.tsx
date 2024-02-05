import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import {
  Nav,
  NavList,
  StyledLink,
  Li,
  Div,
  Logo,
  Flag,
  FlagsWrapper,
  Flags,
  Navigation,
} from "./headerStyles";
import logo from "../../img/logo.jpg";
import { Footer } from "../Footer/Footer";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import i18n from "i18next";
import uk from "../../img/flags/uk.png";
import en from "../../img/flags/en.png";
import ru from "../../img/flags/ru.png";


const languages = [
  { name: "uk", img: uk },
  { name: "en", img: en },
  { name: "ru", img: ru },
];
interface Language {
  name: string;
  img: string;
}

export const Header = () => {
  const { t } = useTranslation();
  const [hovered, setHovered] = useState(false);
  const [activeLanguage, setActiveLanguage] = useState(uk);

  const changeLanguage = (lang: Language) => {
    i18n.changeLanguage(lang.name);
    setActiveLanguage(lang.img);
    setHovered(false);
  };

  return (
    <div>
      <Div>
        <div>
          <StyledLink to="/">
            <Logo src={logo} alt="Logo" />
          </StyledLink>
        </div>
        <Navigation>
          <Nav>
            <NavList>
              <Li>
                <StyledLink to="/">{t("header.home")}</StyledLink>
              </Li>
              <Li>
                <StyledLink to="/products">{t("header.products")}</StyledLink>
              </Li>
              <Li>
                <StyledLink to="/about-us">{t("header.aboutUs")}</StyledLink>
              </Li>
            </NavList>
          </Nav>
        </Navigation>
        <FlagsWrapper
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <Flag src={activeLanguage} alt="Flag" />
          <Flags hovered={hovered}>
            {languages
              .filter((el) => el.img !== activeLanguage)
              .map((el) => (
                <Flag
                  key={el.name}
                  src={el.img}
                  onClick={() => changeLanguage(el)}
                />
              ))}
          </Flags>
        </FlagsWrapper>
      </Div>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
      <Footer></Footer>
    </div>
  );
};
