import { StackNavigator } from 'react-navigation'

import SampleContentScreen from '../Screens/SampleContentScreen'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  SampleContentScreen: { screen: SampleContentScreen },
}, {
  // Default config for all screens
  headerMode: 'float',
  initialRouteName: 'SampleContentScreen',
  navigationOptions: ({navigation}) => {

    let navTitle = 'Sample Content'
    if (navigation.state.params) {
      navTitle = navigation.state.params.title || navTitle;
    }

    return {
      title: navTitle
    }
  },
})

export default PrimaryNav
