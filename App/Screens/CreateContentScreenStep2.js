import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons'
import { Images, Colors, Metrics } from '../Themes'

export default class CreateContentScreenStep2 extends React.Component {

  static navigationOptions = ({ navigation }) => {
     const { params = {} } = navigation.state;

     const headerRight = <Button
                             title="Add"
                             onPress={params.handleAdd ? params.handleAdd : () => null} />;

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
       headerRight: headerRight,
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

  render() {

    const { params = {} } = this.props.navigation.state;
    const { text = "And the select exhibit stuff here?",  color = Colors.fire } = params;

    return (
      <View style={[ styles.container, { backgroundColor: color } ]}>
        <Text style={styles.text}>{text}</Text>
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
