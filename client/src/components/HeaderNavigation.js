import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'


class HeaderNavigation extends Component{

  render(){
    return(
      <Navbar fixedTop>
        <Navbar.Collapse>
          <Nav>
            <LinkContainer to='/search'>
              <NavItem eventKey={1} >Database Search </NavItem>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }

}

export default HeaderNavigation;
