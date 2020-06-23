import React from 'react';
import styled from 'styled-components';

import { RiCopyrightLine } from 'react-icons/ri';

import { Title } from '../Styles';

const Food = styled.footer`
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
  align-items: center;
  background: transparent;
  color: ${(props) =>
    props.color
      ? props.theme[props.color].colors.tertiary
      : props.theme.light.colors.tertiary};
  display: flex;
  flex-flow: row nowrap;
  font-size: 120%;
  justify-content: center;
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
    margin-left: 0.5rem;
  }
`;

function getYear() {
  return new Date().getFullYear();
}

function Footer({ title }) {
  return (
    <Food>
      <Title>{title}</Title>
      <Icons>
        <RiCopyrightLine /> {getYear()}
      </Icons>
    </Food>
  );
}

export default Footer;
