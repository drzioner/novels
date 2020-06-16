import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {    
    background: ${(props) =>
      props.color
        ? props.theme[props.color].colors.primary
        : props.theme.light.colors.primary};
    color: ${(props) =>
      props.color
        ? props.theme[props.color].colors.tertiary
        : props.theme.light.colors.tertiary};
    font-family: ${(props) => props.theme.fonts.primary};
    font-kerning: normal;
    letter-spacing: normal;
    line-height: 1.7;
    margin:0%;
    padding:0%;
    width:100%;
    word-spacing: normal;
  }
`;
export default GlobalStyles;
