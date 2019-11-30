import React from 'react';
import { Image, StyleSheet, TouchableHighlight } from 'react-native';

export default function GalleryItem({ item, navigate }) {
  const onClick = () => {
    console.log(`Clicked on ${item.id}`);
    navigate('Image', { item });
  }

  return <TouchableHighlight onPress={onClick}>
    <Image source={{ uri: item.urls.thumb }} style={styles.galleryItem} />
  </TouchableHighlight>;
};

const styles = StyleSheet.create({
  galleryItem: {
    width: 100,
    height: 100,
    margin: 5,
  },
});