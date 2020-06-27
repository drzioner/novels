import React from 'react';
import styled from 'styled-components';
import useState from 'global-hook-store';

import { Title } from '../Styles';

import GlobalState from '../GlobalState';

import NovelCardHorizontal from '../NovelCardHorizontal';

import { useFetch } from '../../Hooks';

const TitleList = styled(Title)`
  margin-top: 2rem;
`;

function NovelList({ title }) {
  const { state } = useState(GlobalState);
  const config = new Request('https://drstudios.tech/novels/api/novels', {
    method: 'GET',
    mode: 'cors',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
      Authorization: state.auth,
    },
  });

  useFetch(config, 'novels');

  return (
    <>
      <TitleList>{title}</TitleList>
      {state.novels !== [] ? (
        state.novels.map((novel) => {
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
