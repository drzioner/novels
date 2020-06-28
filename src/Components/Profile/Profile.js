import React from 'react';
import styled from 'styled-components';
import useState from 'global-hook-store';

import { RiCloseLine } from 'react-icons/ri';

import { Button, TitleNovel } from '../Styles';

import GlobalState from '../GlobalState';

import LayoutMenu from '../LayoutMenu';

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

function Profile() {
  const { actions, state } = useState(GlobalState);

  const { username } = state.user;

  return (
    <LayoutMenu>
      <Icons>
        <TitleNovel background={'transparent'} fontSize={'90%'} margin={'0'}>
          {username}
        </TitleNovel>
        <RiCloseLine onClick={() => actions.setShowProfile()} />
      </Icons>
      <ul>
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
    </LayoutMenu>
  );
}

export default Profile;
