import React, {useState} from 'react';
import {View, TouchableOpacity, Text, Modal, StyleSheet} from 'react-native';

import Colors from '../../../styles/Colors';

const NewEntryCategoryPicker = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View>
      <TouchableOpacity
        style={styles.pickerButton}
        onPress={() => {
          setModalVisible(true);
        }}>
        <Text style={styles.pickerButtonText}>Alimentação</Text>
      </TouchableOpacity>
      <Modal animationType="slide" transparent={false} visible={modalVisible} >

        <Text>Modal</Text>

        <TouchableOpacity
          style={styles.closeModal}
          onPress={() => {
            setModalVisible(false);
          }}>
          <Text>Fechar</Text>
        </TouchableOpacity>
      </Modal>
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
  closeModal: {
    paddingTop: 60,
  },
});

export default NewEntryCategoryPicker;
