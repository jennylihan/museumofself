import React from 'react';
import { Dimensions, ScrollView, Share, StyleSheet, Text, TextInput, View, Image, Button } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons'
import { Images, Colors, Metrics } from '../Themes'

let { height, width } = Dimensions.get('window');
let size = width;

export default class CaptureSaveScreen extends React.Component {
  state = {
    inputValue: '[TITLE]',
    imgUri: '',
    topText: '',
    bottomText: '',
  };

  _handleTextChange = inputValue => {
    this.setState({ inputValue });
  };
  
  static navigationOptions = ({ navigation }) => {
     const { params = {} } = navigation.state;

     const tabBarOptions = {
       tabBarLabel: 'WHAT IS THIS',
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
    this.props.navigation.setParams({handleAdd: this._handleAdd});
  }

  _handleAdd = () => {
    const { params = {} } = this.props.navigation.state;
    const { navigate } = this.props.navigation;
    navigate('PickerScreen');
  }

  _saveAndReturn = () => {
    // EVENTUALLY ADD SAVE CODE HERE FOR BACKEND
    const { navigate } = this.props.navigation;
    navigate('CaptureScreen');
  }

  render() {

    const { params = {} } = this.props.navigation.state;
    const { text = "CAPTURE", count = 1, color = Colors.fire } = params;

    return (
      <View style={[ styles.container, { backgroundColor: color } ]}>

        <View
          ref={ref => {
            this._picView= ref;
          }}>
          <Image
            source={Images.saki}
            style={{ height: size, width: size }}
          />
          <Text style={[styles.memeText, { top: 5 }]}>
            {this.state.topText}
          </Text>
          <Text style={[styles.memeText, { bottom: 5 }]}>
            {this.state.bottomText}
          </Text>
        </View>
        
        <TextInput
          value={this.state.inputValue}
          onChangeText={this._handleTextChange}
          style={{ width: 200, height: 44, padding: 8, borderWidth: 1, borderColor: '#ccc' }}
        />

        <Button title="Save" onPress={this._saveAndReturn} />
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

