import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  ListView,
  ScrollView,
  TouchableOpacity,
  Animated,
  Image,
  PanResponder,
  Navigator
} from 'react-native';
import { StackNavigator } from 'react-navigation';

import NextScene from './app/components/Component1/NextScene.js';
import Component1 from './app/components/Component1/Component1.js';
const pic = require('./app/puppy.jpg')


export default class techTalkDemo extends Component {
  constructor(){
    super()
    this.state = {
    commentArray: [
      {date: '2017/6/11', comment: 'This is the cutest puppy!!'},
      {date: '2017/6/11', comment: 'Warm fuzzy furball!!'},
      {date: '2017/6/11', comment: 'puppy puppy puppy'}
    ],
    commentText: '',
    }
  }
  static navigationOptions = {
    title: 'Welcome to PuppyPost1'
  }

  addComment(){
    if(this.state.commentText){
      var date = new Date();
      this.state.commentArray.push( {
        'date': date.getFullYear() + "/" + (date.getMonth() + 1) + '/' + date.getDate(), 'comment': this.state.commentText
      });
      this.setState({commentArray: this.state.commentArray})
      this.setState({commentText: ''});
    }
  }

  deleteComment(key){
    this.state.commentArray.splice(key,1);
    this.setState({commentArray: this.state.commentArray})
  }
  _renderScene(route, navigator) {
    if (route.id === 1) {
      return <techTalkDemo navigator={navigator} />
    } else if (route.id === 2) {
      return <PageTwo navigator={navigator} />
    }
  }

  _handlePress() {
    this.props.navigator.push({id: 2,});
  }

  render() {

    let comments = this.state.commentArray.map((val,index)=>{
      return (<Component1 key={index} keyval={index} val={val} width={this.state.width} height={this.state.height} deleteMethod={()=>this.deleteComment(index)} />)
    })
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
      
        <Image source={pic} style={styles.backgroundImage}>
          <View style={styles.header}>
              <Text style={styles.headerText}> #PuppyMania </Text>
          </View>
          <TouchableOpacity onPress={() => navigate('Chat')} title="NextScene">
            <View style={{
              flex: 1, 
              backgroundColor: 'rgba(0,0,0,0)', 
              justifyContent: 'center',
              paddingTop: 20 }} >
              <Text style={{
              backgroundColor: 'rgba(0,0,0,0)', 
              paddingRight: 40, 
              height: 50 }}> NEXT > </Text>
            </View>
          </TouchableOpacity>
        </Image>

        <ScrollView style={styles.scrollContainer}>
          {comments}
        </ScrollView>

        <View style={styles.footer}>
          <TextInput style={styles.textInput} onChangeText={(commentText)=> this.setState({commentText})} value={this.state.commentText} placeholder='< New Comment Here! >' placeholderTextColor='white'></TextInput>

          <TouchableOpacity onPress={this.addComment.bind(this)} style={styles.addButton}>
            <Text style={styles.addButtonText}> + </Text>
          </TouchableOpacity>
        </View>

      </View>
    );
  }

}

const SimpleApp = StackNavigator({
  Home: { screen: techTalkDemo },
  Chat: { screen: NextScene }
});

AppRegistry.registerComponent('techTalkDemo', () => SimpleApp);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgrey'
  },
  header: {
    backgroundColor: 'rgba(0,0,0,0)',
    flexDirection: 'column',
    alignItems: 'center',
    flex: 1,
    height: 32,
  },
  backgroundImage: {
    resizeMode: 'stretch',
    flex: 1,
    width: null,
    height: null,
    borderRadius: 100,
    alignItems: 'flex-end',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingBottom: 30
  },
  headerText: {
    backgroundColor: 'rgba(0,0,0,0)',
    color: 'red',
    fontSize: 22,
    paddingTop: 23,
  },
  scrollContainer: {
    flex: 1,
    marginBottom: 100,
  },
  footer: {
    backgroundColor: 'rgba(0,0,0,0)',
    flexDirection: 'row',
    position: 'absolute',
    alignItems: 'center',
    bottom: 0,
    left: 0,
    right: 0
  },
  addButton: {
    backgroundColor: '#26E5FE',
    width: 50,
    height: 60,
    borderRadius: 20,
    borderColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 5,
    marginBottom: 0,
    zIndex: 10
  },
  addButtonText: {
    color: '#fff',
    fontSize: 30,
  },
  textInput: {
    height: 100,
    padding: 4,
    marginRight: 5,
    flex: 4,
    fontSize: 20,
    paddingBottom: 60,
    backgroundColor: '#252525',
    borderWidth: 1,
    borderColor: '#48afdb',
    borderRadius: 20,
    color: '#48BBEC'
  }
});

