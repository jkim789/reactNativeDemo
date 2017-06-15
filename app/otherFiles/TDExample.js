
// import React, { Component } from 'react'
// import {
//   AppRegistry,
//   StyleSheet,
//   View,
//   Image,
//   Text,
//   PanResponder,
//   Animated,
//   Dimensions,
// } from 'react-native'

// const {width, height} = Dimensions.get('window')

// export default class techTalkDemo extends Component {

//   state = {
//     profileIndex: 0,
//   }

//   nextCard = () => {
//     this.setState({profileIndex: this.state.profileIndex + 1})
//   }

//   render() {
//     const {profileIndex} = this.state
//     return (
//       <View style={{flex:1}}>
//         {profiles.slice(profileIndex, profileIndex + 4).reverse().map((profile) => {
//           return (
//             <Card
//               key={profile.id}
//               profile={profile}
//               onSwipeOff={this.nextCard}
//             />
//           )
//         })}
//       </View>
//     )
//   }
// }

// class Card extends Component {
//   componentWillMount() {
//     this.pan = new Animated.ValueXY()

//     this.cardPanResponder = PanResponder.create({
//       onStartShouldSetPanResponder: () => true,
//       onPanResponderMove: Animated.event([
//         null,
//         {dx:this.pan.x, dy:this.pan.y},
//       ]),
      // onPanResponderRelease: (e, {dx}) => {
      //   const absDx = Math.abs(dx)
      //   const direction = absDx / dx

      //   if (absDx > 120) {
      //     Animated.decay(this.pan, {
      //       velocity: {x:3 * direction, y:0},
      //       deceleration: 0.995,
      //     }).start(this.props.onSwipeOff)
      //   } else {
      //     Animated.spring(this.pan, {
      //       toValue: {x:0, y:0},
      //       friction: 4.5,
      //     }).start()
      //   }
      // },
//     })
//   }
  
//   calcAge = (dateString) => {
//     var birthday = +new Date(dateString);
//     return ~~((Date.now() - birthday) / (31557600000));
//   }
  
//   render() {
//     const {birthday, name, bio, id} = this.props.profile
//     const profileAge = this.calcAge(birthday)
//     const fbImage = `https://graph.facebook.com/${id}/picture?height=500`

//     const rotateCard = this.pan.x.interpolate({
//       inputRange: [-200, 0, 200],
//       outputRange: ['10deg', '0deg', '-10deg'],
//     })
//     const animatedStyle = {
//       transform: [
//         {translateX: this.pan.x},
//         {translateY: this.pan.y},
//         {rotate: rotateCard},
//       ],
//     }

//     return (
//       <Animated.View
//         {...this.cardPanResponder.panHandlers}
//         style={[styles.card, animatedStyle]}>
//         <Image
//           style={{flex:1}}
//           source={{uri: fbImage}}
//         />
//         <View style={{margin:20}}>
//           <Text style={{fontSize:20}}>{name}, {profileAge}</Text>
//           <Text style={{fontSize:15, color:'darkgrey'}}>{bio}</Text>
//         </View>
//       </Animated.View>
//     )
//   }
// }

// AppRegistry.registerComponent('techTalkDemo', () => techTalkDemo);

// const styles = StyleSheet.create({
//   card: {
//     position: 'absolute',
//     width: width - 20,
//     height: height * 0.7,
//     top: (height * 0.3) / 2,
//     overflow: 'hidden',
//     backgroundColor: 'white',
//     margin: 10,
//     borderWidth: 1,
//     borderColor: 'lightgrey',
//     borderRadius: 8,
//   },
// })

// const profiles = [
//   {
//     id: '259389830744794',
//     name: 'Candice',
//     birthday: '10/18/1986',
//     bio: 'Supermodel',
//   },
//   {
//     id: '720115413',
//     name: 'Alessandra',
//     birthday: '1/10/1989',
//     bio: 'Dancer',
//   },
//   {
//     id: '169571172540',
//     name: 'Miranda',
//     birthday: '12/12/1983',
//     bio: 'Doctor',
//   },
//   {
//     id: '1476279359358140',
//     name: 'Alissa',
//     birthday: '2/11/1990',
//     bio: 'Comedian',
//   },
//   {
//     id: '912478262117011',
//     name: 'Rosie',
//     birthday: '9/4/1989',
//     bio: 'Artist',
//   },
//   {
//     id: '173567062703796',
//     name: 'Kendall',
//     birthday: '8/17/1992',
//     bio: 'Truck Driver',
//   },
//   {
//     id: '662254353934918',
//     name: 'Anna',
//     birthday: '3/23/1989',
//     bio: 'Personal Trainer',
//   },
//   {
//     id: '424154277777372',
//     name: 'Gabriella',
//     birthday: '3/23/1988',
//     bio: 'Surfer',
//   },
//   {
//     id: '662720103796952',
//     name: 'Mara',
//     birthday: '3/23/1987',
//     bio: 'Lifeguard',
//   },
// ]

// var React = require('react');
// var Dimensions = require('Dimensions');
// var {
//   width,
//   height
// } = Dimensions.get('window');
// var {
//   AppRegistry,
//   StyleSheet,
//   View,
//   Animated
// } = require('react-native');
// var SQUARE_DIMENSIONS = 30;
// var SPRING_CONFIG = {tension: 2, friction: 3}; //Soft spring
// var techTalkDemo = React.createClass({
//   getInitialState: function() {
//     return {
//         pan: new Animated.ValueXY()
//     };
//   },
//   componentDidMount: function() {
//     this.startAndRepeat();
//   },
//   startAndRepeat: function() {
//     this.triggerAnimation(this.startAndRepeat);
//   },
//   triggerAnimation: function(cb) {
//     Animated.sequence([
//       Animated.spring(this.state.pan, {
//             ...SPRING_CONFIG,
//             toValue: {x: 0, y: height - SQUARE_DIMENSIONS} //animate to bottom left
//       }),
//       Animated.spring(this.state.pan, {
//           ...SPRING_CONFIG,
//           toValue: {x: width - SQUARE_DIMENSIONS, y: height - SQUARE_DIMENSIONS} // animated to bottom right
//       }),
//       Animated.spring(this.state.pan, {
//             ...SPRING_CONFIG,
//             toValue: {x: width - SQUARE_DIMENSIONS, y: 0} //animate to top right
//       }),
//       Animated.spring(this.state.pan, {
//           ...SPRING_CONFIG,
//           toValue: {x: 0, y: 0} // return to start
//       })
//     ]).start(cb);
//   },
//   getStyle: function() {
//     return [
//               styles.square, 
//               {
//                 transform: this.state.pan.getTranslateTransform()
//               }
//             ];
//   },
//   render: function() {
//     return (
//       <View style={styles.container}>
//         <Animated.View style={this.getStyle()} />
//       </View>
//     );
//   }
// });
// var styles = StyleSheet.create({
//   container: {
//     flex: 1
//   },
//   square: {
//     width: SQUARE_DIMENSIONS,
//     height: SQUARE_DIMENSIONS,
//     backgroundColor: 'blue'
//   } 
// });