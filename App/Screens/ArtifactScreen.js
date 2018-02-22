import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { Card } from 'react-native-elements';

import { MaterialIcons } from '@expo/vector-icons'
import { Images, Colors, Metrics } from '../Themes'

export default class ArtifactScreen extends React.Component {

  static navigationOptions = ({ navigation }) => {
     const { params = {} } = navigation.state;

     const tabBarOptions = {
       tabBarLabel: 'Settings',
       tabBarIcon: ({ tintColor }) => (
         <MaterialIcons
           name='settings'
           color={Colors.steel}
           size={Metrics.icons.small}
         />
       ),
     }

     return tabBarOptions;
  };

  render() {

    const { params = {} } = this.props.navigation.state;
    const { text = "This is a artifact screen!", count = 1, color = Colors.rioGrande } = params;

    return (
      <View style={[ styles.container, { backgroundColor: color } ]}>
        <Text style={styles.text}>{text}</Text>
        <Text style={styles.text}>{count}</Text>
        <Card title="CARD WITH DIVIDER">
            <Image
              style={styles.image}
              resizeMode="cover"
              source={Images.jedi1}
            />
            <Text>Saki</Text>
        </Card>

      </View>
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
    color: Colors.snow
  }
});