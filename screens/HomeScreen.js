import * as WebBrowser from 'expo-web-browser';
import React, { useState, useEffect } from 'react';
import { Image, ScrollView, StyleSheet, View, FlatList, Text, TouchableHighlight } from 'react-native';

export default function Gallery(props) {
  const [ images, images_set ] = useState([]);

  const fetchImages = async () => {
    console.log('fetching...');

    const request = await fetch('https://api.unsplash.com/photos/?client_id=cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0');

    if (request.status !== 200) return console.error(request.status, request.statusText);

    const json = await request.json();

    images_set(json);

    console.log('OK!');
  };

  useEffect(() => {
    fetchImages()
  }, []);

  return <View style={styles.container}>
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}>
      <View>
        { images.length ? null : <Text style={styles.loadingText}>Loading...</Text> }

        <FlatList
          data={images}
          numColumns={3}
          renderItem={({ item }) => <GalleryItem item={item} navigate={props.navigation.navigate} />}
          keyExtractor={item => item.id} />
      </View>
    </ScrollView>
  </View>;
}

// Hide the header offset
Gallery.navigationOptions = {
  header: null,
};

function GalleryItem({ item, navigate }) {
  const onClick = () => {
    console.log(`Clicked on ${item.id}`);
    navigate('Image', { item });
  }

  return <TouchableHighlight onPress={onClick}>
    <Image source={{ uri: item.urls.thumb }} style={styles.galleryItem} />
  </TouchableHighlight>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingTop: 30,
    alignItems: 'center',
  },
  galleryItem: {
    width: 100,
    height: 100,
    margin: 5,
  },
  loadingText: {
    fontSize: 24,
  },
});
