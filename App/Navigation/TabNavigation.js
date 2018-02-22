import { TabNavigator } from 'react-navigation'

import { Colors } from '../Themes'
import SampleContentScreen from '../Screens/SampleContentScreen'
import SampleSettingsScreen from '../Screens/SampleSettingsScreen'

// Manifest of possible screens
const TabNav = TabNavigator({
  First: { screen: SampleContentScreen },
  Second: { screen: SampleSettingsScreen },
}, {
  // Default config for all screens
  tabBarPosition: 'bottom',
  animationEnabled: true,
  swipeEnabled: true,
  tabBarOptions: {
    activeTintColor: Colors.ember,
  },
})

export default TabNav
