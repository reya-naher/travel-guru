import React from 'react';
import './Header.css'
import { Navbar, Nav, FormControl, Button, Container} from 'react-bootstrap';
import logo from '../../images/Logo.png'

const Header = () => {
  return (
    <Container>
  <Navbar variant="light">
  <Navbar.Brand href="#home">
      <img
        alt=""
        src={logo}
        width="100"
        height="50"
        className="d-inline-block align-top"
      />{' '}
        </Navbar.Brand>
          <FormControl style={{ "width": "20%" }} type="text" placeholder="Search Your Destination" className="mr-sm-2" />
    <Nav className="mr-auto">
      <Nav.Link href="#home">News</Nav.Link>
      <Nav.Link href="#features">Destination</Nav.Link>
      <Nav.Link href="#pricing">Blog</Nav.Link>
        <Nav.Link href="#pricing">Contact</Nav.Link>
    </Nav>
      <Button variant="outline-primary">Login</Button>
  </Navbar>
    </Container>
  );
};

export default Header;