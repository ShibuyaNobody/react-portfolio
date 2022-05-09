import React, { useState, useEffect } from 'react';
import {  Row, Col, Button } from 'react-bootstrap';
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
  let audio = new Audio("../assets/bark.mp3")

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
          <p style={{ textAlign: 'right' }}>Web Developer and UI/UX Designer</p>
          </Col>
      </Row>

      <Row data-aos="fade-right" className='titleBg  d-lg-block d-md-none d-sm-none d-none'>
        <Col>
          <h1 style={{ margin: '5px 62px' }}>Projects</h1>
        </Col>
      </Row>
      <Row data-aos="fade-right" className='titleBg d-lg-none d-md-block d-sm-none'>
        <Col>
          <h1 style={{ margin: '5px 0px' }}>Projects</h1>
        </Col>
      </Row>

      <br></br>

      <Row data-aos="fade-right" className='bgBoxPro' id='project1'>
        <Col lg={4} className="d-lg-none d-md-block d-sm-none">
          <Image fluid className='center' src={require('./../images/njoy_logo_redo3.png')} style={{ paddingTop: '60px' }} />
        </Col>
        <Col lg={8}>
          <p className='bodyText'>My expertise in UI.UX Design shone in my redesign of the website <a className='reference' href='https://www.njoy.us/'>Njoy Games and Comics</a>. Njoy Games & Comics is a small comic book store that is located along Reseda Blvd in Northridge, California. They have been in business from 2002 to today. I optimized the page by reformatting the navigation bar to highlight products that they sell rather than the excessive navigation bar they had previously, adjusted web page to provide the actual products being sold, and such.. They specialize in the sales of comocs books, playimng cards, and other collectibles. I highlighted the business' goals of selling more of these products by bringing more attention to the products that they primarily focus on selling. Previously, the site had many links that would lead to empty pages and search results, making it difficult for the user to find products on the webpage. I also created a redesign of the logo to look more modern and fit better with the theme of the site.
          <br></br>
          <br></br>
          <Link to='/project-1'><Button style={{ float: 'right' }} variant='light'>Check it out!</Button></Link></p>
        </Col>
        <Col lg={4} className="d-none d-lg-block">
          <Image fluid className='center' src={require('./../images/njoy_logo_redo3.png')} style={{ paddingTop: '60px' }} />
        </Col>
      </Row>

      <br></br>

      <Row data-aos="fade-left" className='bgBoxPro1' id='project2'>
        <Col lg={4}>
          <Image className='center' style={{ paddingTop: '40px' }} fluid src={require('./../images/dogeincorporated_Logo.png')} />
        </Col>
        <Col lg={8}>
          <p className='bodyText'>This project is a mockup of a company website that provides information about the company and how to contact them. This project was done purely for practice to test my capabilities with Bootstrap, but making it my own at the same time.
            <br></br>
            <br></br>
            <Link to='/project-2'><Button variant='light'>Check it out!</Button></Link></p>
        </Col>
      </Row>

      <br></br>

      <Row data-aos="fade-right" className='bgBoxPro' id='project3'>
        <Col lg={4} className='d-lg-none d-md-block d-sm-none'>
          <Image fluid className='center' style={{ height: '300px', width: 'auto' }} src={require('./../images/ouranimelist_icon_pog.png')} />
        </Col>
        <Col lg={8}>
          <p className='bodyText' >This project was designed and inspired by the popular website, <a className='reference' href='https://myanimelist.net/'>MyAnimeList</a>. The purpose of this website was designed to provide users the ability to search for anime, save anime they find interest in, and keep track of series they are currently watching. This project was done in collaboration with my group mates Monica Luong, Kimberly Rembamonte, Ye lu, and I. The site was created by using React, which is a free and open-source front-end JavaScript library for building user interfaces based on UI components.
          <br></br>
          <br></br>
          <Link to='/project-3'><Button style={{ float: 'right' }} variant='light'>Check it out!</Button></Link></p>
          
        </Col>
        <Col lg={4} className="d-none d-lg-block">
          <Image fluid className='center' style={{ height: '300px', width: 'auto' }} src={require('./../images/ouranimelist_icon_pog.png')} />
        </Col>
      </Row>


      <br></br>

      <Row id="about" data-aos="fade-left" className='titleBg d-lg-block d-md-none d-sm-none d-none'>
        <Col>
          <h1 style={{ margin: '5px 62px', textAlign: 'right' }}>About Me</h1>
        </Col>
      </Row>

      <Row id="about" data-aos="fade-left" className='titleBg d-lg-none d-md-block d-sm-none'>
        <Col>
          <h1 style={{ margin: '5px 0px', textAlign: 'right' }}>About Me</h1>
        </Col>
      </Row>

      <br></br>

      {/* About Me */}
      <Row data-aos="fade-up" className='bgColor'>
        <Col className='paddingSpace' lg={3}>
          <Image fluid className='rounded-circle' src={require('./../images/raikiridesu2.png')} />
        </Col>
        <Col className='paddingSpace' lg={9}>
          <p className='bodyText'>Hi! My name is Rai, and I'm a Web Developer and UI/UX Designer. I studied at California State University of Northridge and majored in Computer Information Technology with a minor of Art. I decided to pursue Web Development and UI/UX Designer because it felt like the perfect balance between my two worlds. If you want to learn a little bit about me and what I can do checkout my about me!
          <br></br>
          <br></br>
          <Link to='/about-me'><Button variant='light'>Learn more here!</Button></Link></p>
        </Col>
      </Row>
    </>
  );
}
