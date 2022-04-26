import React, { useState } from 'react';
import './Navi.css';
import { Container, Col, Row, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function Navi() {
    // const [show, setShow] = useState(false);
    // const showDropdown = (e)=>{
    //     setShow(!show);
    // }
    // const hideDropdown = e => {
    //     setShow(false);
    // }

    const [isHovered, setIsHovered] = useState(false);
    const [isClicked, setIsClicked] = useState(false);

    return (
        <>
          <Col>
            <Row>
              <Navbar collapseOnSelect expand="lg" variant="dark" style={{ backgroundColor: 'black',  }}>
              <Navbar.Brand style={{ color: '#C4995A' }} href="/">Rai Dela Rama</Navbar.Brand>
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
                    <NavDropdown.Item href="/project-1">Project 1</NavDropdown.Item>
                    <NavDropdown.Item href="/project-2">Project 2</NavDropdown.Item>
                    <NavDropdown.Item href="/project-3">Project 3</NavDropdown.Item>
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