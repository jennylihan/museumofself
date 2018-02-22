import { StackNavigator } from 'react-navigation'

import CreateContentScreen from '../Screens/CreateContentScreen'
import CreateContentScreenStep2 from '../Screens/CreateContentScreenStep2'
import PickerScreen from '../Screens/PickerScreen'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  CreateContentScreen: { screen: CreateContentScreen},
  CreateContentScreenStep2: {screen: CreateContentScreenStep2}
}, {
  // Default config for all screens
  headerMode: 'float',
  initialRouteName: 'CreateContentScreen',
  navigationOptions: ({navigation}) => {

    let navTitle = 'Create Content'
    if (navigation.state.params) {
      navTitle = navigation.state.params.title || navTitle;
    }

    return {
      title: navTitle
    }
  },
})

export default PrimaryNav
