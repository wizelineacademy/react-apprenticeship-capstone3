import React from 'react';

import ThemeButton from '../ThemeButton/ThemeButton';
import { HeaderContainer } from './Header.styles';
const Header = () => {
  return (
    <HeaderContainer>
        <p>title</p>
        <ThemeButton />
        <p>menu</p>
        <input type="search" placeholder="look for notes" />
        <p>login</p>
    </HeaderContainer>
  );
}
export default Header;
