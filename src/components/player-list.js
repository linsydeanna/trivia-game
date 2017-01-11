import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

class PlayerList extends Component {
  invitePlayer() {
    console.log("invitePlayer function")
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
            <td onClick={() => this.invitePlayer()}>linsydeanna</td>
            <td className="TableColumn">14</td>
          </tr>
          <tr>
            <td className="TableColumn">2</td>
            <td onClick={() => this.invitePlayer()}>ross</td>
            <td className="TableColumn">28</td>
          </tr>
          <tr>
            <td className="TableColumn">3</td>
            <td onClick={() => this.invitePlayer()}>kimmy</td>
            <td className="TableColumn">32</td>
          </tr>
        </tbody>
      </Table>
    );
  }
}

export default PlayerList;
