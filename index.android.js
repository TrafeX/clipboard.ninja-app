/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  WebView
} from 'react-native';

export default class ReactNativeApp extends Component {
  render() {
    return (
        <WebView
          source={{uri: 'https://clipboard.ninja?utm_source=android_app'}}
        />
    );
  }
}

AppRegistry.registerComponent('ReactNativeApp', () => ReactNativeApp);
