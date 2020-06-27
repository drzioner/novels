import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import useState from 'global-hook-store';

import { Button, Container } from '../../Components/Styles';

import GlobalState from '../../Components/GlobalState';

import Header from '../../Components/Header';
import NovelCardVertical from '../../Components/NovelCardVertical';
import CardDetails from '../../Components/CardDetails';

import { useFetch } from '../../Hooks';

function NovelDetails() {
  const { state } = useState(GlobalState);
  const history = useHistory();
  const { novelName } = useParams();

  const config = new Request(
    'https://drstudios.tech/novels/api/novels/' + novelName,
    {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        Authorization: state.auth,
      },
    },
  );

  useFetch(config, 'novel');

  return (
    <>
      <Header history={history} title={state.novel.title} />
      {state.auth !== 'login' ? (
        <Container margin={'0'} padding={'0.5rem 10% 1.2rem'}>
          <NovelCardVertical
            title={state.novel.title}
            cover={state.novel.cover}
            id={state.novel.id}
            visibility={'none'}
          />
          <CardDetails dataNovel={state.novel} />
          <Container
            alignItems={'center'}
            margin={'0'}
            padding={'2.5rem 0%'}
            position={'fixed'}
            bottom={'0'}
            width={'100%'}>
            <Button fontSize={'90%'} margin={'0 0 1rem 0'} width={'40%'}>
              Leer novela
            </Button>
          </Container>
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
