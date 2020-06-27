import React from 'react';
import styled from 'styled-components';
import useState from 'global-hook-store';

import { RiCloseLine } from 'react-icons/ri';

import { Button, TitleNovel } from '../Styles';

import GlobalState from '../GlobalState';

const Nav = styled.nav`
  background: ${(props) =>
    props.color
      ? props.theme[props.color].colors.secondary
      : props.theme.light.colors.primary};
  color: ${(props) =>
    props.color
      ? props.theme[props.color].colors.tertiary
      : props.theme.light.colors.tertiary};
  display: flex;
  flex-flow: column nowrap;
  font-size: 120%;
  padding: 2rem 10% 0.5rem;
  height: 100vh;
  position: absolute;
  top: 0;
  transition: all 350ms;
  width: 80%;
  z-index: 20;

  ${(props) =>
    props.left
      ? {
          left: props.showMenu ? '0' : '-100%',
        }
      : {
          right: props.showMenu ? '0' : '-100%',
        }};
  ul {
    font-size: 90%;
    height: 100%;
    list-style: none;
    padding: 0;
    li {
      font-size: 90%;
    }
  }
`;

const Icons = styled.div`
  background: transparent;
  color: ${(props) =>
    props.color
      ? props.theme[props.color].colors.tertiary
      : props.theme.light.colors.tertiary};
  display: flex;
  flex-flow: row nowrap;
  font-size: 120%;
  justify-content: space-between;
  outline: none;
  padding: 0% 0% 0.5rem;
  width: 100%;

  a {
    color: ${(props) =>
      props.color
        ? props.theme[props.color].colors.tertiary
        : props.theme.light.colors.tertiary};
    outline: none;
    text-decoration: none;
  }
  svg {
    cursor: pointer;
    font-size: 130%;
    outline: none;
  }
`;

function Menu({ title }) {
  const { actions, state } = useState(GlobalState);

  return (
    <Nav left showMenu={state.showMenu}>
      <Icons>
        <TitleNovel background={'transparent'} fontSize={'90%'} margin={'0'}>
          {title}
        </TitleNovel>
        <RiCloseLine onClick={() => actions.setShowMenu()} />
      </Icons>
      <ul>
        <li>un item</li>
        <li>un item</li>
        <li>un item</li>
        <li>un item</li>
        <li>
          <Button
            bottom={'5rem'}
            fontSize={'80%'}
            position={'absolute'}
            onClick={() => actions.logout()}>
            Cerrar sesion
          </Button>
        </li>
      </ul>
    </Nav>
  );
}

export default Menu;
