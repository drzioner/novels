import React from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
  light: {
    colors: {
      primary: '#F2F2F2',
      secondary: '#FFF7F7',
      tertiary: '#0D0D0D',
      quaternary: '#D9D7D7',
      quinary: '#A6A6A6',
    },
  },
  pink: {
    colors: {
      primary: '#F2C9D1',
      secondary: '#D9919E',
      tertiary: '#D96277',
      quaternary: '#D9A9B2',
      quinary: '#F0F1F2',
    },
  },
  sepia: {
    colors: {
      primary: '#DACAAF',
      secondary: '#B19675',
      tertiary: '#997854',
      quaternary: '#393834',
      quinary: '#D65C52',
    },
  },
  dark: {
    colors: {
      primary: '#0D0D0D',
      secondary: '#A6A6A6',
      tertiary: '#F2F2F2',
      quaternary: '#595959',
      quinary: '#262626',
    },
  },
  fonts: {
    primary: 'Poppins',
    secondary: 'Open Sans',
  },
  fontSize: {
    tiny: '60%',
    small: '80%',
    normal: '100%',
    medium: '120%',
    large: '140%',
    xlarge: '160%',
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
