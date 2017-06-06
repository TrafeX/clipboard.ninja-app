// @flow
import React from 'react';
import {StatusBar, View, StyleSheet} from 'react-native';
import ClipboardView from './ClipboardView';

const App = () => (
  <View style={styles.container}>
    <View>
      <StatusBar
        backgroundColor="#ef6c00"
        barStyle="light-content"
      />
    </View>
    <View>
      <ClipboardView/>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
  },
});

export default App;
