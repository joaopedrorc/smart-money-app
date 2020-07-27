import React from 'react';

import Container from '../Core/Container';

import EntrySummaryChart from './EntrySummaryChart';
import EntrySummaryList from './EntrySummaryList';

const entriesGruped = [
  {key: '1', description: 'Alimentação', amount: 'R$200'},
  {key: '2', description: 'Combustível', amount: 'R$20'},
  {key: '3', description: 'Aluguel', amount: 'R$500'},
  {key: '4', description: 'Lazer', amount: 'R$400'},
  {key: '5', description: 'Outros', amount: 'R$1.200'},
];

const EntrySummary = () => {
  return (
    <Container
    title="Categorias"
      actionLabelText="Últimos 7 dias"
      actionButtonText="Ver mais"
      onPressActionButton={() => {}}>
      <EntrySummaryChart />
      <EntrySummaryList entriesGruped={entriesGruped} />
    </Container>
  );
};

export default EntrySummary;
