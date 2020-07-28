import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import Colors from '../../styles/Colors';

const BalanceLabel = () => {
  const currentBalance = 1500.0;

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Saldo Atual</Text>

      <LinearGradient
        style={styles.panel}
        colors={[Colors.amethyst, Colors.peterRiver]}>
        <Text style={styles.value}>{currentBalance}</Text>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  label: {
    fontSize: 15,
    color: Colors.white,
  },
  panel: {
    borderRadius: 10,
    paddingHorizontal: 50,
    paddingVertical: 10,
    marginVertical: 10,
  },
  value: {
    fontSize: 28,
    color: Colors.white,
  },
});

export default BalanceLabel;
