import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, View, FlatList, Text } from 'react-native';

import GalleryItem from '../components/GalleryItem';

export default function Gallery(props) {
  const [ images, images_set ] = useState([]);

  const fetchImages = async () => {
    console.log('Fetching images...');

    const request = await fetch('https://api.unsplash.com/photos/?client_id=cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0');

    if (request.status !== 200) return console.error(request.status, request.statusText);

    const json = await request.json();

    images_set(json);

    console.info('[OK!] Fetching images...');
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingTop: 30,
    alignItems: 'center',
  },
  loadingText: {
    fontSize: 24,
  },
});
