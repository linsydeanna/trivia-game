import React, { Component } from 'react';
import '../styles/app.css';
import PlayerList from './player-list';
import Navigation from './navigation';
import HomeStart from './home-start';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Navigation />
        <div className="HomeMain">
          {React.cloneElement(this.props.children, this.props)}
          <PlayerList />
        </div>
      </div>
    );
  }
}

export default Home;
