import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
// import Icon from 'react-native-vector-icons/MaterialIcons';

import BalancePanelLabel from './BalancePanelLabel';
import BalancePanelChart from './BalancePanelChart';

import Colors from '../../styles/Colors';

const BalancePanel = ({currentBalance}) => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[Colors.amethyst, Colors.peterRiver]}
        style={styles.panel}>
        <BalancePanelLabel currentBalance={currentBalance} />
        <BalancePanelChart />
      </LinearGradient>
      <TouchableOpacity style={styles.button}>
        <Text>+</Text>
        {/* <Icon name="add" size={30} color={Colors.white} /> */}
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
    marginTop: -25,
    marginRight: 10,
    width: 50,
    height: 50,
  },
});

export default BalancePanel;
