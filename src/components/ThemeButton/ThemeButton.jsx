import React, { useContext } from 'react';

import { ThemeContext } from '../../context/themeContext';

import { Button, Icon } from './ThemeButton.styles';
const ThemeButton = () => {
    const { theme, toogleTheme } = useContext(ThemeContext);
    const handleTheme = () => {
        toogleTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
    <Button onClick={handleTheme}>
       <Icon
        alt='theme icon'
        src={`./images/${theme === 'light' ? 'sun' : 'moon'}.png`}
      />
       theme
    </Button> 
  );
}
export default ThemeButton;
