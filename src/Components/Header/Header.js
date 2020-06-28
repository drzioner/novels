import React from 'react';
import styled from 'styled-components';
import useState from 'global-hook-store';

import {
  RiBarChartHorizontalLine,
  RiArrowLeftLine,
  RiUserLine,
  RiMoreLine,
} from 'react-icons/ri';

import GlobalState from '../GlobalState';

import { Title } from '../Styles';

import Menu from '../Menu';
import Profile from '../Profile';

const Head = styled.header`
  background: ${(props) =>
    props.color
      ? props.theme[props.color].colors.secondary
      : props.theme.light.colors.secondary};
  color: ${(props) =>
    props.color
      ? props.theme[props.color].colors.tertiary
      : props.theme.light.colors.tertiary};
  display: flex;
  flex-flow: column nowrap;
  font-size: 120%;
  padding: 2rem 10% 0.5rem;
  position: sticky;
  top: 0;
  width: 80%;
  z-index: 10;
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
    outline: none;
  }
`;

function Header({ history, title }) {
  const { actions } = useState(GlobalState);

  function handleClick() {
    history.goBack();
  }

  return (
    <Head>
      {history ? (
        <Icons>
          <RiArrowLeftLine onClick={handleClick} />
          <RiMoreLine />
        </Icons>
      ) : (
        <>
          <Menu title={'Novels'} />
          <Profile />
          <Icons>
            <RiBarChartHorizontalLine onClick={() => actions.setShowMenu()} />
            <RiUserLine onClick={() => actions.setShowProfile()} />
          </Icons>
        </>
      )}

      <Title>{title}</Title>
    </Head>
  );
}

export default Header;
