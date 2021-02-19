import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  Nav,
	NavSection,
	NavLogo,
  NavName,
  NavBtn
} from './style';

export default function NavBar() {
    const { t } = useTranslation();
    return (
		<Nav>
			<NavSection>
				<NavLogo src='/img/ballena.svg' />
        <NavName href='https://dashboard.ballena.io'>dashboard</NavName>
			</NavSection>
			<NavSection>
				<NavBtn href='https://app.ballena.io' target="_blank" rel="noreferrer">{t("LaunchApp")}</NavBtn>
			</NavSection>
		</Nav>
	);
}
