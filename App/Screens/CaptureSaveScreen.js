import React from 'react';
import { Dimensions, ScrollView, Share, StyleSheet, Text, TextInput, View, Image } from 'react-native';
import {Button} from 'react-native-elements';

import { MaterialIcons } from '@expo/vector-icons'
import { Images, Colors, Metrics } from '../Themes'

let { height, width } = Dimensions.get('window');
let size = width;

export default class CaptureSaveScreen extends React.Component {
  state = {
    inputValue: 'Enter artifact title',
    exhibitValue: 'Which exhibit?',
    imgUri: '',
    topText: '',
    bottomText: '',
  };

  _handleTextChange = inputValue => {
    this.setState({ inputValue });
  };

  _handleExhibitChange = inputValue => {
    this.setState({ inputValue });
  };
  
  static navigationOptions = ({ navigation }) => {
     const { params = {} } = navigation.state;
  };

  componentDidMount() {
    console.log(JSON.stringify(this.props.navigation));
    this.props.navigation.setParams({});
  }

  _saveAndReturn = () => {
    // EVENTUALLY ADD SAVE CODE HERE FOR BACKEND
    const { navigate } = this.props.navigation;
    navigate('CaptureScreen');
  }

  render() {

    const { params = {} } = this.props.navigation.state;
    const { text = "CAPTURE", count = 1, color = Colors.white} = params;

    return (
      <View style={[ styles.container, { backgroundColor: color } ]}>

        <View
          ref={ref => {
            this._picView= ref;
          }}>
          <Image
            source={Images.saki} //TODO: Get this img from previous screen
            style={{ height: size, width: size }}
          />
          <Text></Text>
        </View>
        
        <TextInput
          value={this.state.inputValue}
          onChangeText={this._handleTextChange}
          style={{ width: 200, height: 44, padding: 8, borderWidth: 1, borderColor: '#ccc' }}
        />
        <Text></Text>
        <TextInput
          value={this.state.exhibitValue}
          onChangeText={this._handleExhibitChange}
          style={{ width: 200, height: 44, padding: 8, borderWidth: 1, borderColor: '#ccc' }}
        />

        <View style={styles.button}>
        </View>

        <Button title="Store artifact" 
          onPress={this._saveAndReturn}
          containerViewStyle={{width: '75%', marginLeft: 10, marginRight: 10}}
          buttonStyle={{backgroundColor: '#000000', borderRadius: 10}} 
        />

      </View>
    );

  } 

}

const styles = StyleSheet.create({
  button: {
    padding: 5,
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

