import React, {useState} from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';

import DateTimePickerModal from 'react-native-modal-datetime-picker';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Colors from '../../../styles/Colors';

const NewEntryDatePicker = ({value, onChange}) => {
  const [modalVisible, setModalVisible] = useState(false);

  const onChangeValue = (date) => {
    onChange(date);
    onCancel();
  };

  const onCancel = () => {
    setModalVisible(false);
  };

  return (
    <View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => setModalVisible(true)}>
        <Icon name="today" size={30} color={Colors.white} />
        {/* <Text>NewEntryDatePicker</Text> */}
      </TouchableOpacity>

      <DateTimePickerModal
        mode="date"
        titleIOS="Data de vencimento"
        cancelTextIOS="Cancelar"
        confirmTextIOS="Ok"
        datePickerModeAndroid="calendar"
        date={value}
        isVisible={modalVisible}
        onConfirm={onChangeValue}
        onCancel={onCancel}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.wetAsphalt,
    height: 59,
    width: 59,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default NewEntryDatePicker;
