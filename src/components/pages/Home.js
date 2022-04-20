import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../../App.css'

export default function Home() {
  return (
    <>
    <Container>
        <br></br>

        {/* Body Content */}
        <Row>
        <Col className='content'>
            <h1>Projects</h1>
        </Col>
        </Row>
    </Container>
    </>
  );
}
