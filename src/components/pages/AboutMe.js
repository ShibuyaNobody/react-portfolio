import React, { useState, useEffect } from 'react';
import './../../App.css';
import { Container, Row, Col, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import aos from 'aos';
import 'aos/dist/aos.css';

export default function AboutMe() {
  // This will allow the scroll animations to work
  useEffect(() => {
    aos.init({duration: 2000});
  }, []);

  return (
    <>
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
        {/* Banner */}
        <Row fluid className='banner'>
          {/* Banner image goes here */}
          <br></br>
          <br></br>
        </Row>
        
        {/* Image and Speech bubble */}
        <Row>
          <Col xs={9} sm={9} md={8} lg={3}>
            <Image fluid data-aos="fade" className='profile' src={require('./../images/profilepc.jpg')}/>
          </Col>
          <Col sm={12} lg={4} className="d-none d-lg-block">
            <Image data-aos="fade-up" className='speech' src={require('./../images/speech-bubble2.png')} />
          </Col>
          {/* <Col lg={12}>
            <Image fluid className='speech' src={require('./components/images/speech-bubble2.png')} />
          </Col> */}
        </Row>

        <br></br>

        {/* Body Content */}
        <Row data-aos="slide-up">
          <Col className='bgColor paddingSpace'>
            
          <h5 style={{ textAlign: 'center' }}><i>"The World Ends With You. If you want to enjoy life, expand your world. You gotta push your horizons as far as they'll go."</i></h5>

          <br></br>

          <p className='tab'>
          Hi! My name is Rai and I'm an aspiring web developer who studied at California State University of Northridge. I majored in Computer Information Technology and had a minor of Art. Putting these two together you get the best of both worlds, or well, for me at least that is the best of both worlds. I'm someone who has always had an interest in computers and art, so what better way to put those together by becoming a web developer! It actually took me some time to really find what I loved doing, but after taking a couple of classes while attending CSUN I found how much I really enjoyed developing web pages and trying to make them to the best of my ability. I could spend hours just sitting on a piece of code and making sure the site populates just the way I like it!</p>

          <p className='tab'>Besides developing web pages I like to think of myself as a hobbyist! Some hobbies I enjoy are Cardistry, which is the art of juggling cards, playing with Balisongs, Yo-yos, skating, music, and bowling! If I'm not doing any of these I'll be one to try and get some time to play some video games when I can!</p>
          </Col>
        </Row>

        <br></br>

        <Row className='bgColor'>
          <Col data-aos="slide-up" className='bgBox paddingSpace' lg={5}>
            <h4>Check out these socials!</h4>
          </Col>
          <Col data-aos="slide-up" lg={6}>
            <Image style={{ borderRadius: '15px' }} fluid src={require('./../images/cardistry.png')}/>
          </Col>
        </Row>

    </>
  );
}
