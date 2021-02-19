import React from 'react';
import { StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';
import Feed from '../components/feed';
import NewTweetButton from "../components/newTweetButton";

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Feed/>
      <NewTweetButton/>
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
