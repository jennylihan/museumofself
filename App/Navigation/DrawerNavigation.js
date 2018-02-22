import { DrawerNavigator } from 'react-navigation'

import { Colors } from '../Themes'
import SampleDrawerScreen from '../Screens/SampleDrawerScreen'
import SampleSettingsScreen from '../Screens/SampleSettingsScreen'
import StarWarsScreen from '../Screens/StarWarsScreen'

// Manifest of possible screens
const DrawerNav = DrawerNavigator({
  SampleDrawerScreen: { screen: SampleDrawerScreen },
  StarWarsScreen: { screen: StarWarsScreen },
  SampleSettingsScreen: { screen: SampleSettingsScreen }
}, {
  // Default config for all screens

})

export default DrawerNav
