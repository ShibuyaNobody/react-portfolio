import React from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';

export default function Contact() {
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
                <h1>Feel free to contact me!</h1>
                <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Tell me what's up!</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <Button style={{ float: 'right', backgroundColor: '#C4995A'  }} variant="primary" type="submit">
                    Submit
                </Button>
                </Form>
            </Col>
            <Col lg={4}>
                <Image fluid data-aos="fade-up" className='speech' src={require('./../images/jackfrost.png')} />
            </Col>
        </Row>
    </>
  );
}
