import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ImageScreen(props) {
  console.log('ImageScreen', props);
  return (
    <View style={styles.container}><Text>Fullsize image</Text></View>
  );
}

ImageScreen.navigationOptions = {
  title: 'Links',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
