import styled from 'styled-components';

const Button = styled.button`
  align-content: ${(props) =>
    props.alignContent ? props.alignContent : 'center'};
  align-items: ${(props) => (props.alignItems ? props.alignItems : 'center')};
  background: ${(props) =>
    props.color
      ? props.theme[props.color].colors.primary
      : props.theme.sepia.colors.primary};
  border: ${(props) => (props.border ? props.border : 'none')};
  border-radius: ${(props) =>
    props.borderRadius ? props.borderRadius : '8px'};
  box-shadow: ${(props) =>
    props.boxShadow
      ? 'none'
      : '0px 3px 5px ' + props.theme.dark.colors.secondary};
  color: ${(props) =>
    props.color
      ? props.theme[props.color].colors.tertiary
      : props.theme.sepia.colors.tertiary};
  cursor: ${(props) => (props.cursor ? props.cursor : 'pointer')};
  display: ${(props) => (props.display ? props.display : 'flex')};
  flex-flow: ${(props) => (props.flexFlow ? props.flexFlow : 'row nowrap')};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : '700')};
  font-size: ${(props) => (props.fontSize ? props.fontSize : '120%')};
  font-family: ${(props) =>
    props.fontFamily ? props.fontFamily : props.theme.fonts.primary};
  height: ${(props) => (props.height ? props.height : 'auto')};
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : 'center'};
  margin: ${(props) => (props.margin ? props.margin : '0.2rem 1rem')};
  opacity: ${(props) => (props.opacity ? props.opacity : '1')};
  outline: none;
  padding: ${(props) => (props.padding ? props.padding : '0.8rem 1.2rem')};
  position: ${(props) => (props.position ? props.position : 'inherit')};
  top: ${(props) => (props.top ? props.top : 'inherit')};
  bottom: ${(props) => (props.bottom ? props.bottom : 'inherit')};
  text-align: ${(props) => (props.textAlign ? props.textAlign : 'center')};
  width: ${(props) => (props.width ? props.width : '60%')};
`;

export default Button;
