import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';

const EntrySummaryList = ({data}) => {
  return <View />;
  // <View>
  //   <FlatList
  //     data={data}
  //     renderItem={({item}) => (
  //       <Text style={styles.entry}>
  //         - {item.description} - {item.amount}
  //       </Text>
  //     )}
  //   />
  // </View>
  // );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
});

export default EntrySummaryList;
