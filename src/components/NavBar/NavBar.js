import React from 'react';
import { useTranslation } from 'react-i18next';

import { Nav, NavBtn, NavLogo, NavName, NavSection } from './style';

export default function NavBar() {
  const { t } = useTranslation();
  return (
    <Nav>
      <NavSection>
        <NavLogo src="/img/logo_balle_header_160px.png" />
        <NavName href="https://dashboard.ballena.io">dashboard.ballena.io</NavName>
      </NavSection>
      <NavSection>
        <NavBtn href="https://app.ballena.io" target="_blank" rel="noreferrer">
          {t("LaunchApp")}
        </NavBtn>
      </NavSection>
    </Nav>
  );
}
