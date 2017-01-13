import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import { browserHistory } from 'react-router';
import base from '../base'

class PlayerList extends Component {
  constructor() {
    super();
    this.state = {
      players: []
    }
  }

  invitePlayer(playerName) {
    console.log(playerName)
    browserHistory.push('invitecontainer');
  }

  componentDidMount() {
    this.rebaseRef = base.syncState('users', {
      context: this,
      state: 'players',
      asArray: true
    })
  }

  render() {
    console.log("players in render ", this.state.players)
    return (
      <Table responsive>
        <thead>
          <tr>
            <th className="TableColumn">Rank</th>
            <th onClick={() => this.getPlayers()}>Player</th>
            <th className="TableColumn">Score</th>
          </tr>
        </thead>
        <tbody>
          {this.state.players.map((player, index) =>
            <tr key={index}>
              <td className="TableColumn">1</td>
              <td className="PlayerName" onClick={() => this.invitePlayer(player.name)}>{player.name}</td>
              <td className="TableColumn">14</td>
            </tr>
          )}
        </tbody>
      </Table>
    );
  }
}

export default PlayerList;
