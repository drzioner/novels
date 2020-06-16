import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaRegHeart } from 'react-icons/fa';

import { Container, Title } from '../Styles';
import Chip from '../Chip';

const ContainerNovel = styled(Container)`
  background: ${(props) =>
    props.background ? props.background : props.theme.dark.colors.primary};
  border-radius: 11px;
  box-shadow: ${(props) =>
    props.boxShadow
      ? props.boxShadow
      : '0px 3px 5px ' + props.theme.dark.colors.secondary};
  color: ${(props) =>
    props.color ? props.color : props.theme.dark.colors.tertiary};
  display: flex;
  flex-flow: column nowrap;
  font-size: 120%;
  height: ${(props) => (props.size ? '300px' : '400px')};
  justify-content: space-between;
  margin: 0;
  overflow: hidden;
  padding: 0;
  text-transform: capitalize;
  width: ${(props) => (props.size ? '200px' : '250px')};
`;

const ContainerShadow = styled(Container)`
  align-items: self-end;
  background: ${(props) =>
    props.background ? props.background : props.theme.dark.colors.primary};
  display: ${(props) => (props.display ? props.display : 'flex')};
  flex-flow: column nowrap;
  font-size: ${(props) =>
    props.fontSize ? props.fontSize : props.theme.fontSize.normal};
  height: 30%;
  justify-content: space-between;
  margin: 0;
  padding: 0% 5% 5%;
  text-transform: capitalize;
  width: 90%;
`;

const ContainerUp = styled(Container)`
  align-items: flex-start;
  background: transparent;
  color: ${(props) =>
    props.color ? props.color : props.theme.dark.colors.tertiary};
  display: flex;
  flex-flow: row nowrap;
  font-size: 120%;
  height: 100%;
  justify-content: flex-end;
  margin: 0;
  padding: 5% 5% 10%;
  text-transform: capitalize;
  width: 90%;
`;

const TitleNovel = styled(Title)`
  align-items: end;
  background: ${(props) =>
    props.background ? props.background : props.theme.dark.colors.secondary};
  color: ${(props) =>
    props.color ? props.color : props.theme.dark.colors.tertiary};
  height: 5%;
  margin: 0;
  margin-bottom: 0.5rem;
  padding: 10% 5% 10%;
  width: 90%;
  a {
    color: ${(props) =>
      props.color ? props.color : props.theme.dark.colors.tertiary};
    text-decoration: none;
  }
`;

function NovelCardVertical({
  nameNovel,
  coverAuthor,
  author,
  title,
  cover,
  visibility,
}) {
  return (
    <ContainerNovel size={visibility} background={'url(' + cover + ')'}>
      <ContainerUp>
        <FaRegHeart />
      </ContainerUp>
      <ContainerShadow
        display={visibility}
        background={
          'linear-gradient(rgba(5,5,5,0), rgba(5,5,5,0.2),rgba(5,5,5,0.4))'
        }>
        <TitleNovel background={'transparent'}>
          <Link to={'/novel/' + nameNovel}>{title}</Link>
        </TitleNovel>
        <Chip image={coverAuthor} author={author} />
      </ContainerShadow>
    </ContainerNovel>
  );
}

export default NovelCardVertical;
