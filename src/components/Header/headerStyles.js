import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Div = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px;
  background: linear-gradient(to right, #bdc3c7, #2c3e50);
  color: white;
  position: sticky;
  top: 0;
  z-index: 3;
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
`;

export const Nav = styled.nav`
  display: flex;
 
`;

export const NavList = styled.ul`
  display: flex;
  list-style-type: none;
`;

export const Li = styled.li`
  margin-right: 60px;
  font-weight: bold;
  font-size: 25px;
`;
