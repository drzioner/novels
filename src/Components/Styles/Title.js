import styled from 'styled-components';

const Title = styled.h1`
  background: ${(props) =>
    props.background ? props.background : props.theme.light.colors.secondary};
  color: ${(props) =>
    props.color ? props.color : props.theme.light.colors.tertiary};
  display: flex;
  flex-flow: row nowrap;
  font-size: 120%;
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : 'space-between'};
  padding: ${(props) => (props.padding ? props.padding : '0% 30% 0.5rem 0')};
  margin: ${(props) => (props.margin ? props.margin : 'inherit')};
  text-transform: capitalize;
  text-align: ${(props) => (props.textAlign ? props.textAlign : 'inherit')};
  width: ${(props) => (props.width ? props.width : '70%')};
`;

export default Title;
