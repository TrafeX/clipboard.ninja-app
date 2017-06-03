// @flow
import React, { Component } from 'react';
import {
  AppRegistry,
  WebView,
  Linking
} from 'react-native';

export default class ReactNativeApp extends Component {
  render() {
    return (
      <WebView
        source={{uri: 'https://clipboard.ninja?utm_source=android_app'}}
        ref={(ref) => { this.webview = ref; }}
        onNavigationStateChange={(event) => {
          if (!event.url.startsWith('https://clipboard.ninja')) {
            this.webview.stopLoading();
            Linking.openURL(event.url);
          }
        }}
      />
    );
  }
}

AppRegistry.registerComponent('ReactNativeApp', () => ReactNativeApp);
