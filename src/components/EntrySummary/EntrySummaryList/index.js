import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';

const EntrySummaryList = ({entriesGruped}) => {
  return (
    <View>
      <FlatList
        data={entriesGruped}
        renderItem={({item}) => (
          <Text style={styles.entry}>
            - {item.description} - {item.amount}
          </Text>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
});

export default EntrySummaryList;
