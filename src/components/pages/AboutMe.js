import React, { useState } from 'react';
import './../../App.css';
import { Container, Row, Col, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image'

export default function AboutMe() {

  return (
    <>
      <div className='body'>
      {/* Navigation Bar */}
      
      {/* <Navbar variant="dark">
      <Container>
        <Navbar.Brand style={{color: "#C4995A"}} href="#home">Rai Dela Rama</Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link style={{color: "#C4995A"}} href="#home">Home</Nav.Link>
          <Nav.Link style={{color: "#C4995A"}} href="#features">About</Nav.Link>
          <NavDropdown title="Projects" 
            id="collasible-nav-dropdown" 
            show={show}
            onMouseEnter={showDropdown} 
            onMouseLeave={hideDropdown}
            >
              <NavDropdown.Item href="#action3">Project 1</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Project 2</NavDropdown.Item>
              <NavDropdown.Item href="#action5">
                Project 3
              </NavDropdown.Item>
            </NavDropdown>
        </Nav>
        </Container>
      </Navbar> */}
      

      {/* Body Content */}
      <Container className='contentBody'>
        {/* Banner */}
        <Row fluid className='banner'>
          {/* Banner image goes here */}
        </Row>
        
        {/* Image and Speech bubble */}
        <Row>
          <Col xs={9} sm={9} md={8} lg={3}>
            <Image fluid className='rounded-circle' src={require('./../images/profilepc.jpg')}/>
          </Col>
          <Col sm={12} lg={4} className="d-none d-lg-block">
            <Image className='speech' src={require('./../images/speech-bubble2.png')} />
          </Col>
          {/* <Col lg={12}>
            <Image fluid className='speech' src={require('./components/images/speech-bubble2.png')} />
          </Col> */}
        </Row>

        <br></br>

        {/* Body Content */}
        <Row>
          <Col className='content'>
            <h1>Projects</h1>
          </Col>
        </Row>

        {/* Footer */}
        <Row className='footer'>
          <Col>
            This is a footer uwu
          </Col>
        </Row>
      </Container>
      </div>
    </>
  );
}
