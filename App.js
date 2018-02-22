import React from 'react';
import { AsyncStorage, StyleSheet, Text, View, StatusBar } from 'react-native';

import PreScreen from './App/Screens/PreScreen'

export default class App extends React.Component {
  render() {

    return (
      <View style={styles.container}>
        <StatusBar barStyle='dark-content' />
        <PreScreen/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
