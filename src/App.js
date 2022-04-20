import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import './App.css';
import { Container, Row, Col, Navbar, Nav, NavDropdown, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image'
import Navi from './components/Navi'
import Home from './components/pages/Home';
import AboutMe from './components/pages/AboutMe';
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
      <Navbar variant="dark">
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
      </Navbar>
      

      {/* Body Content */}
      <Container className='contentBody'>
        {/* Banner */}
        <Row fluid className='banner'>
          {/* Banner image goes here */}
          <Col className='bannerBg' lg={8}>
          <h2>Welcome to the Reapers Game!</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </Col>
        </Row>
        
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

        <Row data-aos="fade-right" className='titleBg'>
          <Col>
            <h1 style={{ margin: '5px 62px' }}>Projects</h1>
          </Col>
        </Row>

        <br></br>

        {/* <Row>
          
          <Col data-aos="zoom-in" fluid className='paddingSpace' lg={4} md={12}>
            <Card className='center' style={{ width: '18rem' }}>
              <Card.Img variant="top" src={require('./components/images/Annoying_Dog_sprite.gif')} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
                <Button style={{ backgroundColor: '#C4995A', color: 'white', bordercolor: '#C4995A' }} variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          
          <Col data-aos="zoom-in" fluid className='paddingSpace' lg={4} md={12}>
            <Card className='center' style={{ width: '18rem' }}>
              <Card.Img variant="top" src={require('./components/images/Annoying_Dog_sprite.gif')} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
                <Button style={{ backgroundColor: '#C4995A', color: 'white', bordercolor: '#C4995A' }} variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          
          <Col data-aos="zoom-in" fluid className='paddingSpace' lg={4} md={12}>
            <Card className='center' style={{ width: '18rem' }}>
              <Card.Img variant="top" src={require('./components/images/Annoying_Dog_sprite.gif')} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
                <Button style={{ backgroundColor: '#C4995A', color: 'white', borderColor: '#C4995A' }} variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row> */}

        <Row data-aos="fade-right" className='bgBoxPro' id='project1'>
          <Col lg={8}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </Col>
          <Col lg={4}>
            <Image fluid src={require('./components/images/Annoying_Dog_sprite.gif')} />
          </Col>
        </Row>

        <br></br>

        <Row data-aos="fade-left" className='bgBoxPro1' id='project2'>
          <Col lg={4}>
            <Image fluid src={require('./components/images/Annoying_Dog_sprite.gif')} />
          </Col>
          <Col lg={8}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </Col>
        </Row>

        <br></br>

        <Row data-aos="fade-right" className='bgBoxPro' id='project3'>
          <Col lg={8}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </Col>
          <Col lg={4}>
            <Image fluid src={require('./components/images/Annoying_Dog_sprite.gif')} />
          </Col>
        </Row>


        <br></br>

        <Row id="about" data-aos="fade-left" className='titleBg'>
          <Col>
            <h1 style={{ margin: '5px 62px', textAlign: 'right' }}>About Me</h1>
          </Col>
        </Row>

        <br></br>

        {/* About Me */}
        <Row data-aos="fade-up" className='bgBox'>
          <Col className='paddingSpace' lg={3}>
            <Image fluid className='rounded-circle' src={require('./components/images/raikiridesu2.png')} />
          </Col>
          <Col className='paddingSpace' lg={9}>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </Col>
        </Row>

        <br></br>

        <Row data-aos="fade-right" className='titleBg'>
          <Col>
            <h1 style={{ margin: '5px 62px' }}>Skills</h1>
          </Col>
        </Row>

        <br></br>

        <Row>
          <Col  data-aos="zoom-in" className='center bgBoxcolor' lg={3}>
            <br></br>
            <h4 style={{ textAlign: 'center', backgroundColor: 'black' }}>Programs</h4>
            <ul>
              <li>Yes</li>
              <li>Yes</li>
              <li>Yes</li>
              <li>Yes</li>
              <li>Yes</li>
              <li>Yes</li>
              <li>Yes</li>
              <li>Yes</li>
              <li>Yes</li>
            </ul>
          </Col>
          <Col  data-aos="zoom-in" className='center bgBoxcolor' lg={3}>
            <br></br>
            <h4 style={{ textAlign: 'center', backgroundColor: 'black' }}>Languages</h4>
            <ul>
              <li>Yes</li>
              <li>Yes</li>
              <li>Yes</li>
              <li>Yes</li>
              <li>Yes</li>
              <li>Yes</li>
              <li>Yes</li>
              <li>Yes</li>
              <li>Yes</li>
            </ul>
          </Col>
          <Col  data-aos="zoom-in" className='center bgBoxcolor' lg={3}>
            <br></br>
            <h4 style={{ textAlign: 'center', backgroundColor: 'black' }}>Social Skills</h4>
            <ul>
              <li>Yes</li>
              <li>Yes</li>
              <li>Yes</li>
              <li>Yes</li>
              <li>Yes</li>
              <li>Yes</li>
              <li>Yes</li>
              <li>Yes</li>
              <li>Yes</li>
            </ul>
          </Col>
        </Row>

        <br></br>

        <Row data-aos="fade-up" className='bgBoxcolor'>
          <Col lg={5}>
            <h4 style={{ textAlign: 'center' }}>Social</h4>
          </Col>
          <Col lg={7}>
            Put social icons here with clickable links to LinkedIn, GitHub, and such. Right align?
          </Col>
        </Row>

        <br></br>

        <Row>
          <Col>
          <Image style={{ float: 'right', height: '50px', width: 'auto' }} src={require('./components/images/Annoying_Dog_sprite.gif')} onClick={start} />
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
