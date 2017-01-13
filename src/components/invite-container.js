import React, { Component } from 'react';
import base from '../base'
// import { Well } from 'react-bootstrap';

class InviteContainer extends Component {
  constructor() {
    super();
    this.state = {
      invitations: []
    }
  }

  componentDidMount() {
    this.rebaseRef = base.syncState('invitations', {
      context: this,
      state: 'invitations',
      asArray: true
    })
  }

  // {this.state.invitations.map((invitation, index) => {
  //   if (invitation.sender === "Linsy Joyner") {
  //     return <Well key={index}>Your invite to {invitation.receiver} is pending.</Well>
  //   }
  // })}
  //
  // {this.state.invitations.map((invitation, index) => {
  //   if (invitation.receiver === "Linsy Joyner") {
  //     return <Well key={index}>You have been invited by {invitation.sender}</Well>
  //   }
  // })}

  render() {
    return (
      <div className="HomeLeft">
        <div className="InviteBox">
          <p>Invites Sent</p>
          <div>

          </div>
        </div>
        <div className="InviteBox">
          <p>Invites Received</p>
          <div>

            </div>
        </div>
      </div>
    );
  }
}

export default InviteContainer;
