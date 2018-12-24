/** @format */

import { AppRegistry } from 'react-native'
import App from './src/index'
import HomeScreen from 'src/screens/home'
import ListScreen from 'src/screens/list'
import DetailScreen from 'src/screens/detail'
import { name as appName } from './app.json'

AppRegistry.registerComponent(appName, () => HomeScreen)
