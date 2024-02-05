import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import {
  Nav,
  NavList,
  StyledLink,
  Li,
  Logo,
  Flag,
  FlagsWrapper,
  Flags,
  Navigation,
  Burger,
  HeaderContent,
  HeaderWrapper,
  MobileNav,
  MobileNavItem,
  MobileNavList,
  MobileNavLink,
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
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [activeLanguage, setActiveLanguage] = useState(uk);

  const changeLanguage = (lang: Language) => {
    i18n.changeLanguage(lang.name);
    setActiveLanguage(lang.img);
    setHovered(false);
  };

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  return (
    <HeaderWrapper>
      <HeaderContent>
        <StyledLink to="/">
          <Logo src={logo} alt="Logo" />
        </StyledLink>
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

            <MobileNav>
              <Burger onClick={toggleDropdown}></Burger>
              {isDropdownVisible && (
                <MobileNavList onClick={toggleDropdown}>
                  <MobileNavItem>
                    <MobileNavLink to="/">{t("header.home")}</MobileNavLink>
                  </MobileNavItem>
                  <MobileNavItem>
                    <MobileNavLink to="/products">
                      {t("header.products")}
                    </MobileNavLink>
                  </MobileNavItem>
                  <MobileNavItem>
                    <MobileNavLink to="/about-us">
                      {t("header.aboutUs")}
                    </MobileNavLink>
                  </MobileNavItem>
                </MobileNavList>
              )}
            </MobileNav>
          </Nav>
        </Navigation>
        <FlagsWrapper
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <Flag src={activeLanguage} alt="Flag" />
          <Flags data-hovered={hovered}>
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
      </HeaderContent>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </HeaderWrapper>
  );
};
