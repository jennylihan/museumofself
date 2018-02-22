import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Button } from 'react-native-elements';

import { Images, Metrics } from '../Themes'
import StackNavigation from '../Navigation/StackNavigation'

const NavigatorTypes = Object.freeze({"stack":1, "tab":2, "drawer":3})

export default class PreScreen extends React.Component {

  state = {
    navigationType: null
  }

  onNavigationTypeRequested = (navigatorType) => {
    this.setState({navigationType: navigatorType});
  }

  navigationForType = (type) => {
    switch (type) {
      case NavigatorTypes.stack:
        return <StackNavigation/>
    }
  }

  render() {

    if (this.state.navigationType) {
      return this.navigationForType(this.state.navigationType);
    }

    return (
      <View style={styles.container}>
        <Image style={styles.phoneImage}
          source={Images.phone} />
        <Button title="Welcome! "
          onPress={() => this.onNavigationTypeRequested(NavigatorTypes.stack)}
          buttonStyle={{backgroundColor: '#006D99', borderRadius: 10}}/>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  descText: {
    padding: 5,
    textAlign: 'center'
  },
  phoneImage: {
    height: 200,
    width: 300,
    margin: Metrics.doubleBaseMargin,
  }
});
