import React, { Component } from 'react';
import base from '../base'
import { browserHistory } from 'react-router';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      user: {}
    }
    this.authHandler = this.authHandler.bind(this);
  }

  authHandler(error, data) {
  if (error) {
    console.log(error)
  } else {
    console.log(data)
    this.setState({
      user: data.user
    })
  }
}

  handleClick(event) {
    event.preventDefault();
    base.authWithOAuthPopup('github', this.authHandler)
    .then(() => {
      const loggedInUser = base.auth().currentUser;
      if (loggedInUser != null) {
        loggedInUser.providerData.forEach(profile => {
          const { user } = this.state
          base.post(`users/${user.uid}`, {
            data: {
              name: user.displayName,
              username: user.displayName,
              available: true,
              gameswon: 0
            }
          });
        })
      }
      browserHistory.push('/home');
    })
  }

  render() {
    return (
      <div className="Login">
        <div className="Login" onClick={(event) => this.handleClick(event)}>Log in</div>
      </div>
    );
  }
}

export default Login;
