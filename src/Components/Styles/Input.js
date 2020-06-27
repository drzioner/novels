import styled from 'styled-components';

const Input = styled.input`
  background: ${(props) =>
    props.color
      ? props.theme[props.color].colors.secondary
      : props.theme.light.colors.secondary};
  border: ${(props) =>
    props.border
      ? props.border
      : '2px solid ' + props.theme.sepia.colors.tertiary};
  border-radius: ${(props) =>
    props.borderRadius ? props.borderRadius : '8px'};
  color: ${(props) =>
    props.color
      ? props.theme[props.color].colors.tertiary
      : props.theme.sepia.colors.tertiary};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : '400')};
  font-size: 100%;
  font-family: ${(props) =>
    props.fontFamily ? props.fontFamily : props.theme.fonts.primary};
  margin: ${(props) => (props.margin ? props.margin : '0.5rem 1rem')};
  outline: none;
  padding: ${(props) => (props.padding ? props.padding : '0.8rem 1.2rem')};
  transition: all 300ms;
  width: ${(props) => (props.width ? props.width : '60%')};
`;

export default Input;
