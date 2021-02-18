import * as React from 'react';
import { StyleSheet } from 'react-native';

import Tweet from "../components/Tweet";
import { Text, View } from '../components/Themed';

import tweets from "../data/tweets";

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Tweet tweet={tweets[0]}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
