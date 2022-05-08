import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'react-bootstrap/Image'
import Navi from './components/Navi'
import Home from './components/pages/Home';
import AboutMe from './components/pages/AboutMe';
import Project1 from './components/pages/Project1';
import Project2 from './components/pages/Project2';
import Project3 from './components/pages/Project3';
import Contact from './components/pages/Contact';
import aos from 'aos';
import 'aos/dist/aos.css';
import { BsLinkedin, BsGithub  } from "react-icons/bs";
import ScrollButton from './components/ScrollButton';

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
      <Container className='contentBody'>
        <Router>
          <Navi />        
          

          {/* Body Content */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-me" element={<AboutMe />} />
            <Route path="/project-1" element={<Project1 />} />
            <Route path="/project-2" element={<Project2 />} />
            <Route path="/project-3" element={<Project3 />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>

        <br></br>

        {/* Dog */}
        <Row>
          <Col>
          <Image style={{ float: 'right', height: '50px', width: 'auto' }} src={require('./components/images/Annoying_Dog_sprite.gif')} onClick={start} alt="All rights to this dog belong to Toby Fox, creator of Undertale" />
          </Col>
        </Row>

        {/* Footer */}
        <Row className='footer'>
          <Col lg={6}>
            <h5>Rai Dela Rama</h5>
            <p style={{ fontSize: '10pt' }}>This page was built and designed using React.js</p>
            
          </Col>
          <Col lg={3}>
            <p style={{ fontSize: '10pt' }}>
              <a className='textColor' href='/about-me'>About Me</a> <br />
              <a className='textColor' href='/contact'>Contact</a> <br />
              <a className='textColor' href="https://drive.google.com/file/d/1be13iP5cijAPuqHotkEMBycITQBzChgK/view?usp=sharing" target={'_blank'}>Resume</a>
            </p>
          </Col>
          <Col lg={3}>
            <p>
              <a style={{ fontSize: '10pt' }} className='textColor' href='mailto:raidelarama@gmail.com'>raidelarama@gmail.com</a> <br />
              <a style={{ fontSize: '20pt' }} className='iconColor' href='https://www.linkedin.com/in/rachel-dela-rama/' target={'_blank'}><BsLinkedin /></a> <a style={{ fontSize: '20pt' }} className='iconColor' href='https://github.com/ShibuyaNobody' target={'_blank'}><BsGithub /></a>
            </p>
          </Col>
        </Row>
      </Container>
      <ScrollButton />
      </div>
    </>
  );
}

export default App;
