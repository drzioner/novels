import React from 'react';

import { Container } from '../Styles';

import Header from '../Header';
import NovelCarousel from '../NovelCarousel';
import NovelList from '../NovelList';

function Home() {
  return (
    <>
      <Header title={'Novels'} />
      <Container margin={'0'} padding={'0.5rem 10% 1.2rem'}>
        <NovelCarousel />
        <NovelList title={'Mas vistos'} />
      </Container>
    </>
  );
}

export default Home;
