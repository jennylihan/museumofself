import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons'
import { Images, Colors, Metrics } from '../Themes'

export default class HomeScreen extends React.Component {

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
    this.props.navigation.setParams({handleAdd: this._handleAdd, handleShowcase: this._handleShowcase, handleCapture: this._handleCapture});
  }

  _handleAdd = () => {
    const { params = {} } = this.props.navigation.state;
    const { count = 1 } = params;
    const newCount = count + 1;

    const { navigate } = this.props.navigation;
    navigate('CreateContentScreenStep2', { title: 'Another Screen', text: 'This is another simple screen!', count: newCount, color: Colors.midnightBlue });
  }

  _handleShowcase = () => {
    const { params = {} } = this.props.navigation.state;
    const { count = 1 } = params;
    const newCount = count + 1;

    const { navigate } = this.props.navigation;
    navigate('ShowcaseScreen');
  }

  _handleCapture = () => {
    const { params = {} } = this.props.navigation.state;
    const { count = 1 } = params;
    const newCount = count + 1;

    const { navigate } = this.props.navigation;
    navigate('CaptureScreen');
  }

  render() {

    const { params = {} } = this.props.navigation.state;
    const { text = "", count = 1, color = Colors.white } = params;

    return (
      <View style={[ styles.container, { backgroundColor: color } ]}>
        <Text style={styles.text}>{text}</Text>
        <Text style={styles.text}>{count}</Text>
        <Button title="Create"
          onPress={params.handleCapture ? params.handleCapture : () => null}/>
        <Button title="Curate"
          onPress={params.handleAdd ? params.handleAdd : () => null}/>
        <Button title="Showcase"
          onPress={params.handleShowcase ? params.handleShowcase : () => null}/>
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
