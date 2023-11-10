import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler'
import { COLORS, SIZES } from './constants/styles';
import { Provider } from 'react-redux';
import { store } from './redux/store'

import AppNavigation from './Navigation/AppNavigation';

export default function App() {

  return (
    
    <Provider store={store}>
      <AppNavigation />
    </Provider>

  );
}

