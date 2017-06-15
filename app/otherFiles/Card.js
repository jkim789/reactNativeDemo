import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  View,
  Image,
  Text,
  PanResponder,
  Animated,
  Dimensions,
} from 'react-native'

class Card extends Component {
  componentWillMount() {
    this.pan = new Animated.ValueXY()

    this.cardPanResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([
        null,
        {dx:this.pan.x, dy:this.pan.y},
      ]),
      onPanResponderRelease: (e, {dx}) => {
        const absDx = Math.abs(dx)
        const direction = absDx / dx

        if (absDx > 120) {
          Animated.decay(this.pan, {
            velocity: {x:3 * direction, y:0},
            deceleration: 0.995,
          }).start(this.props.onSwipeOff)
        } else {
          Animated.spring(this.pan, {
            toValue: {x:0, y:0},
            friction: 4.5,
          }).start()
        }
      },
    })
  }
}