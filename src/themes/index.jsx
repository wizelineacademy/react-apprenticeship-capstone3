import { createGlobalStyle } from 'styled-components'

import palette from './palette';

export const DarkTheme = {
  backgroundColor: palette.dark,
  color: palette.white,
};

export const LightTheme = {
  backgroundColor: palette.light,
  color: palette.lightDark,
};


export const GlobalStyle = createGlobalStyle`
  body {
    background: ${(props) => props.theme.backgroundColor};
    color: ${(props) => props.theme.color};
    font-family: 'Zen Kaku Gothic Antique', sans-serif !important;
}`;