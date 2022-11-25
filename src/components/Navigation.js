/*Note: Always start component names with a capital letter. React treats components starting with lowercase letters as DOM tags.
For example, <div /> represents an HTML div tag, but <Welcome /> represents a component and requires Welcome to be in scope.
To learn more about the reasoning behind this convention, please read JSX In Depth.*/ 

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-bootstrap'

function Navigation() {
  return (
    <Navbar bg="light" expand="sm">
      <Container>
        <Navbar.Brand>Amy's Site</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/directory">Employee Directory</NavLink>
            <NavLink href="/add">Add Employee</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;