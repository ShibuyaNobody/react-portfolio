import React, { useEffect } from 'react';
import '../../App.css';
import { Row, Col, Button } from 'react-bootstrap';
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
            <h1>What is Doge Incorporated?</h1>
            <p>Doge Incorporated is a mock on a business website that I created as practice when first learning about HTML, CSS, and Bootstrap. I like to think this site is also a good represenatation to my personality and my love for dogs, specifically the Shiba Inu. The homepage of Doge Incorporated is heavily based on the 'doge meme,' which is why the homepage is littered with random words and phrases about the page. I like to use this as a good example of how one can manipulate and make use of rows and columns when making webpages, because each word or phrase is individually placed within its own row and column to give it that seperation look. This also allows me to change any of the phrases of the page at any moment as it is not an image made from photoshop to give it that appearance. The rest of the pages are meant to represent the coorporations goals, team members, and a contact page. The website is also designed to adjust on different views such as desktop, tablet, and mobile.</p>

            <p ><a style={{ textDecoration: 'none' }} href='https://shibuyanobody.com/dogeincorporated/' target='_blank'><Button style={{ margin: '0px auto', display: 'block' }} variant='light'>Visit the site!</Button></a></p>
            </Col>
        </Row>

        <br></br>

        <Row>
            <Col>
            <Image data-aos="fade-in" className='center' fluid src={require('./../images/dogeincorporated_home.png')} />
            </Col>
        </Row>
        
        <br></br>

        <Row>
            <Col lg={4}>
                <Image data-aos="fade-in" className='center' style={{ height: '200px' }} fluid src={require('./../images/dogeincorporated_about.png')} />
            </Col>
            <Col lg={4}>
                <Image data-aos="fade-in" className='center' style={{ height: '200px' }} fluid src={require('./../images/dogeincorporated_about2.png')} />
            </Col>
            <Col lg={4}>
                <Image data-aos="fade-in" className='center' style={{ height: '200px' }} fluid src={require('./../images/dogeincorporated_contact.png')} />
            </Col>
        </Row>
    </>
  )
}
