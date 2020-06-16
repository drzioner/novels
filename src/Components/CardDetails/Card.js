import React from 'react';
import styled from 'styled-components';

import { Container, ContainerNovel, Title, TitleNovel } from '../Styles';

const ContainerCard = styled(Container)`
  margin: 4% 0 0;
  padding: 0;
  user-select: none;
  width: 100%;
  p {
    font-family: 'Open sans';
    font-kerning: normal;
    font-size: 100%;
    letter-spacing: normal;
    line-height: 1.7;
    margin-top: 0;
  }
`;

function Card({ title, data, background, chapters }) {
  return (
    <>
      {background ? (
        <ContainerNovel
          alignItems={'center'}
          boxShadow
          flexFlow={'column'}
          height={'auto'}
          margin={'0'}
          padding={'5%'}
          paddingP={'0'}
          width={'100%'}>
          <TitleNovel
            background={'transparent'}
            fontSize={'100%'}
            justifyContent={'center'}
            margin={'0'}
            padding={'0'}
            width={'100%'}>
            {title}
          </TitleNovel>
          <p>Capitulos</p>
          <TitleNovel
            background={'transparent'}
            fontSize={'100%'}
            justifyContent={'center'}
            margin={'0 !important'}
            padding={'0'}
            width={'100%'}>
            {Object(chapters).length}
          </TitleNovel>
        </ContainerNovel>
      ) : (
        <ContainerCard>
          <Title margin={'4% 0 0'} padding={'0'}>
            {title}
          </Title>
          <p>{data}</p>
        </ContainerCard>
      )}
    </>
  );
}

export default Card;
