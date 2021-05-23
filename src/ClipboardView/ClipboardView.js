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
        scalesPageToFit={false}
      />
    );
};

export default ClipboardView;
