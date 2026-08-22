/**
 * Clipboard.ninja — a thin WebView wrapper around https://clipboard.ninja
 *
 * @format
 */

import {StatusBar, StyleSheet, View} from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

import ClipboardView from './src/ClipboardView';

/** Brand orange, matching the old `<StatusBar backgroundColor="#ef6c00" />`. */
const STATUS_BAR_COLOR = '#ef6c00';
const PAGE_BACKGROUND = '#ffffff';

function AppContent() {
  // The app runs edge-to-edge (enforced from targetSdk 35 upward), so the
  // WebView draws underneath the system bars and we paint the insets ourselves.
  // `StatusBar` lost its `backgroundColor` and `translucent` props in RN 0.87.
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={[styles.statusBarInset, {height: insets.top}]} />
      <ClipboardView />
      <View style={[styles.navBarInset, {height: insets.bottom}]} />
    </View>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <AppContent />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: PAGE_BACKGROUND,
  },
  statusBarInset: {
    backgroundColor: STATUS_BAR_COLOR,
  },
  navBarInset: {
    backgroundColor: PAGE_BACKGROUND,
  },
});
