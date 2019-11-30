import React from 'react';
import { StyleSheet, Image } from 'react-native';

export default function ImageScreen(props) {
  const { item } = props.navigation.state.params;

  console.log('ImageScreen', props);
  return (
    <Image source={{ uri: item.urls.regular}} style={styles.image} />
  );
}

ImageScreen.navigationOptions = {
  title: 'Links',
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
  },
});
