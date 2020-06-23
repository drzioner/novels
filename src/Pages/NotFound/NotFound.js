import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { Button, Container } from '../../Components/Styles';

const ContainerNoFound = styled(Container)`
  background: ${(props) =>
    props.color
      ? props.theme[props.color].colors.secondary
      : props.theme.light.colors.secondary};
  color: ${(props) =>
    props.color
      ? props.theme[props.color].colors.tertiary
      : props.theme.sepia.colors.tertiary};
`;

function NotFound() {
  return (
    <ContainerNoFound
      alignItems={'center'}
      flexFlow={'column'}
      height={'100vh'}
      margin={'0'}
      padding={'0'}
      width={'100vw'}>
      <h2>Error 404</h2>
      <span>pagina no encontrada</span>
      <br />
      <br />
      <Link to="/">
        <Button>Home</Button>
      </Link>
    </ContainerNoFound>
  );
}

export default NotFound;
