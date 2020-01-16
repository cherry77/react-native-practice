/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import StopWatch from './StopWatch';
import bilibili from './bilibili/index';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => bilibili);
