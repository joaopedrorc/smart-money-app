import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {TextInputMask} from 'react-native-masked-text';
import Colors from '../../../styles/Colors';

const NewEntryInput = ({value, onChangeValue}) => {
  return (
    <View>
      <TextInputMask
        style={styles.input}
        type={'money'}
        options={{
          precision: 2,
          separator: ',',
          delimiter: '.',
          unit: '',
          suffixUnit: '',
        }}
        value={value}
        includeRawValueInChangeText={true}
        onChangeText={(maskedValue, rawValue) => {
          onChangeValue(rawValue);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: Colors.wetAsphalt,
    borderRadius: 15,
    marginHorizontal: 20,
    marginVertical: 10,
    paddingVertical: 15,
    fontSize: 30,
    color: Colors.white,
    textAlign: 'center',
  },
});

export default NewEntryInput;
