import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component {
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp(
      {
      apiKey: 'AIzaSyBRq0v7oSjqGmqiYwV7q1qrdlvrHWsJhyw',
      authDomain: 'authentication-9c82f.firebaseapp.com',
      databaseURL: 'https://authentication-9c82f.firebaseio.com',
      storageBucket: 'authentication-9c82f.appspot.com',
      messagingSenderId: '128218578105'
    });


    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn){
      case true:
    //  <View style ={{ flexDirection: 'row' }}>
      return(
      <View style ={{ flexDirection: 'row' }}>
      <Button onPress={() => firebase.auth().signOut()}>
        Log Out
      </Button>
      </View>);
    //  </View>
      case false:
            return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }
  }

  render() {
    return(
      <View>
        <Header headerText = "Authentication" />
        {this.renderContent()}
      </View>

    );
  }

}
export default App;
