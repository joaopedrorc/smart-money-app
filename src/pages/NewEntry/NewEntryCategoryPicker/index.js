import React, {useState, useEffect} from 'react';
import {
  View,
  TouchableOpacity,
  Modal,
  FlatList,
  Text,
  StyleSheet,
} from 'react-native';

import ActionFooter, {
  ActionPrimaryButton,
  ActionSecundaryButton,
} from '../../../components/Core/ActionFooter';

import {
  getDebitCategories,
  getCreditCategories,
} from '../../../services/Categories';

import Colors from '../../../styles/Colors';

const NewEntryCategoryPicker = ({debit, category, onChangeCategory}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [debitCategories, setDebitCategories] = useState([]);
  const [creditCategories, setCreditCategories] = useState([]);

  useEffect(() => {
    async function loadCategories() {
      setDebitCategories(await getDebitCategories());
      setCreditCategories(await getCreditCategories());
    }

    loadCategories();

    console.log('NewEntryCategoryPicker :: useEffect');
  }, []);

  const onCategoryPress = (item) => {
    onChangeCategory(item);
    onClosePress();
  };

  const onClosePress = () => {
    setModalVisible(false);
  };

  return (
    <View>
      <TouchableOpacity
        style={styles.pickerButton}
        onPress={() => {
          setModalVisible(true);
        }}>
        <Text style={styles.pickerButtonText}>{category.name}</Text>
      </TouchableOpacity>

      <Modal animationType="slide" transparent={false} visible={modalVisible}>
        <View style={styles.modal}>
          <FlatList
            style={styles.flatList}
            data={debit ? debitCategories : creditCategories}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => (
              <TouchableOpacity
                onPress={() => onCategoryPress(item)}
                style={styles.modalItem}>
                <Text style={[styles.modalItemText, {color: item.color}]}>
                  {item.name}
                </Text>
              </TouchableOpacity>
            )}
          />

          <ActionFooter>
            <ActionPrimaryButton title="Fechar" onPress={onClosePress} />
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
  pickerButton: {
    backgroundColor: Colors.wetAsphalt,
    borderRadius: 15,
    marginVertical: 10,
    marginHorizontal: 20,
    padding: 20,
  },
  pickerButtonText: {
    fontSize: 26,
    color: Colors.white,
    textAlign: 'center',
  },
  flatList: {
    // borderWidth: 1,
    marginTop: 38,
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
  closeModal: {
    borderWidth: 1,
    borderColor: Colors.secondary,
    borderRadius: 15,
    alignSelf: 'center',
    marginVertical: 10,
    marginHorizontal: 20,
    padding: 15,
    marginBottom: 30,
  },
  closeModalText: {
    fontSize: 22,
    color: Colors.secondary,
    textAlign: 'center',
  },
});

export default NewEntryCategoryPicker;
