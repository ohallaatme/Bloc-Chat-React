import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';
import { RoomList } from './components/RoomList.js';
import { MessageList } from './components/MessageList.js';
import { User } from './components/User.js';
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
    this.state = {activeRoom: "", user:null};
    this.activeRoom = this.activeRoom.bind(this);
    this.setUser = this.setUser.bind(this);
  }

  activeRoom(room) {
    this.setState({ activeRoom: room })
  }

  setUser(user){
    this.setState({ user: user });
  }
  render() {
    const showMessages = this.state.activeRoom;
    const currentUser = this.state.user === null ? "Guest" : this.state.user.displayName;
    return (
      <div className="App">
        <h1>{this.state.activeRoom.title || "Choose a Room"}</h1>
        <User firebase={firebase} setUser={this.setUser} />
        <RoomList firebase={firebase} activeRoom={this.activeRoom} />
        { showMessages ?
          (<MessageList firebase={firebase} activeRoom={this.state.activeRoom.key} user={this.state.user.displayName}/>)
          : (null)
        }
      </div>

    );
  }
}

export default App;
