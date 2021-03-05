import styled from "styled-components";

import { Palette } from "../../constants/Palette";

const Nav = styled.nav`
  display: flex;
  align-content: center;
  justify-content: space-between;
  width: 80%;
  max-width: 80rem;
  margin: 0 auto;
  padding: 1rem 0 1.5rem;
`;

const NavSection = styled.div`
  display: flex;
  align-items: center;
`;

const NavLogo = styled.img`
  width: 4rem;
  min-height: 3rem;
  margin-right: 16px;
`;

const NavItem = styled.div`
  font-weight: 900;
  font-size: 24px;
  text-decoration: none;
  font-family: "dosis", sans-serif;
`;

const NavName = styled(NavItem)``;

const NavBtnContainer = styled.div`
  padding: 10px 1.5rem;
  border-radius: 4px;
`;

const NavBtn = styled.a`
  background-color: ${Palette.ACCENT_BLUE};
  color: ${Palette.DARK_BLUE};
  border-radius: 4px;
  cursor: pointer;
  min-width: 92px,
  font-weight: 600;
  font-size: 16px;
  text-decoration: none !important;
  outline: none;

  &:hover {
    background-color: ${Palette.DARK_BLUE};
    color: ${Palette.ACCENT_BLUE}
  }

  &:active {
    background-color: ${Palette.DARK_BLUE};
  }
`;

export { Nav, NavSection, NavItem, NavLogo, NavName, NavBtn, NavBtnContainer };
