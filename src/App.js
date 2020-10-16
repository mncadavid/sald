import React, { Component } from 'react';
import './App.css';
import {Route, withRouter } from 'react-router-dom';

//Header, Footer, Friend List, Profile, Posts
import Header from './components/Header';
import LoginForm from './components/forms/LoginForm';
import Profile from './components/Profile';

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
    this.logIn = this.logIn.bind(this);
  }

  logIn(evt, userData){
    evt.preventDefault();
    const user = this.state.user;
    if(userData.username === user.username && userData.password === user.password){
      this.setState({
        loggedIn: true,
        error: ""
      })
      this.props.history.push('/profile')
      localStorage.setItem('jwt', 'abcdefghijklmnop');
    } else {
      this.setState({
        error: "Incorrect credentials"
      })
    }
  }

  componentDidMount(){
    if(localStorage.getItem('jwt')){
      //When working with a real database fire off an http request
      //with the jwt token to get back the user data
      this.setState({
        loggedIn: true
      })
    }
  }

  logout = () => {
    localStorage.removeItem('jwt');
    this.props.history.push('/');
    this.setState({
      loggedIn:false
    })
  }

  render(){
    return (
      <div className="App">
        <Header loggedIn={this.state.loggedIn} logout={this.logout} />
        <Route path="/login" render={() => <LoginForm logIn={this.logIn} 
          error={this.state.error}/>} />
        <Route path="/profile" render={() => <Profile user={this.state.user}
        />}/>
      </div>
    );
  }
}

export default withRouter(App);
