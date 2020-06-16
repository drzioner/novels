import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { Container } from '../Styles';

const ContainerChip = styled(Container)`
  align-items: center;
  background: transparent;
  border-radius: 30px;
  color: ${(props) =>
    props.colorChip ? props.colorChip : props.theme.dark.colors.tertiary};
  display: flex;
  flex-flow: row nowrap;
  font-size: 60%;
  height: 100%;
  justify-content: flex-start;
  margin-top: ${(props) => (props.colorChip ? '0.4rem' : '.9rem')};
  padding: 0 5%;
  text-transform: lowercase;
  width: max-content;
  a {
    align-items: center;
    color: ${(props) =>
      props.colorChip ? props.colorChip : props.theme.dark.colors.tertiary};
    display: flex;
    margin: 0;
    padding: 0;
    text-decoration: none;
  }
  @media (max-width: 720px) {
    font-size: ${(props) => (props.colorChip ? '50%' : '60%')};
  }
`;

const ImgChip = styled.img`
  border-radius: 50%;
  height: 20px;
  margin: 0;
  margin-right: 0.3rem;
  padding: 0;
  width: 20px;
  @media (max-width: 720px) {
    height: ${(props) => (props.colorChip ? '15px' : '20px')};
    width: ${(props) => (props.colorChip ? '15px' : '20px')};
  }
`;

function Chip({ author, image, colorChip }) {
  return (
    <ContainerChip colorChip={colorChip}>
      <Link to={'/autor/' + author}>
        <ImgChip colorChip={colorChip} src={image} />
      </Link>
      <Link to={'/autor/' + author}>{author}</Link>
    </ContainerChip>
  );
}

export default Chip;
