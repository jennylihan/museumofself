import React from 'react';
import {
   Image,
   Platform,
   ScrollView,
   StyleSheet,
   Text,
   TouchableOpacity,
   View,
   TextInput,
   KeyboardAvoidingView,
   AsyncStorage,
   Picker,
   ImageBackground,
   PanResponder,
   Animated,
   Alert, AppRegistry,
   TouchableHighlight,
} from 'react-native';

import { MaterialIcons } from '@expo/vector-icons'
import { Images, Colors, Metrics } from '../Themes'

export default class ShowcaseScreen extends React.Component {
  constructor() {

      super();
      this.state = {
         rows: [],
      };
   }
 static navigationOptions = ({ navigation }) => {
     const { params = {} } = navigation.state;
  };

  render() {

    const { params = {} } = this.props.navigation.state;
    const {color = Colors.white } = params;

    return (

      <ImageBackground
         style={styles.backgroundImage}
         source={Images.SakiTimeline}>
         <View style={[ styles.container, { backgroundColor: color } ]}>
         </View>

         <View style={{position:"absolute",flex:1,left:270,top:200,right:55,bottom:60}}>
            <TouchableOpacity style={styles.CircleShapeView} onPress={() => {
              const { navigate } = this.props.navigation;
              navigate('ArtifactScreen');
            }}>
            <Image source={Images.photoicon} style={{resizeMode:'cover',width:45,height:45}}>
            </Image>
            </TouchableOpacity>
         </View>
         <View style={{position:"absolute",flex:1,left:215,top:300}}>
            <TouchableOpacity style={styles.CircleShapeView} onPress={() => {
              const { navigate } = this.props.navigation;
              navigate('StarWarsScreen');
            }}>
            <Image source={Images.photoicon} style={{resizeMode:'cover',width:45,height:45}}>
            </Image>
            </TouchableOpacity>
         </View>
         <View style={{position:"absolute",flex:1,left:270,top:465}}>
            <TouchableOpacity style={styles.CircleShapeView} onPress={() => {
              const { navigate } = this.props.navigation;
              navigate('ArtifactScreen');
            }}>
            <Image source={Images.photoicon} style={{resizeMode:'cover',width:45,height:45}}>
            </Image>
            </TouchableOpacity>
         </View>
      </ImageBackground>

    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  backgroundImage: {
      flex: 1,
      width: null, height: null,
      //resizeMode: 'stretch', // or 'stretch'
  },
  text: {
    color: Colors.snow
  }
});
