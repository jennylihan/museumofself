import React from 'react';
import { StyleSheet, TextInput, Text, View, Image} from 'react-native';
import {Button} from 'react-native-elements';

import { MaterialIcons } from '@expo/vector-icons'
import { Images, Colors, Metrics } from '../Themes'

export default class HomeScreen extends React.Component {
  state = {
    inputValue: 'You can change me!',
  };

  _handleTextChange = inputValue => {
    this.setState({ inputValue });
  };


  static navigationOptions = ({ navigation }) => {
     const { params = {} } = navigation.state;

     const tabBarOptions = {
       tabBarLabel: '1st!',
       tabBarIcon: ({ tintColor }) => (
         <MaterialIcons
           name='mood'
           color={tintColor}
           size={Metrics.icons.small}
         />
       ),
     }

     const result = {
       ...tabBarOptions,
     }

     return result;
  };

  componentDidMount() {
    console.log(JSON.stringify(this.props.navigation));
    this.props.navigation.setParams({handleAdd: this._handleAdd, handleShowcase: this._handleShowcase});
  }

  _handleAdd = () => {
    const { params = {} } = this.props.navigation.state;
    const { count = 1 } = params;
    const newCount = count + 1;

    const { navigate } = this.props.navigation;
    navigate('CreateContentScreenStep2', { title: 'Curate', text: 'Wait for it - coming soon! This will allow you to tinker around the exhibits', count: newCount, color: Colors.midnightBlue });
  }

  _handleShowcase = () => {
    const { params = {} } = this.props.navigation.state;
    const { count = 1 } = params;
    const newCount = count + 1;

    const { navigate } = this.props.navigation;
    navigate('ShowcaseScreen');
  }

  render() {

    const { params = {} } = this.props.navigation.state;
    const { text = "", count = 1, color = Colors.white } = params;

    return (
      <View style={[ styles.container, { backgroundColor: color } ]}>
        <Text style={styles.text}>{text}</Text>

          <Button large title="Create"
           onPress={params.handleAdd ? params.handleAdd : () => null}
           containerViewStyle={{width: '75%', marginLeft: 10, marginRight: 10}}
           buttonStyle={{backgroundColor: '#3CE9F6', borderRadius: 10}}/>
          <View style={styles.button}>
          </View>

          <Button large title="Curate"
            onPress={params.handleAdd ? params.handleAdd : () => null}
            containerViewStyle={{width: '75%', marginLeft: 10, marginRight: 10}}
            buttonStyle={{backgroundColor: '#00b3d9', borderRadius: 10}}/>

          <View style={styles.button}>
          </View>

          <Button large title="Showcase"
              onPress={params.handleShowcase ? params.handleShowcase : () => null}
              containerViewStyle={{width: '75%', marginLeft: 10, marginRight: 10}}
              buttonStyle={{backgroundColor: '#046A9D', borderRadius: 10}}/>
      </View>
    );

  }

}


const styles = StyleSheet.create({
  button: {
    padding: 25,
    alignItems: 'center',
    justifyContent: 'center'
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: Colors.snow
  }
});
