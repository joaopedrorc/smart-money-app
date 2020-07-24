/**
 * @format
 */

// if (__DEV__) {
//   import('./src/config/ReactotronConfig');
// }

import {AppRegistry} from 'react-native';
import App from './src';
import Main from './src/pages/Main';
import NewEntry from './src/pages/NewEntry';
import Report from './src/pages/Report';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Report);
