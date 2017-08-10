/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  NativeModules,
  TouchableOpacity,
  Text,
  View
} from 'react-native';

export default class NativeWifiManager extends Component {

  open() {
    NativeModules.NativeWifiManager.addEvent('open wifi setting');
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.open.bind(this)}>
          <Text style={{fontSize: 50}}>About</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

AppRegistry.registerComponent('NativeWifiManager', () => NativeWifiManager);
