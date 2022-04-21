import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import './App.css';
import { Container, Row, Col, Navbar, Nav, NavDropdown, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'react-bootstrap/Image'
import Navi from './components/Navi'
import Home from './components/pages/Home';
import Project1 from './components/pages/Project1';
import Project2 from './components/pages/Project2';
import Project3 from './components/pages/Project3';
import aos from 'aos';
import 'aos/dist/aos.css';

function App() {
  // These functions are used to allow the dropdown on hover with bootstraps Navbar
  const [show, setShow] = useState(false);
  const showDropdown = (e)=>{
      setShow(!show);
  }
  const hideDropdown = e => {
      setShow(false);
  }
  
  // This will allow the scroll animations to work
  useEffect(() => {
    aos.init({duration: 2000});
  }, []);

  // bork
  let audio = new Audio("/bark.mp3")

  const start = () => {
    audio.play()
  }

  const loopArr = [
    "sentence1",
    "sentence2",
    "sentence3",
    "sentence4",
    "sentence5",
    "sentence5 sentence5"
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalDelayMilliseconds = loopArr[index].length * 500;
    const interval = setInterval(() => {
      setIndex((prevIndex) => {
        // reset index if current index is greater than array size
        return prevIndex + 1 < loopArr.length ? prevIndex + 1 : 0;
      });
    }, intervalDelayMilliseconds);

    return () => clearInterval(interval);
  });

  return (
    <>
      <div className='body'>
      {/* Navigation Bar */}
      {/* <Navbar variant="dark">
      <Container>
        <Navbar.Brand style={{color: "#C4995A"}} href="#home">Rai Dela Rama</Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link style={{color: "#C4995A"}} href="#home">Home</Nav.Link>
          <Nav.Link style={{color: "#C4995A"}} href="#about">About</Nav.Link>
          <NavDropdown title="Projects" 
            id="collasible-nav-dropdown" 
            show={show}
            onMouseEnter={showDropdown} 
            onMouseLeave={hideDropdown}
            >
              <NavDropdown.Item href="#project1">Project 1</NavDropdown.Item>
              <NavDropdown.Item href="#project2">Project 2</NavDropdown.Item>
              <NavDropdown.Item href="#project3">
                Project 3
              </NavDropdown.Item>
            </NavDropdown>
        </Nav>
        </Container>
      </Navbar> */}
      <Container className='contentBody'>
        <Router>
          <Navi />        
          

          {/* Body Content */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project-1" element={<Project1 />} />
            <Route path="/project-2" element={<Project2 />} />
            <Route path="/project-3" element={<Project3 />} />
          </Routes>
        </Router>
        
        {/* Image and Speech bubble */}
        {/* <Row>
          <Col xs={9} sm={9} md={8} lg={3}>
            <Image fluid className='rounded-circle' src={require('./components/images/profilepc.jpg')}/>
          </Col>
          <Col sm={12} lg={4} className="d-none d-lg-block">
            <Image className='speech' src={require('./components/images/speech-bubble2.png')} />
          </Col>
        </Row> */}

        {/* <br></br> */}

        <br></br>

        <Row>
          <Col>
          <Image style={{ float: 'right', height: '50px', width: 'auto' }} src={require('./components/images/Annoying_Dog_sprite.gif')} onClick={start} alt="All rights to this dog belong to Toby Fox, creator of Undertale" />
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

export default App;
