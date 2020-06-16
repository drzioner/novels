import React from 'react';
import Carousel from '@brainhubeu/react-carousel';

import '@brainhubeu/react-carousel/lib/style.css';
import styled from 'styled-components';

import NovelCardVertical from '../NovelCardVertical';

import { useFetch } from '../../Hooks';

const CarouselNovel = styled(Carousel)`
  .BrainhubCarouselItem {
    max-width: auto !important;
    min-width: auto !important;
    padding-bottom: 0.5rem;
  }
`;

const config = new Request('https://drstudios.tech/novels/api/novels', {
  method: 'GET',
  mode: 'cors',
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
    Authorization: process.env.REACT_APP_TOKEN,
  },
});

function NovelCarousel() {
  const { data } = useFetch(config, []);

  const response =
    data.response !== undefined && data.response !== false
      ? data.response
      : { data: [] };

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
      {response.data !== false && response.data !== undefined ? (
        response.data.map((novel) => {
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
