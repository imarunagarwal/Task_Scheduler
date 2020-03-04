import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Glyphicon, Nav, Navbar, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './NavMenu.css';

export class NavMenu extends Component {
  displayName = NavMenu.name

  render() {
    return (
      <Navbar inverse fixedTop fluid collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to={'/'}>Task_Scheduler_FrontEnd</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav> 
            <LinkContainer to={'/TodoHomePage'}>
                        <NavItem>
                            <Glyphicon glyph='education' /> To do Home
              </NavItem>
                    </LinkContainer>
                    <LinkContainer to={'/UserSignIn'}>
                        <NavItem>
                            <Glyphicon glyph='education' />  Sign In
              </NavItem>
                    </LinkContainer>
                    <LinkContainer to={'/UserSignUp'}>
                        <NavItem>
                            <Glyphicon glyph='education' />  Sign Up
              </NavItem>
                    </LinkContainer>
                     
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
