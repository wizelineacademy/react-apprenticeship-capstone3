import React, { useContext } from 'react';

import { ThemeContext } from '../../context/themeContext';

// import {  } from './ThemeButton.styles';
const ThemeButton = () => {
    const { theme, toogleTheme } = useContext(ThemeContext);
    const handleTheme = () => {
        toogleTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
    <button onClick={handleTheme}>change theme</button> 
  );
}
export default ThemeButton;
