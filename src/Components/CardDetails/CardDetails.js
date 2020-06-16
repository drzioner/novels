import React from 'react';
import styled from 'styled-components';

import { Container, Title } from '../Styles';

import Card from './Card';

const TitleCard = styled(Title)`
  font-weight: 400;
  justify-content: center;
  margin-top: 0;
  padding: 0;
  text-align: center;
  width: 100%;
`;

function CardDetails({ dataNovel }) {
  const { description, synopsis, alternativeTitles, chapters } = dataNovel;

  return (
    <Container margin={'4% 0 0'} padding={'0'} width={'100%'}>
      <TitleCard>{alternativeTitles}</TitleCard>
      <Card title={'Sinopsis'} data={synopsis} />
      <Card title={'Detalles'} data={synopsis} background chapters={chapters} />
      <Card title={'descripción'} data={description} />
    </Container>
  );
}

export default CardDetails;
