import * as WebBrowser from 'expo-web-browser';
import React, { useState, useEffect } from 'react';
import { Image, ScrollView, StyleSheet, View, FlatList, Button } from 'react-native';

export default function Gallery() {
  const [ images, images_set ] = useState([]);

  const fetchImages = async () => {
    console.log('fetching...');

    const request = await fetch('https://api.unsplash.com/photos/?client_id=cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0');

    if (request.status !== 200) return console.error(request.status, request.statusText);

    const json = await request.json();

    images_set(json);

    console.log('OK!');
  };

  return <View style={styles.container}>
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}>
      <View>
        <Button title="Fetch images" onPress={fetchImages} />

        <FlatList data={images} renderItem={({ item }) => <GalleryItem item={item} />} keyExtractor={item => item.id} />
      </View>
    </ScrollView>
  </View>;
}

// Hide the header offset
Gallery.navigationOptions = {
  header: null,
};

function GalleryItem({ item }) {
  return <Image source={{ uri: item.urls.thumb }} style={styles.galleryItem} />
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingTop: 30,
    alignItems: 'center',
    marginHorizontal: 50,
  },
  galleryItem: {
    width: 100,
    height: 100
  },
});
