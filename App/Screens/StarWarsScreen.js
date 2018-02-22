import React from 'react';
import { StyleSheet, Text, SafeAreaView, View, Image, Button, ActivityIndicator, Alert } from 'react-native';

import { FontAwesome } from '@expo/vector-icons'
import { Images, Metrics, Colors } from '../Themes'
import StarWarsCard from '../Components/StarWarsCard'

export default class StarWarsScreen extends React.Component {
    buttonPressed = (name) => {
      console.log( `Button Pressed ${name}`)
    }
    render() {
      return (
        <SafeAreaView style={styles.container}>

            <CarouselComponent/>

            <Text>Regular 34</Text>
            <Text>Regular 24</Text>
            <Text>Medium 20</Text>
            <Text>Regular 16</Text>
            <Text>Medium 14</Text>
            <Text>Regular 14</Text>
            <Text>Regular 12</Text>
            <Text>Medium 14</Text>

            <IconsComponent onClick={this.buttonPressed}/>

        </SafeAreaView>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    }
  });
