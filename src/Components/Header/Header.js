import React from 'react';
import styled from 'styled-components';

import {
  RiBarChartHorizontalLine,
  RiArrowLeftLine,
  RiUserLine,
  RiMoreLine,
} from 'react-icons/ri';

import { Title } from '../Styles';

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
  padding: 0% 0% 0.5rem;
  width: 100%;
  a {
    color: ${(props) =>
      props.color
        ? props.theme[props.color].colors.tertiary
        : props.theme.light.colors.tertiary};
    text-decoration: none;
  }
  svg {
    cursor: pointer;
  }
`;

function Header({ history, title }) {
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
        <Icons>
          <RiBarChartHorizontalLine />
          <RiUserLine />
        </Icons>
      )}

      <Title>{title}</Title>
    </Head>
  );
}

export default Header;
