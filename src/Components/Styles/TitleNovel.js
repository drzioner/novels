import styled from 'styled-components';

import { Title } from '.';

const TitleNovel = styled(Title)`
  align-items: ${(props) => (props.alignItems ? props.alignItems : 'end')};
  background: ${(props) =>
    props.background ? props.background : props.theme.light.colors.secondary};
  color: ${(props) =>
    props.color ? props.color : props.theme.light.colors.tertiary};
  font-size: ${(props) => (props.fontSize ? props.fontSize : '120%')};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : '700')};
  height: auto;
  margin: 0 0 0.5rem 3%;
  padding: 0%;
  text-align: ${(props) => (props.textAlign ? props.textAlign : 'inherit')};
  width: 100%;
  a {
    color: ${(props) =>
      props.color ? props.color : props.theme.light.colors.tertiary};
    text-decoration: none;
  }
`;

export default TitleNovel;
