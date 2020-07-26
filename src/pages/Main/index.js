import React from 'react';
import {View, Button, StyleSheet} from 'react-native';

import BalancePanel from '../../components/BalancePanel';
import EntrySummary from '../../components/EntrySummary';
import EntryList from '../../components/EntryList';

const Main = ({navigation}) => {
  const currentBalance = 1500.0;

  const entriesGruped = [
    {key: '1', description: 'Alimentação', amount: 'R$200'},
    {key: '2', description: 'Combustível', amount: 'R$20'},
    {key: '3', description: 'Aluguel', amount: 'R$500'},
    {key: '4', description: 'Lazer', amount: 'R$400'},
    {key: '5', description: 'Outros', amount: 'R$1.200'},
  ];

  return (
    <View style={styles.container}>
      <BalancePanel currentBalance={currentBalance} />
      <Button
        title="Adicionar"
        onPress={() => navigation.navigate('NewEntry')}
      />
      <EntrySummary entriesGruped={entriesGruped} />
      <EntryList navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
  },
});

export default Main;
