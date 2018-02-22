import { StackNavigator } from 'react-navigation'

import HomeScreen from '../Screens/HomeScreen'
import CreateContentScreenStep2 from '../Screens/CreateContentScreenStep2'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  HomeScreen: { screen: HomeScreen},
  CreateContentScreenStep2: {screen: CreateContentScreenStep2},
}, {
  // Default config for all screens
  headerMode: 'float',
  initialRouteName: 'HomeScreen',
  navigationOptions: ({navigation}) => {

    let navTitle = 'Welcome'
    if (navigation.state.params) {
      navTitle = navigation.state.params.title || navTitle;
    }

    return {
      title: navTitle
    }
  },
})

export default PrimaryNav
