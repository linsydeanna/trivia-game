import React, { Component } from 'react';
import base from '../base'
import { browserHistory } from 'react-router';
import { Button } from 'react-bootstrap';

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
    console.log("this.refs.username.value is ", this.refs.username.value)
    base.authWithOAuthPopup('github', this.authHandler)
    .then(() => {
      const loggedInUser = base.auth().currentUser;
      if (loggedInUser != null) {
        loggedInUser.providerData.forEach(profile => {
          const { user } = this.state
          base.post(`users/${user.uid}`, {
            data: {
              name: user.displayName,
              username: this.refs.username.value,
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
        <form onSubmit={(event) => this.storeUsername(event)}>
          <input ref="username"/>
          <Button type="submit" className="Login" onClick={(event) => this.handleClick(event)}>
            Log in
          </Button>
        </form>
      </div>
    );
  }
}

export default Login;
