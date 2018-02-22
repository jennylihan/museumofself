import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Card, Button } from 'react-native-elements';


import { MaterialIcons } from '@expo/vector-icons'
import { Images, Colors, Metrics } from '../Themes'

export default class ArtifactScreen extends React.Component {

  static navigationOptions = ({ navigation }) => {
     const { params = {} } = navigation.state;
  };

  render() {

    const { params = {} } = this.props.navigation.state;
    const { color = Colors.white } = params;

    return (
        <Card title="Saki is taking a nap today.">
            <Image style={styles.image}
              source={Images.saki}
            />
        </Card>
    );

  }

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: Colors.black
  },
  image: {
    width: 300,
    height: 500,
  },
});
