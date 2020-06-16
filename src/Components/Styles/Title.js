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
  padding: 0% 30% 0.5rem 0;
  text-transform: capitalize;
  width: 70%;
`;

export default Title;
