import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';
Icon.loadFont();

import BalancePanelLabel from './BalancePanelLabel';
import BalancePanelChart from './BalancePanelChart';

import Colors from '../../styles/Colors';

const BalancePanel = ({onNewEntryPress}) => {
  const currentBalance = 1500.0;

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[Colors.amethyst, Colors.peterRiver]}
        style={styles.panel}>
        <BalancePanelLabel currentBalance={currentBalance} />
        <BalancePanelChart />
      </LinearGradient>
      <TouchableOpacity style={styles.button} onPress={onNewEntryPress}>
        <Icon name="add" size={30} color={Colors.white} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  panel: {
    paddingVertical: 10,
  },
  button: {
    backgroundColor: Colors.emerald,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
    width: 50,
    height: 50,
    shadowColor: Colors.black,
    elevation: 5,
    marginTop: -25,
    marginRight: 10,
  },
});

export default BalancePanel;
