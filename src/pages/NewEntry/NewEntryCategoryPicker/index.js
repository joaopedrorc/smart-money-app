import React, {useState} from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';

import CategoryModal from '../../../components/CategoryModal';

import Colors from '../../../styles/Colors';

const NewEntryCategoryPicker = ({debit, category, onChangeCategory}) => {
  const [modalVisible, setModalVisible] = useState(false);

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
      <CategoryModal
        categoryType={debit ? 'debit' : 'credit'}
        isVisible={modalVisible}
        onConfirm={onCategoryPress}
        onCancel={onClosePress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
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
