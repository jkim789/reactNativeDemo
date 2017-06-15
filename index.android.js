import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Component1 from './app/components/Component1/Component1.js';

export default class techtalkdemo extends Component {
  render() {
    return (
      <View>
        <Component1 />
      </View>
    );
  }
}

AppRegistry.registerComponent('techtalkdemo', () => techtalkdemo);


