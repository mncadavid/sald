import React, { Component } from 'react';
import './App.css';
import {Route} from 'react-router-dom';

//Header, Footer, Friend List, Profile, Posts
import Header from './components/Header';
import LoginForm from './components/forms/LoginForm';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      user: {
        username: "CRHarding",
        password: "Casey123",
        profileImg: "https://www.denverpost.com/wp-content/uploads/2017/01/thor-the-dark-world.jpg",
        posts: [],
        friends: []
      },
      loggedIn: false,
      error: ""
    }
  }

  logIn(evt, userData){
    evt.preventDefault();
    const user = this.state.user;
    if(userData.username === user.username && userData.password === user.password){
      this.setState({
        loggedIn: true,
        error: ""
      })
    } else {
      this.setState({
        error: "Incorrect credentials"
      })
    }
  }

  render(){
    return (
      <div className="App">
        <Header />
        <Route path="/login" render={() => <LoginForm logIn={this.logIn}/>} />
      </div>
    );
  }
}

export default App;
