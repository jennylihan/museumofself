import React from 'react';
import { AsyncStorage, StyleSheet, Text, View, StatusBar } from 'react-native';

import PickerScreen from './App/Screens/PickerScreen'
import Onboarding from './App/Screens/OnboardingScreen'

export default class App extends React.Component {

  state = {
    hasDoneOnboarding: true
  }

  componentDidMount() {
    this.getOnboardingStatus();
  }

  getOnboardingStatus = async () => {
    try {
      const onboarding = await AsyncStorage.getItem('onboardingComplete');
      this.setState({hasDoneOnboarding: JSON.parse(onboarding)});
    } catch (error) {
      console.log(error);
    }
  }

  _onDone = async () => {
    try {
      await AsyncStorage.setItem('onboardingComplete', JSON.stringify(true));
    } catch (error) {
      // Error saving data
    }
    this.setState({hasDoneOnboarding: true});
  }

  render() {

    return (
      <View style={styles.container}>
        <StatusBar barStyle='dark-content' />
        {this.state.hasDoneOnboarding ? <PickerScreen/> : <Onboarding onDone={this._onDone} />}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
