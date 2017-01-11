import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

class Navigation extends Component {
  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">StarWars Trivia</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem href="#">Log Out</NavItem>
        </Nav>
      </Navbar>
    );
  }
}

export default Navigation;
