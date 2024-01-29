import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Nav, NavList, StyledLink, Li, Div, Logo } from "./headerStyles.js";
import logo from "../../img/logo.jpg";
import { Footer } from "../Footer/Footer";

export const Header = () => {
  return (
    <div>
      <Div>
        <Logo src={logo} alt="Logo" />

        <Nav>
          <NavList>
            <Li>
              <StyledLink to="/">Головна</StyledLink>
            </Li>
            <Li>
              <StyledLink to="/products">Товари та послуги</StyledLink>
            </Li>
            <Li>
              <StyledLink to="/about-us">Про нас</StyledLink>
            </Li>
          </NavList>
        </Nav>
      </Div>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
      <Footer></Footer>
    </div>
  );
};
