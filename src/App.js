import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as firebase from 'firebase';
import RoomList from './components/RoomList.js';

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCU9MKw9RRvtwZo49RYNo2ByIKAIceXju0",
    authDomain: "bloc-chat-react-82e01.firebaseapp.com",
    databaseURL: "https://bloc-chat-react-82e01.firebaseio.com",
    projectId: "bloc-chat-react-82e01",
    storageBucket: "bloc-chat-react-82e01.appspot.com",
    messagingSenderId: "37475193722"
  };
  firebase.initializeApp(config);


class App extends Component {
  render() {
    return (
      <div className="App">
        <RoomList firebase={firebase}/>
      </div>
    );
  }
}

export default App;
