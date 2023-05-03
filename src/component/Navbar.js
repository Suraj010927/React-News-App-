import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';

function NavBar(props) {
  const [direction, setDirection] = useState('horizontal');

  function directionChange(e) {
    setDirection(e);
    props.onDirectionChange(e);
  }

  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="#home">News App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/IN">
              INDIA
            </Nav.Link>
            <Nav.Link as={NavLink} to="/US">
              USA
            </Nav.Link>
            <NavDropdown title="Orientation" id="basic-nav-dropdown">
              <NavDropdown.Item onClick={() => directionChange('horizontal')}>
                Horizontal
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => directionChange('vertical')}>
                Vertical
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
