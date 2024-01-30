import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Div = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 7px;
  background: linear-gradient(to right, #bdc3c7, #2c3e50);
  color: white;
  position: sticky;
  top: 0;
  z-index: 3;
  height: 67px;
`;

export const StyledLink = styled(NavLink)`
  color: black;
  text-decoration: none;
  font-size: 25px;
  transition: transform 0.3s ease;

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
  /* margin-left: 750px; */
`;

export const Navigation = styled.div`
display: flex;
align-items: center;
`

export const Li = styled.li`
  margin-right: 60px;
  font-weight: bold;
  font-size: 25px;
  &:hover {
    transform: scale(1.1);
  }
`;

export const Flag = styled.img`
  display: flex;
  width: 25px;
`;

export const FlagsWrapper = styled.div`
  height: fit-content;
  cursor: pointer;
`;