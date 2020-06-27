import React from 'react';
import Carousel from '@brainhubeu/react-carousel';
import styled from 'styled-components';
import useState from 'global-hook-store';

import '@brainhubeu/react-carousel/lib/style.css';

import GlobalState from '../GlobalState';

import NovelCardVertical from '../NovelCardVertical';

import { useFetch } from '../../Hooks';

const CarouselNovel = styled(Carousel)`
  .BrainhubCarouselItem {
    max-width: auto !important;
    min-width: auto !important;
    padding-bottom: 0.5rem;
  }
`;

function NovelCarousel() {
  const { state } = useState(GlobalState);

  const config = new Request(
    'https://drstudios.tech/novels/api/novels/slider',
    {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        Authorization: state.auth,
      },
    },
  );

  useFetch(config, 'covers');

  return (
    <CarouselNovel
      infinite
      slidesPerPage={2}
      autoPlay={4000}
      animationSpeed={1000}
      breakpoints={{
        680: {
          slidesPerPage: 1,
          arrows: false,
        },
        900: {
          slidesPerPage: 2,
          arrows: false,
        },
        1300: {
          slidesPerPage: 3,
          arrows: false,
        },
      }}>
      {state.covers !== [] ? (
        state.novels.map((novel) => {
          const { id, title, cover, nameNovel, author, coverAuthor } = novel;

          return (
            <NovelCardVertical
              key={id}
              author={author}
              coverAuthor={coverAuthor}
              title={title}
              cover={cover}
              nameNovel={nameNovel}
            />
          );
        })
      ) : (
        <div>Cargando...</div>
      )}
    </CarouselNovel>
  );
}

export default NovelCarousel;
