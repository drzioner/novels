import React from 'react';

import { Container } from '../../Components/Styles';

import Header from '../../Components/Header';
import NovelCarousel from '../../Components/NovelCarousel';
import NovelList from '../../Components/NovelList';
import Footer from '../../Components/Footer';

function Home() {
  return (
    <>
      <Header title={'Novels'} />
      <Container margin={'0'} padding={'0.5rem 10% 1.2rem'}>
        <NovelCarousel />
        <NovelList title={'Mas vistos'} />
      </Container>
      <Footer title={'Novels'} />
    </>
  );
}

export default Home;
