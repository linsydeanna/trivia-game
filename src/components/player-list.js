import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import { browserHistory } from 'react-router';

class PlayerList extends Component {
  invitePlayer() {
    console.log("invitePlayer function")
    browserHistory.push('invitecontainer');
  }
  render() {
    return (
      <Table responsive>
        <thead>
          <tr>
            <th className="TableColumn">Rank</th>
            <th>Player</th>
            <th className="TableColumn">Score</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="TableColumn">1</td>
            <td className="PlayerName" onClick={() => this.invitePlayer()}>linsydeanna</td>
            <td className="TableColumn">14</td>
          </tr>
          <tr>
            <td className="TableColumn">2</td>
            <td className="PlayerName" onClick={() => this.invitePlayer()}>ross</td>
            <td className="TableColumn">28</td>
          </tr>
          <tr>
            <td className="TableColumn">3</td>
            <td className="PlayerName" onClick={() => this.invitePlayer()}>kimmy</td>
            <td className="TableColumn">32</td>
          </tr>
        </tbody>
      </Table>
    );
  }
}

export default PlayerList;
