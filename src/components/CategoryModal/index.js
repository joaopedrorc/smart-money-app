import React, {useEffect, useState} from 'react';
import {
  View,
  Modal,
  FlatList,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';

import ActionFooter, {
  ActionPrimaryButton,
} from '../../components/Core/ActionFooter';

import {
  getDebitCategories,
  getCreditCategories,
  getAllCategories,
} from '../../services/Categories';

import Colors from '../../styles/Colors';

const CategoryModal = ({categoryType, isVisible, onConfirm, onCancel}) => {
  const [debitCategories, setDebitCategories] = useState([]);
  const [creditCategories, setCreditCategories] = useState([]);
  const [allCategories, setAllCategories] = useState([]);

  useEffect(() => {
    async function loadCategories() {
      setDebitCategories(await getDebitCategories());
      setCreditCategories(await getCreditCategories());
      setAllCategories(await getAllCategories());
    }

    loadCategories();

    console.log('NewEntryCategoryPicker :: useEffect');
  }, []);

  return (
    <View>
      <Modal animationType="slide" transparent={false} visible={isVisible}>
        <View style={styles.modal}>
          <FlatList
            style={styles.flatList}
            data={
              categoryType === 'all'
                ? allCategories
                : categoryType === 'debit'
                ? debitCategories
                : creditCategories
            }
            keyExtractor={(item) => item.id}
            renderItem={({item}) => (
              <TouchableOpacity
                onPress={() => onConfirm(item)}
                style={styles.modalItem}>
                <Text style={[styles.modalItemText, {color: item.color}]}>
                  {item.name}
                </Text>
              </TouchableOpacity>
            )}
          />

          <ActionFooter>
            <ActionPrimaryButton title="Fechar" onPress={onCancel} />
          </ActionFooter>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    backgroundColor: Colors.backgorund,
  },
  modalItem: {
    backgroundColor: Colors.wetAsphalt,
    borderRadius: 15,
    marginVertical: 10,
    marginHorizontal: 20,
    padding: 20,
  },
  modalItemText: {
    color: Colors.white,
    fontSize: 26,
    textAlign: 'center',
  },
});

export default CategoryModal;
