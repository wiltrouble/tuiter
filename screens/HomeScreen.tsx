import React from 'react';
import { StyleSheet } from 'react-native';

import Tweet from "../components/Tweet";
import { Text, View } from '../components/Themed';

import tweets from "../data/tweets";
import Feed from '../components/feed';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Feed/>
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
