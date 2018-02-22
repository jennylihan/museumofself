import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Card, Button } from 'react-native-elements';


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
        <Card title="CARD WITH DIVIDER">
            <Image
              style={styles.image}
              resizeMode="cover"
              source={Images.jedi1}
            />
            <Text>Saki</Text>
        </Card>

        <Card
          title='HELLO WORLD'
          image={Images.jedi2}>
          <Text style={{marginBottom: 10}}>
            The idea with React Native Elements is more about component structure than actual design.
          </Text>
          <Button
            icon={{name: 'code'}}
            backgroundColor='#03A9F4'
            fontFamily='Lato'
            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
            title='VIEW NOW' />
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
