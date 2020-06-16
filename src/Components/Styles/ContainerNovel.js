import styled from 'styled-components';

import { Container } from './';

const ContainerNovel = styled(Container)`
  align-items: ${(props) => (props.alignItems ? props.alignItems : 'inherit')};
  background: ${(props) =>
    props.background ? props.background : props.theme.light.colors.primary};
  border-radius: ${(props) => (props.borderRadius ? 'none' : '11px')};
  box-shadow: ${(props) =>
    props.boxShadow
      ? 'none'
      : '0px 3px 5px ' + props.theme.dark.colors.secondary};
  color: ${(props) =>
    props.color ? props.color : props.theme.light.colors.tertiary};
  display: flex;
  flex-flow: ${(props) => (props.flexFlow ? props.flexFlow : 'row nowrap')};
  font-size: ${(props) => (props.fontSize ? props.fontSize : '120%')};
  height: ${(props) => (props.height ? props.height : '100%')};
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : 'space-around'};
  margin: ${(props) => (props.margin ? props.margin : '0')};
  overflow: ${(props) => (props.overflow ? props.overflow : 'hidden')};
  padding: ${(props) => (props.padding ? props.padding : '0')};
  text-transform: capitalize;
  width: ${(props) => (props.width ? props.width : '100%')};
  a {
    color: ${(props) =>
      props.color ? props.color : props.theme.light.colors.tertiary};
    text-decoration: none;
    outline: none;
  }
  p {
    color: ${(props) =>
      props.color ? props.color : props.theme.light.colors.tertiary};
    font-size: ${(props) => (props.fontSizeP ? props.fontSizeP : '80%')};
    padding: ${(props) => (props.paddingP ? props.paddingP : '0 3%')};
  }
`;

export default ContainerNovel;
