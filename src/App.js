import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';
import { RoomList } from './components/RoomList.js';
import { MessageList } from './components/MessageList.js';
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
  constructor(props){
    super(props);
    this.state = {activeRoom: ""};
    this.activeRoom = this.activeRoom.bind(this);
  }

  activeRoom(room) {
    this.setState({ activeRoom: room })
  }

  render() {
    const showMessages = this.state.activeRoom;
    return (
      <div className="App">
      <h1>{this.state.activeRoom.title || "Choose a Room"}</h1>
        <RoomList firebase={firebase} activeRoom={this.activeRoom} />
        { showMessages ?
          (<MessageList firebase={firebase} activeRoom={this.state.activeRoom.key}/>)
          : (null)
        }
      </div>
    );
  }
}

export default App;
