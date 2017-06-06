// @flow
import React from 'react';
import {WebView, StyleSheet, Linking, Dimensions} from 'react-native';

const ClipboardView = () => (
  <WebView
    style={styles.webview}
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

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  webview: {
    flex: 1,
    width: deviceWidth,
    height: deviceHeight,
  },
});

export default ClipboardView;
