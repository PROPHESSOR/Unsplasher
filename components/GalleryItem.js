import React from 'react';
import { View, Text, Image, StyleSheet, TouchableHighlight } from 'react-native';

export default function GalleryItem({ item, navigate }) {
  const onClick = () => {
    console.log(`Clicked on ${item.id}`);
    navigate('Image', { item });
  }

  return <TouchableHighlight onPress={onClick}>
    <View style={styles.container}>
      <Image source={{ uri: item.urls.thumb }} style={styles.galleryItem} />
      <Text style={styles.name}>{item.description || item.alt_description || 'Untitled'}</Text>
      <Text style={styles.author}>by {item.user.username}</Text>
    </View>
  </TouchableHighlight>;
};

const styles = StyleSheet.create({
  container: {
    margin: 5,
  },
  galleryItem: {
    width: 100,
    height: 100,
  },
  name: {
    width: 100,
  },
  author: {
    fontSize: 10,
  },
});