import { StackNavigator } from 'react-navigation'

import HomeScreen from '../Screens/HomeScreen'
import CreateContentScreenStep2 from '../Screens/CreateContentScreenStep2'
import ShowcaseScreen from '../Screens/ShowcaseScreen'
import ArtifactScreen from '../Screens/ArtifactScreen'
import StarWarsScreen from '../Screens/StarWarsScreen'
import CaptureScreen from '../Screens/CaptureScreen'
import CaptureSaveScreen from '../Screens/CaptureSaveScreen'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  HomeScreen: { screen: HomeScreen},
  CreateContentScreenStep2: {screen: CreateContentScreenStep2},
  ShowcaseScreen: {screen: ShowcaseScreen},
  ArtifactScreen: {screen: ArtifactScreen},
  StarWarsScreen: {screen: StarWarsScreen},
  CaptureScreen: {screen: CaptureScreen},
  CaptureSaveScreen: {screen: CaptureSaveScreen},
}, {
  // Default config for all screens
  headerMode: 'float',
  initialRouteName: 'HomeScreen',
  navigationOptions: ({navigation}) => {

    let navTitle = 'Back'
    if (navigation.state.params) {
      navTitle = navigation.state.params.title || navTitle;
    }

    return {
      title: navTitle
    }
  },
})

export default PrimaryNav
