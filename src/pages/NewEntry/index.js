import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet} from 'react-native';

import BalanceLabel from '../../components/BalanceLabel';
import NewEntryInput from '../NewEntry/NewEntryInput';

import {saveEntry} from '../../services/Entries';
import {deleteEntry} from '../../services/Entries';

import Colors from '../../styles/Colors';

const NewEntry = ({navigation}) => {
  const entry = navigation.getParam('entry', {
    id: null,
    amount: '0.00',
    entryAt: new Date(),
  });

  const [amount, setAmount] = useState(entry.amount);

  const isValid = () => {
    if (parseFloat(amount) !== 0) {
      return true;
    }
    return false;
  };

  const onSave = () => {
    const data = {
      amount: parseFloat(amount),
    };
    console.log('NewEntry :: save: ', data);
    saveEntry(data, entry);
    onClose();
  };

  const onClose = () => {
    navigation.goBack();
  };

  const onDelete = () => {
    deleteEntry(entry);
    onClose();
  };

  return (
    <View style={styles.container}>
      <BalanceLabel />

      <View>
        <NewEntryInput value={amount} onChangeValue={setAmount} />

        <TextInput style={styles.input} />
        <Button title="GPS" />
        <Button title="Camera" />
      </View>

      <View>
        <Button
          title="Adicionar"
          onPress={() => {
            isValid() && onSave();
          }}
        />
        <Button title="Excluir" onPress={onDelete} />
        <Button title="Cancelar" onPress={onClose} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgorund,
    paddingTop: 40,
  },
  input: {
    borderColor: '#000',
    borderWidth: 1,
  },
});

export default NewEntry;
