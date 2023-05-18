import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Container, Nav, Navbar } from 'react-bootstrap';

function Header() {
  return (
    <Navbar className='header' bg='dark' variant='dark' expand='lg'>
      <Container>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <LinkContainer to='/'>
              <Navbar.Brand>Home</Navbar.Brand>
            </LinkContainer>

            <Nav className='me-auto  w-100  justify-content-end'>
              <LinkContainer to='/messages'>
                <Nav.Link>Messages</Nav.Link>
              </LinkContainer>

              <LinkContainer to='/contact'>
                <Nav.Link>Contact Us</Nav.Link>
              </LinkContainer>
            </Nav>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
