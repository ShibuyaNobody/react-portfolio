import React, { useState, useEffect } from 'react';
import '../../App.css';
import { Container, Row, Col, Navbar, Nav, NavDropdown, Card, Button } from 'react-bootstrap';
import aos from 'aos';
import 'aos/dist/aos.css';
import Image from 'react-bootstrap/Image'

export default function Project2() {
    // This will allow the scroll animations to work
  useEffect(() => {
    aos.init({duration: 2000});
  }, []);
  return (
    <>
      <Row fluid className='banner'>
          {/* Banner image goes here */}
          <Col lg={8}>
            <br></br>
            <br></br>
          </Col>
        </Row>

        <br></br>

        <Row>
            <Col>
            <Image data-aos="fade-in" className='center' fluid src={require('./../images/ouranimelist_home.png')} />
            </Col>
        </Row>
        
        <br></br>

        <Row>
            <Col lg={4}>
                <Image data-aos="fade-in" className='center' style={{ height: '200px' }} fluid src={require('./../images/ouranimelist_home_body.png')} />
            </Col>
            <Col lg={4}>
                <Image data-aos="fade-in" className='center' style={{ height: '200px' }} fluid src={require('./../images/ouranimelist_about.png')} />
            </Col>
            <Col lg={4}>
                <Image data-aos="fade-in" className='center' style={{ height: '200px' }} fluid src={require('./../images/ouranimelist_modal.png')} />
            </Col>
        </Row>
    </>
  )
}