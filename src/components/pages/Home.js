import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Navbar, Nav, NavDropdown, Card, Button } from 'react-bootstrap';
import '../../App.css'
import aos from 'aos';
import 'aos/dist/aos.css';
import Image from 'react-bootstrap/Image'
import { Link } from 'react-router-dom';

export default function Home() {
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
  return (
    <>
      {/* Banner */}
      <Row fluid className='banner'>
          {/* Banner image goes here */}
          <Col data-aos="fade" className='bannerBg' lg={5}>
          <h2>The names Rai! Got it memorized?</h2>
          <p style={{ textAlign: 'right' }}>Aspiring Web Developer</p>
          </Col>
      </Row>

      <Row data-aos="fade-right" className='titleBg'>
        <Col>
          <h1 style={{ margin: '5px 62px' }}>Projects</h1>
        </Col>
      </Row>

      <br></br>

      <Row data-aos="fade-right" className='bgBoxPro' id='project1'>
        <Col lg={8}>
          <p className='bodyText'>This project was one of my assignments for my UI/UX Design class in which we take a website and re-design it. The website I had chosen to re-design is <a className='reference' href='https://www.njoy.us/'>Njoy Games and Comics</a>. Njoy Games & Comics is a small comic book store that is located along Reseda Blvd in Northridge, California. They have been in business from 2002 to today. They specialize in the sales of comic books, playing cards, and other collectibles.
          <br></br>
          <br></br>
          <Link to='/project-1'><Button style={{ float: 'right' }} variant='light'>Check it out!</Button></Link></p>
        </Col>
        <Col lg={4}>
          <Image fluid className='center' src={require('./../images/njoy_logo_redo3.png')} />
        </Col>
      </Row>

      <br></br>

      <Row data-aos="fade-left" className='bgBoxPro1' id='project2'>
        <Col lg={4}>
          <Image className='center' fluid src={require('./../images/Annoying_Dog_sprite.gif')} />
        </Col>
        <Col lg={8}>
          <p className='bodyText'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            <br></br>
            <br></br>
            <Link to='/project-2'><Button variant='light'>Check it out!</Button></Link></p>
        </Col>
      </Row>

      <br></br>

      <Row data-aos="fade-right" className='bgBoxPro' id='project3'>
        <Col lg={8}>
          <p className='bodyText' >This design and website, Our Anime List, is the senior design project for one of my college classes, and it is inspired by the popular website, <a className='reference' href='https://myanimelist.net/'>MyAnimeList</a>. This project was done in collaboration with my group mates Monica Luong, Kimberly Rembamonte, Ye lu, and I. The site was created by using React, which is a free and open-source front-end JavaScript library for building user interfaces based on UI components.
          <br></br>
          <br></br>
          <Link to='/project-3'><Button style={{ float: 'right' }} variant='light'>Check it out!</Button></Link></p>
          
        </Col>
        <Col lg={4}>
          <Image fluid className='center' style={{ height: '300px', width: 'auto' }} src={require('./../images/ouranimelist_icon_pog.png')} />
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
          <Image fluid className='rounded-circle' src={require('./../images/raikiridesu2.png')} />
        </Col>
        <Col className='paddingSpace' lg={9}>
          <p className='bodyText'>Hi! My name is Rai, and I'm aspiring to be a web developer. I studied at California State University of Northridge and majored in Computer Information Technology with a minor of Art.</p>
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
            <li>Adobe Illustrator</li>
            <li>Adobe Photoshop</li>
            <li>Adobe InDesign</li>
            <li>Google Suite</li>
            <li>Office 365</li>
            {/* <li>Yes</li>
            <li>Yes</li>
            <li>Yes</li>
            <li>Yes</li> */}
          </ul>
        </Col>
        <Col  data-aos="zoom-in" className='center bgBoxcolor' lg={3}>
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
        <Col  data-aos="zoom-in" className='center bgBoxcolor' lg={3}>
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

      <Row data-aos="fade-up" className='bgBoxcolor'>
        <Col lg={5}>
          <h4 style={{ textAlign: 'center' }}>Checkout these links as well!</h4>
        </Col>
        <Col lg={7}>
          Put social icons here with clickable links to LinkedIn, GitHub, and such. Right align?
        </Col>
      </Row>
    </>
  );
}
