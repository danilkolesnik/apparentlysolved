import React from 'react';
import { HeaderContainer, HeaderLogo } from './HeaderStyles';
import logo from '../../assets/icons/logo.svg';
import Switcher from '../language/Switcher';

const Header = () => {
  return (
    <HeaderContainer>
        <HeaderLogo src={logo} alt='logo'/>
        <Switcher />
    </HeaderContainer>
  );
};

export default Header;
