// @flow
import React, {Component} from 'react';
import {StatusBar, View, StyleSheet, Dimensions} from 'react-native';
import ClipboardView from './ClipboardView';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      layout: {width, height} = Dimensions.get('window')
    };
  }

  onLayout = (e) => {
    this.setState({
      layout: {width, height} = Dimensions.get('window')
    });
  };

  render() {
    return (
      <View onLayout={this.onLayout} style={styles.container}>
        <View>
          <StatusBar
            backgroundColor="#ef6c00"
            barStyle="light-content"
          />
        </View>
        <View>
          <ClipboardView layout={this.state.layout} />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
  },
});

export default App;
