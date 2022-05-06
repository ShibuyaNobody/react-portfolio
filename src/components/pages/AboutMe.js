import React, { useState, useEffect } from 'react';
import './../../App.css';
import { Container, Row, Col, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import aos from 'aos';
import 'aos/dist/aos.css';
import { BsLinkedin, BsGithub, BsCloudDownloadFill  } from "react-icons/bs";

export default function AboutMe() {
  // This will allow the scroll animations to work
  useEffect(() => {
    aos.init({duration: 2000});
  }, []);

  return (
    <> 
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

        <Row data-aos="fade-right" className='titleBg d-lg-block d-md-none d-sm-none d-none'>
        <Col>
          <h1 style={{ margin: '5px 62px' }}>Skills</h1>
        </Col>
      </Row>

      <Row data-aos="fade-right" className='titleBg d-lg-none d-md-block d-sm-none'>
        <Col>
          <h1 style={{ margin: '5px 0px' }}>Skills</h1>
        </Col>
      </Row>

      <br></br>

      <Row>
        <Col style={{ marginBottom: '10px' }} data-aos="zoom-in" className='center bgColor' lg={3}>
          <br></br>
          <h4 style={{ textAlign: 'center', backgroundColor: 'black' }}>Programs</h4>
          <ul>
            <li>Adobe Illustrator</li>
            <li>Adobe Photoshop</li>
            <li>Adobe InDesign</li>
            <li>Google Suite</li>
            <li>Office 365</li>
            <li>Figma</li>
            {/* <li>Yes</li>
            <li>Yes</li>
            <li>Yes</li> */}
          </ul>
        </Col>
        <Col style={{ marginBottom: '10px' }}  data-aos="zoom-in" className='center bgColor' lg={3}>
          <br></br>
          <h4 style={{ textAlign: 'center', backgroundColor: 'black' }}>Skills</h4>
          <ul>
            <li>React</li>
            <li>JavaScript</li>
            <li>Bash</li>
            <li>Powershell</li>
            <li>Terraform</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>Docker</li>
            <li>Bootstrap</li>
          </ul>
        </Col>
        <Col style={{ marginBottom: '10px' }} data-aos="zoom-in" className='center bgColor' lg={3}>
          <br></br>
          <h4 style={{ textAlign: 'center', backgroundColor: 'black' }}>Social Skills</h4>
          <ul>
            <li>Communication</li>
            <li>Video and Remote Skills</li>
            <li>Active Listening</li>
            <li>Problem Solving</li>
            <li>Management</li>
            <li>Leadership</li>
            <li>Organization</li>
            <li>Teamwork</li>
            {/* <li>Yes</li> */}
          </ul>
        </Col>
      </Row>

        <br></br>

        <Row className=''>
          <Col className=' paddingSpace'>
            <h4 data-aos="fade-up" style={{ textAlign: 'center' }}>Check out these socials!</h4>
            <p style={{ textAlign: 'center' }}>
            <a data-aos="fade-up" data-aos-duration="10000" style={{ fontSize: '60pt', padding: '0px 40px' }} className='iconColor' href='https://www.linkedin.com/in/rachel-dela-rama/' target={'_blank'}><BsLinkedin /></a>
            <a data-aos="fade-up" data-aos-duration="6000" style={{ fontSize: '60pt', padding: '0px 40px' }} className='iconColor' href='https://github.com/ShibuyaNobody' target={'_blank'}><BsGithub /></a>
            <a data-aos="fade-up" data-aos-duration="2000" style={{ fontSize: '60pt', padding: '0px 40px' }} className='iconColor' href="https://drive.google.com/file/d/1be13iP5cijAPuqHotkEMBycITQBzChgK/view?usp=sharing" target='_blank'><BsCloudDownloadFill /></a>
            </p>
          </Col>
          {/* <Col data-aos="fade-in" data-aos-duration="4000" lg={6}>
            <Image style={{  }} fluid src={require('./../images/cardistry.png')}/>
          </Col> */}
        </Row>

    </>
  );
}
