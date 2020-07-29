import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';

import ActionFooter, {
  ActionPrimaryButton,
  ActionSecundaryButton,
} from '../../components/Core/ActionFooter';

import BalanceLabel from '../../components/BalanceLabel';
import NewEntryInput from '../NewEntry/NewEntryInput';
import NewEntryCategoryPicker from '../NewEntry/NewEntryCategoryPicker';
import NewEntryDatePicker from '../NewEntry/NewEntryDatePicker';
import NewEntryDeleteAction from '../NewEntry/NewEntryDeleteAction';

import {saveEntry} from '../../services/Entries';
import {deleteEntry} from '../../services/Entries';

import Colors from '../../styles/Colors';

const NewEntry = ({navigation}) => {
  const entry = navigation.getParam('entry', {
    id: null,
    amount: 0,
    entryAt: new Date(),
    category: {id: null, name: 'Selecione'},
  });

  const [debit, setDebit] = useState(entry.amount <= 0);
  const [amount, setAmount] = useState(entry.amount);
  const [category, setCategory] = useState(entry.category);
  const [entryAt, setEntryAt] = useState(entry.entryAt);

  const isValid = () => {
    if (parseFloat(amount) !== 0) {
      return true;
    }
    return false;
  };

  const onSave = () => {
    const data = {
      amount: parseFloat(amount),
      category: category,
      entryAt: entryAt,
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

      <View style={styles.formContainer}>
        <NewEntryInput
          value={amount}
          onChangeDebit={setDebit}
          onChangeValue={setAmount}
        />

        <NewEntryCategoryPicker
          debit={debit}
          category={category}
          onChangeCategory={setCategory}
        />

        <View style={styles.formActionConatainer}>
          <NewEntryDatePicker value={entryAt} onChange={setEntryAt} />
          <NewEntryDeleteAction entry={entry} onOkPress={onDelete} />
        </View>
      </View>

      <ActionFooter>
        <ActionPrimaryButton
          title={entry.id ? 'Salvar' : 'Adicionar'}
          onPress={() => {
            isValid() && onSave();
          }}
        />
        <ActionSecundaryButton title="Cancelar" onPress={onClose} />
      </ActionFooter>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgorund,
    paddingTop: 40,
  },
  formContainer: {
    flex: 1,
    paddingVertical: 20,
  },
  formActionConatainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 15,
  },
});

export default NewEntry;
