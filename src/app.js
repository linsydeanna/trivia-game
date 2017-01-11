import React, { Component } from 'react';
import './styles/app.css';
import axios from 'axios';

class App extends Component {
  getData() {
    axios.get('http://tiy-orl-proxy.herokuapp.com/trivia?limit=5&category=star+wars')
      .then((resp) => {
        console.log(resp);
      })
      .catch(err => {
        console.log(err);
      });
    }
  render() {
    return (
      <div className="App">
      {this.props.children}
      </div>
    );
  }
}

export default App;
