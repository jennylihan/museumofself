import React from 'react';
import { Dimensions, ScrollView, Share, StyleSheet, Text, TextInput, View, Image } from 'react-native';
import {Button} from 'react-native-elements';


import { MaterialIcons } from '@expo/vector-icons'
import { Images, Colors, Metrics } from '../Themes'

let { height, width } = Dimensions.get('window');
let size = width;

export default class CaptureScreen extends React.Component {
  state = {
    inputValue: 'Enter optional description',
    imgUri: '',
    topText: '',
    bottomText: '',
  };

  _handleTextChange = inputValue => {
    this.setState({ inputValue });
  };
  
  static navigationOptions = ({ navigation }) => {
     const { params = {} } = navigation.state;
  };

  componentDidMount() {
    console.log(JSON.stringify(this.props.navigation));
    this.props.navigation.setParams({saveArtifact: this._saveArtifact});
  }

  _saveArtifact = () => {
    const { navigate } = this.props.navigation;
    navigate('CaptureSaveScreen');
  }

  _saveAsync = async () => {
    let imgUri = await Expo.takeSnapshotAsync(this._picView);
    console.log('imgUri=', imgUri);
    let currentList = this.state.storedMemeImages;
    console.log('currentList=', currentList);
    let newList = [].concat(this.state.storedMemeImages);
    newList.push(imgUri);
    console.log('newList=', newList);
    this.setState({ storedMemeImages: newList });
  };

  _takePhotoAsync = async () => {
    let image = await Expo.ImagePicker.launchCameraAsync();
    if (!image.cancelled) {
      this.setState({ imgUri: image.uri });
    }
  };

  _choosePhotoAsync = async () => {
    let image = await Expo.ImagePicker.launchImageLibraryAsync();
    if (!image.cancelled) {
      this.setState({ imgUri: image.uri });
    }
  };

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
            source={{ uri: this.state.imgUri ? this.state.imgUri : '../Images/image_background.png' }}
            style={{ height: size, width: size }}
          />
        <Text> </Text>
        </View>
        
        <Button title="Take a Photo"
          onPress={this._takePhotoAsync}
          containerViewStyle={{width: '75%', marginLeft: 10, marginRight: 10}}
          buttonStyle={{backgroundColor: '#046A9D', borderRadius: 10}} 
        />

        <View style={styles.button}>
        </View>

        <Button title="Choose a Photo" 
          onPress={this._choosePhotoAsync} 
          containerViewStyle={{width: '75%', marginLeft: 10, marginRight: 10}}
          buttonStyle={{backgroundColor: '#046A9D', borderRadius: 10}} 
        />

        <View style={styles.button}>
        </View>

        <TextInput
          value={this.state.inputValue}
          onChangeText={this._handleTextChange}
          style={{ width: 200, height: 44, padding: 8, borderWidth: 1, borderColor: '#ccc' }}
        />

        <View style={styles.button}>
        </View>

        <Button title="Save" 
          onPress={params.saveArtifact ? params.saveArtifact : () => null} 
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

