import React from 'react';
import styled from 'styled-components';

import { Title } from '../Styles';

import NovelCardHorizontal from '../NovelCardHorizontal';

import { useFetch } from '../../Hooks';

const TitleList = styled(Title)`
  margin-top: 2rem;
`;

function NovelList({ title }) {
  const { data } = useFetch(
    new Request('https://drstudios.tech/novels/api/novels', {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        Authorization: process.env.REACT_APP_TOKEN,
      },
    }),
    [],
  );

  const response =
    data.response !== undefined && data.response !== false
      ? data.response
      : { data: [] };

  return (
    <>
      <TitleList>{title}</TitleList>
      {response.data !== false && response.data !== undefined ? (
        response.data.map((novel) => {
          const { id, title, cover, author, coverAuthor, nameNovel } = novel;

          return (
            <NovelCardHorizontal
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
    </>
  );
}

export default NovelList;
