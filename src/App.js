import React, { Component } from 'react';
import './App.css';

//Header, Footer, Friend List, Profile, Posts

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
        <header>
          <h1>Hello World</h1>
          <button>Log in / Register</button>
        </header>
      </div>
    );
  }
}

export default App;
