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
  PanResponder
} from 'react-native';

import Component1 from './Component1.js';
const pic = require('../../cutest-puppy-pics.jpg')

export default class NextScene extends Component {
  constructor(){
    super()
    this.state = {
    commentArray: [
      {date: '2017/6/11', comment: 'Im literally dying right now!!'},
      {date: '2017/6/11', comment: 'puppies rule!!'},
      {date: '2017/6/11', comment: 'puppy puppy puppy'}
    ],
    commentText: '',
    }
  }
  static navigationOptions = {
    title: 'Welcome to PuppyPost2',
  };

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

  renderScene(){

  }

  render() {

    let comments = this.state.commentArray.map((val,index)=>{
      return (<Component1 key={index} keyval={index} val={val} width={this.state.width} height={this.state.height} deleteMethod={()=>this.deleteComment(index)} />)
    })
    return (
          <View style={styles.container}>
          
              <Image source={pic} style={styles.backgroundImage}>
                <View style={styles.header}>
                  <Text style={styles.headerText}> #PuppyGram </Text>
                </View>
                  <TouchableOpacity>
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
              <TextInput 
              style={styles.textInput} 
              onChangeText={(commentText)=> this.setState({commentText})} 
              value={this.state.commentText} 
              placeholder='< New Comment Here! >' 
              placeholderTextColor='white'></TextInput>
              <TouchableOpacity onPress={this.addComment.bind(this)} style={styles.addButton}>
                <Text style={styles.addButtonText}> + </Text>
              </TouchableOpacity>
            </View>

          </View>
    );
  }
}

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


