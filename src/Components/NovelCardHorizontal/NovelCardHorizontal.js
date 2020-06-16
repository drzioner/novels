import React from 'react';
import { Link } from 'react-router-dom';

import { ContainerNovel, TitleNovel } from '../Styles';
import Chip from '../Chip';

function NovelCardHorizontal({ title, cover, nameNovel, coverAuthor, author }) {
  return (
    <ContainerNovel
      alignItems={'center'}
      boxShadow
      margin={'0.3rem 0'}
      padding={'5%'}>
      <Link to={'/novel/' + nameNovel}>
        <ContainerNovel
          background={'url(' + cover + ')'}
          height={'100px !important'}
          margin={'0 0.5rem 0 0'}
          width={'100px !important'}></ContainerNovel>
      </Link>
      <ContainerNovel
        alignItems={'baseline'}
        background={'transparent'}
        boxShadow
        flexFlow={'column nowrap'}
        height={'70%'}
        overflow={'inherit'}
        width={'80%'}>
        <TitleNovel
          background={'transparent'}
          fontSize={
            title.length < 30
              ? title.length < 25
                ? title.length < 20
                  ? title.length < 15
                    ? title.length < 6
                      ? '100%'
                      : '80%'
                    : '70%'
                  : '65%'
                : '60%'
              : '55%'
          }>
          <Link to={'/novel/' + nameNovel}>{title}</Link>
        </TitleNovel>
        <TitleNovel background={'transparent'} fontSize={'50%'}>
          webnovel
        </TitleNovel>
        <Chip colorChip={'black'} image={coverAuthor} author={author} />
      </ContainerNovel>
    </ContainerNovel>
  );
}

export default NovelCardHorizontal;
