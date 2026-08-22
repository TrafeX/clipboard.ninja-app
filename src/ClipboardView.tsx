/**
 * The single WebView that is the whole app.
 *
 * @format
 */

import {useCallback, useEffect, useRef} from 'react';
import {BackHandler, Linking, StyleSheet} from 'react-native';
import {WebView} from 'react-native-webview';

const SOURCE_URI = 'https://clipboard.ninja?utm_source=android_app';
const IN_APP_HOST = 'clipboard.ninja';

export default function ClipboardView() {
  const webViewRef = useRef<WebView>(null);
  const canGoBack = useRef(false);

  const onNavigationStateChange = useCallback((navState: {canGoBack: boolean}) => {
    canGoBack.current = navState.canGoBack;
  }, []);

  // Android back (button or gesture) navigates the WebView first and only closes
  // the app once there is no history left. Previously back always exited.
  useEffect(() => {
    const subscription = BackHandler.addEventListener('hardwareBackPress', () => {
      if (canGoBack.current && webViewRef.current) {
        webViewRef.current.goBack();
        return true; // handled here
      }
      return false; // let Android finish the activity
    });
    return () => subscription.remove();
  }, []);

  // Keep clipboard.ninja itself in the WebView; hand anything else to the browser.
  const onShouldStartLoadWithRequest = useCallback((request: {url: string}) => {
    const {url} = request;
    if (url.startsWith('about:') || url.includes(IN_APP_HOST)) {
      return true;
    }
    Linking.openURL(url).catch(() => {});
    return false;
  }, []);

  return (
    <WebView
      ref={webViewRef}
      style={styles.webview}
      source={{uri: SOURCE_URI}}
      onNavigationStateChange={onNavigationStateChange}
      onShouldStartLoadWithRequest={onShouldStartLoadWithRequest}
      setSupportMultipleWindows={false}
    />
  );
}

const styles = StyleSheet.create({
  webview: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});
