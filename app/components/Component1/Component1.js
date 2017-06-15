import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Animated,
  TouchableOpacity,
  PanResponder
} from 'react-native';

export default class Component1 extends Component {

  state = {
    fadeAnim: new Animated.Value(0),
}
 
  componentDidMount() {
    Animated.timing(
      this.state.fadeAnim,
      {
        toValue: 1,
        duration: 2500,
      }
    ).start();
  }

  render() {
    console.log(this.props,'HA! you are console.logging' )
    let { fadeAnim } = this.state;
    return (
      <Animated.View
        style={{
          ...this.props.style,
          opacity: fadeAnim
        }}
      >
        <TouchableOpacity onPress={this.props.deleteMethod} style={styles.comment}>
          <Text style={styles.commentText}>Date: {this.props.val.date}</Text>
          <View key={this.props.index} style={styles.nestedContainer}>
            <Text style={styles.commentText}>{this.props.val.comment}</Text>
          </View>
        </TouchableOpacity>

      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  comment: {
    flex: 1,
    overflow: 'hidden',
    backgroundColor: 'grey',
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    paddingRight: 50,
    paddingLeft: 50,
    borderBottomWidth: 2,
    borderBottomColor: '#ededed',
  },
  commentText: {
    color: 'white',
    fontSize: 20,
    paddingLeft: 20,
  },
  nestedContainer: {
    flex:1,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2980b9',
    padding: 10,
    top: 10,
    bottom: 10,
  },
  commentDeleteText: {
    color: 'white',
    borderBottomColor: 'red',
    borderBottomWidth: 10
  }
});
