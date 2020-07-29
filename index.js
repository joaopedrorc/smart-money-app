/**
 * @format
 */

// if (__DEV__) {
//   import('./src/config/ReactotronConfig');
// }
import 'react-native-get-random-values';

import {AppRegistry} from 'react-native';
import App from './src';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
