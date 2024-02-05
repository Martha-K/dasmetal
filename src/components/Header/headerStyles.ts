import styled from "styled-components";
import { NavLink } from "react-router-dom";
import burger from "../../img/burger.png";

interface FlagsWrapperProps {
  "data-hovered": boolean;
}

export const MobileNav = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
  }
`;

export const MobileNavList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  margin-top: 10px;

  background: #2c3e50;
  position: absolute;
  top: 70px;
  left: 0;
  width: 100%;
  z-index: 1000;
`;

export const MobileNavItem = styled.li`
  padding: 15px;
  text-align: center;
  border-bottom: 1px solid #fff;

  &:last-child {
    border-bottom: none;
  }
`;

export const MobileNavLink = styled(NavLink)`
  color: white;
  text-decoration: none;
  font-size: 18px;
`;

export const HeaderWrapper = styled.div`
  position: sticky;
  top: 0;
  z-index: 1000;
`;

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 7px 20px;
  background: linear-gradient(to right, #bdc3c7, #2c3e50);
  color: white;
  height: 70px;
`;

export const StyledLink = styled(NavLink)`
  color: black;
  text-decoration: none;
  font-size: 25px;

  &.active {
    color: white;
  }
`;

export const Logo = styled.img`
  width: 70px;
  border-radius: 8px;
`;

export const Nav = styled.nav`
  display: flex;
`;

export const NavList = styled.ul`
  display: flex;
  list-style-type: none;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Navigation = styled.div`
  display: flex;
  align-items: center;
`;

export const Li = styled.li`
  margin-right: 60px;
  font-weight: bold;
  font-size: 25px;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

export const Burger = styled.div`
  margin-right: 50px;
  display: none;
  background-image: url(${burger});
  width: 40px;
  height: 40px;
  background-position: center;
  background-size: 50px;

  @media (max-width: 768px) {
    display: inline-block;
  }
`;

export const Flag = styled.img`
  display: flex;
  width: 34px;
  border-radius: 10px;
`;

export const FlagsWrapper = styled.div`
  position: absolute;
  overflow: hidden;
  cursor: pointer;
  right: 20px;
  top: 24px;
  transform-origin: top;
`;

export const Flags = styled.div<FlagsWrapperProps>`
  overflow: hidden;
  height: ${(props) => (props["data-hovered"] ? "64px" : "0")};
  transition: all 0.3s ease-in-out;
`;
