import React from 'react';
import styled from 'styled-components';
import useState from 'global-hook-store';

import { RiCloseLine } from 'react-icons/ri';

import { TitleNovel } from '../Styles';

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

function Menu({ title }) {
  const { actions } = useState(GlobalState);

  return (
    <LayoutMenu left>
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
      </ul>
    </LayoutMenu>
  );
}

export default Menu;
