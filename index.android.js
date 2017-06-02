// @flow
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
