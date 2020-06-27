import styled from 'styled-components';

const Form = styled.form`
  align-content: ${(props) =>
    props.alignContent ? props.alignContent : 'center'};
  align-items: ${(props) => (props.alignItems ? props.alignItems : 'center')};
  background: ${(props) =>
    props.background ? props.background : 'transparent'};
  border-radius: ${(props) =>
    props.borderRadius ? props.borderRadius : 'none'};
  box-shadow: ${(props) => (props.boxShadow ? props.boxShadow : 'none')};
  color: ${(props) =>
    props.color ? props.color : props.theme.light.colors.tertiary};
  display: flex;
  flex-flow: ${(props) => (props.flexFlow ? props.flexFlow : 'column nowrap')};
  height: ${(props) => (props.height ? props.height : 'auto')};
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : 'center'};
  margin: ${(props) => (props.margin ? props.margin : '0 0 1rem 0')};
  opacity: ${(props) => (props.opacity ? props.opacity : '1')};
  outline: none;
  padding: ${(props) => (props.padding ? props.padding : '0.5rem 10%')};
  text-align: ${(props) => (props.textAlign ? props.textAlign : 'inherit')};
  width: ${(props) => (props.width ? props.width : '80%')};
  a {
    background: ${(props) =>
      props.background ? props.background : 'transparent'};
    color: ${(props) =>
      props.color ? props.color : props.theme.dark.colors.tertiary};
    text-decoration: none;
  }
`;

export default Form;
