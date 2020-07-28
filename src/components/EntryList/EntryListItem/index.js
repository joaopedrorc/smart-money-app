import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';

import Svg, {Circle, Rect} from 'react-native-svg';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Colors from '../../../styles/Colors';

const EntryListItem = ({entry, isFistItem, isLastItem, onEntryPress}) => {
  const bulletLineY = isFistItem ? 25 : 0;
  const bulletLineHeight = isLastItem ? 25 : 50;
  const showBulletLine = !(isFistItem && isLastItem);
  const bulletColor = Colors.white;

  return (
    <TouchableOpacity
      onPress={() => {
        onEntryPress && onEntryPress(entry);
      }}>
      <View style={styles.container}>
        <View style={styles.bullet}>
          <Svg height="50" width="30">
            {showBulletLine && (
              <Rect
                x="9"
                y={bulletLineY}
                width="1.5"
                height={bulletLineHeight}
                fill={Colors.backgorund}
              />
            )}

            <Circle
              cx="10"
              cy="25"
              r={8}
              stroke={Colors.backgorund}
              strokeWidth="1.5"
              fill={bulletColor}
            />
          </Svg>
        </View>

        <View style={styles.description}>
          <Text style={styles.descriptionText}>{entry.description}</Text>

          <View style={styles.details}>
            <Icon style={styles.entryAtIcon} name="schedule" size={15} />
            <Text style={styles.entryAtText}>{entry.entryAt.toString()}</Text>

            {entry.adress && (
              <>
                <Icon style={styles.adressIcon} name="pin-drop" size={15} />
                <Text style={styles.adressText}>{entry.adress}</Text>
              </>
            )}
          </View>
        </View>

        <View style={styles.amount}>
          <Text style={styles.amountText}>$10</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  bullet: {},
  description: {
    flex: 1,
    justifyContent: 'center',
  },
  descriptionText: {
    fontSize: 14,
    color: Colors.white,
  },
  details: {
    flexDirection: 'row',
  },
  entryAtIcon: {
    color: Colors.concrete,
    marginRight: 2,
  },
  entryAtText: {
    color: Colors.concrete,
    fontSize: 12,
  },
  adressIcon: {
    color: Colors.concrete,
    marginRight: 2,
    marginLeft: 5,
  },
  adressText: {
    color: Colors.concrete,
    fontSize: 12,
  },
  amount: {
    justifyContent: 'center',
  },
  amountText: {
    fontSize: 14,
    color: Colors.white,
    fontWeight: 'bold',
  },
});

export default EntryListItem;
