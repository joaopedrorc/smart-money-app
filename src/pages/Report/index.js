import React from 'react';
import {View, Picker, Button} from 'react-native';

import EntrySummary from '../../components/EntrySummary';
import EntryList from '../../components/EntryList';
import BalanceLabel from '../../components/BalanceLabel';

const Report = ({navigation}) => {
  const currentBalance = 1500.0;

  const entriesGruped = [
    {key: '1', description: 'Alimentação', amount: 'R$200'},
    {key: '2', description: 'Combustível', amount: 'R$20'},
    {key: '3', description: 'Aluguel', amount: 'R$500'},
    {key: '4', description: 'Lazer', amount: 'R$400'},
    {key: '5', description: 'Outros', amount: 'R$1.200'},
  ];

  const entries = [
    {key: '1', description: 'Padaria', amount: 'R$500'},
    {key: '2', description: 'Supermercado', amount: 'R$400'},
    {key: '3', description: 'Posto', amount: 'R$1.200'},
  ];

  return (
    <View>
      <BalanceLabel currentBalance={currentBalance} />
      <View>
        <Picker>
          <Picker.Item label="Todas Categorias" />
        </Picker>
        <Picker>
          <Picker.Item label="Últimos 7 dias" />
        </Picker>
      </View>
      <EntrySummary entriesGruped={entriesGruped} />
      <EntryList entries={entries} />
      <View>
        <Button title="Salvar" onPress={() => navigation.goBack()}/>
        <Button title="Fechar" />
      </View>
    </View>
  );
};

export default Report;
