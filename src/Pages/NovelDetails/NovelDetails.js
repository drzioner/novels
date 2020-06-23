import React from 'react';
import { useParams, useHistory } from 'react-router-dom';

import { Container } from '../../Components/Styles';

import Header from '../../Components/Header';
import NovelCardVertical from '../../Components/NovelCardVertical';
import CardDetails from '../../Components/CardDetails';

import { useFetch } from '../../Hooks';

function NovelDetails() {
  const history = useHistory();

  const { novelName } = useParams();
  const { data } = useFetch(
    new Request('https://drstudios.tech/novels/api/novels/' + novelName, {
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
      <Header history={history} title={response.data.title} />
      {response.data !== false && response.data !== undefined ? (
        <Container margin={'0'} padding={'0.5rem 10% 1.2rem'}>
          <NovelCardVertical
            title={response.data.title}
            cover={response.data.cover}
            id={response.data.id}
            visibility={'none'}
          />
          <CardDetails dataNovel={response.data} />
        </Container>
      ) : (
        <Container margin={'0'} padding={'0.5rem 10% 1.2rem'}>
          'Cargando...'
        </Container>
      )}
    </>
  );
}

export default NovelDetails;
