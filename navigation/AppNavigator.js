import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
import ImageScreen from '../screens/ImageScreen';

const routes = {
  Home: HomeScreen,
  Image: ImageScreen,
};

export default createAppContainer(
  createStackNavigator(
    routes,
  )
);
