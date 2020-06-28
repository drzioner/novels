import React from 'react';
import styled from 'styled-components';
import useState from 'global-hook-store';
import { Base64 } from 'js-base64';
import { RiCopyrightLine } from 'react-icons/ri';

import { Button, Container, Form, Title } from '../../Components/Styles';

import { InputForm } from '../../Components/Form';

import GlobalState from '../../Components/GlobalState';

const ContainerSingIn = styled(Container)`
  align-items: center;
  background: ${(props) =>
    props.color
      ? props.theme[props.color].colors.secondary
      : props.theme.light.colors.secondary};
  color: ${(props) =>
    props.color
      ? props.theme[props.color].colors.tertiary
      : props.theme.sepia.colors.tertiary};
  justify-content: flex-end;
`;

const Icons = styled.div`
  align-items: center;
  background: transparent;
  display: flex;
  flex-flow: row nowrap;
  font-size: 90%;
  justify-content: center;
  padding: 0% 0% 0.5rem;
  width: 100%;
  a {
    text-decoration: none;
  }
  svg {
    margin: 0;
    margin-right: 0.2rem;
  }
`;

function SingIn() {
  const { state, setState } = useState(GlobalState);

  async function singIn(user, pass) {
    await fetch('https://drstudios.tech/novels/api/novels/users/login', {
      method: 'POST',
      mode: 'cors',
      body: 'user=' + user + '&pass=' + pass,
      headers: {
        'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
        Authorization: 'login',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        localStorage.setItem('auth', data.response.data.token);
        localStorage.setItem(
          'user',
          Base64.encode(JSON.stringify(data.response.data)),
        );
        setState({
          ...state,
          auth: data.response.data.token,
          user: data.response.data,
        });
      })
      .catch((err) => {});
  }

  function getYear() {
    return new Date().getFullYear();
  }

  function setField(e) {
    e.preventDefault();

    const username = document.querySelector('#username').value;
    const password = document.querySelector('#password').value;

    if (password && username) {
      singIn(username, password);
    }
  }

  return (
    <ContainerSingIn
      alignItems={'center'}
      flexFlow={'column'}
      height={'100vh'}
      margin={'0'}
      padding={'0'}
      width={'100vw'}>
      <div>
        <Title
          color={'inherit'}
          justifyContent={'center'}
          margin={'0'}
          padding={'0 10%'}
          textAlign={'center'}
          width={'80%'}>
          Mundos impensables, mentes brillantes
        </Title>
      </div>

      <Form margin={' 2rem 0 5rem 0'}>
        <InputForm placeholder={'Usuario'} type={'text'} id={'username'} />
        <InputForm
          placeholder={'Contraseña'}
          type={'password'}
          id={'password'}
        />
        <Button margin={'1.2rem 1rem 0.2rem'} onClick={(e) => setField(e)}>
          Iniciar sesion
        </Button>
      </Form>

      <div>
        <Title
          color={'inherit'}
          justifyContent={'center'}
          margin={'0'}
          padding={'0'}
          textAlign={'center'}
          width={'100%'}>
          Novels
        </Title>
        <Icons>
          <RiCopyrightLine /> {getYear()}
        </Icons>
      </div>
    </ContainerSingIn>
  );
}

export default SingIn;
