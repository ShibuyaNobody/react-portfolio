import React, { useState } from 'react';
import './Navi.css';
import { Col, Row, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navi() {
    const [isHovered, setIsHovered] = useState(false);
    const [isClicked, setIsClicked] = useState(false);

    return (
        <>
          <Col>
            <Row>
              <Navbar collapseOnSelect expand="lg" variant="dark" style={{ backgroundColor: 'black',  }}>
              <Navbar.Brand  href="/">Rai Dela Rama</Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ms-auto">
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="/about-me">About</Nav.Link>
                  <NavDropdown title="Projects" id="collasible-nav-dropdown"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  onToggle={() => setIsClicked(!isClicked)}
                  show={isClicked || isHovered}>
                    <NavDropdown.Item href="/project-1">Njoy Games & Comics</NavDropdown.Item>
                    <NavDropdown.Item href="/project-2">Doge Incorporated</NavDropdown.Item>
                    <NavDropdown.Item href="/project-3">Our Anime List</NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
            </Row>
          </Col>
    
        </>
    )
}

export default Navi;