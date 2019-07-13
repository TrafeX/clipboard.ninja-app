// @flow
import React from 'react';
import {StyleSheet, Linking} from 'react-native';
import {WebView} from 'react-native-webview';

const ClipboardView = (props) => {
  const styles = StyleSheet.create({
    webview: {
      flex: 1,
      width: parseInt(props.layout.width, 10),
      height: parseInt(props.layout.height, 10),
    },
  });

  return (
      <WebView
        style={styles.webview}
        source={{uri: 'https://clipboard.ninja?utm_source=android_app'}}
        ref={(ref) => {
          this.webview = ref;
        }}
        scalesPageToFit={false}
        onNavigationStateChange={(event) => {
          if (!event.url.startsWith('https://clipboard.ninja')) {
            this.webview.stopLoading();
            Linking.openURL(event.url);
          }
        }}
      />
    );
};

export default ClipboardView;
