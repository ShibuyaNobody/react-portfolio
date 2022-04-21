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
        <h1>Project 2</h1>
    </>
  )
}
