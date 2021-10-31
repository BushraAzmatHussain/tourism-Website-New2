import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
  const {user, logOut} = useAuth();
    return (
        <>
  <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg">
    <Container>
    <Navbar.Brand href="#home">Travel With Us</Navbar.Brand>

    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
    <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
    <Nav.Link as={HashLink} to="/about">About Us</Nav.Link>
      <Nav.Link as={HashLink} to="/home#destinations">Destinations</Nav.Link>
      <Nav.Link as={HashLink} to="/teams">Our Team</Nav.Link>

      {user.email && (
      <span>
      <Nav.Link as={HashLink} to="/addDestination">Add a New Destination</Nav.Link>

      </span>
      )}
      {user.email && (
        
        <span>
        <Nav.Link as={HashLink} to="/manageBookings">My Bookings</Nav.Link>
      </span>
      )}
      {user.email && (
       <span>
         <Nav.Link as={HashLink} to="/orders">Manage All Bookings</Nav.Link>
      </span>
      )}
      {user?.email ? 
        <Button onClick={logOut} variant="light">LogOut</Button>: 
        <Nav.Link as={Link} to="/login">Login</Nav.Link> 
      }
      <Navbar.Text>
        Signed in as: <a href="#login">{user?.displayName}</a>
      </Navbar.Text>
    </Navbar.Collapse>
    </Container>
  </Navbar>
  
</>
    );
};

export default Header;