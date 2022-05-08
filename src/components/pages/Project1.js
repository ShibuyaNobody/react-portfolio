import React, { useState, useEffect } from 'react';
import '../../App.css';
import { Row, Col } from 'react-bootstrap';
import aos from 'aos';
import 'aos/dist/aos.css';
import Image from 'react-bootstrap/Image'

export default function Project1() {
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
            <h3>What is Njoy Game & Comics?</h3>
            <p>Njoy Games & COmics is a small comic book store that is located along Reseda Blvd, Northridge, California. They have been in business from 2002 to today. They specialize in the sales of comic books, playing cards, and other collectibles.</p>
          </Col>
          <Col>
            <Image fluid src='https://www.njoy.us/includes/templates/bohase/images/logo/logo_sm3.gif' />
          </Col>
        </Row>

        <br></br>

        <Row>
          <Col>
            <h3>So why the redesign?</h3>
            <p>The reason I had decided to go ahead and redesign this site is because there were a couple of issues on the page itself. To start things off, lets look at their current Navigation Bar.</p>
          </Col>
        </Row>

        <br></br>

        <Row>
          <Col lg={4}>
            <ul>
              <li>
                There are many navigation options that make it extend to a second row, creating a sort of widow look on the navigation bar.
              </li>
              <li>
                Not all the navigation options lead to the proper page
              </li>
              <li>
                Search bar is awkwardly placed on the bottom right
              </li>
              <li>
                Dropdown for the navigation items stop working when you click on any of them
              </li>
            </ul>
          </Col>
          <Col>
            <Image fluid className='center' src={require('./../images/njoy_searchbar.png')}/>
          </Col>
        </Row>

        <br></br>

        <Row>
          <Col>
          <Image fluid className='center' src={require('./../images/njoy_footer.png')}/>
          </Col>
          <Col>
            <ul>
              <li>
                Some of the images on the footer are awkwardly clipping onto the main content of the page
              </li>
              <li>
                When you go onto other pages on the site the footer disappears
              </li>
            </ul>
          </Col>
        </Row>

        {/* <br></br>

        <Row>
          <Col>
            <h3>Some other issues</h3>
            <ul>
              <li>
                Pages were unorganized and messy
              </li>
              <li>
                A lot of the navigation items were pointless and led nowhere
              </li>
            </ul>
          </Col>
        </Row> */}

        <br></br>

        <Row>
          <Col>
            <h1>The redesign</h1>
          </Col>
        </Row>

        <br></br>

        <Row>
            <Col>
            <Image data-aos="fade-in" className='center' fluid src={require('./../images/njoy_banner.png')} />
            </Col>
        </Row>
        
        <br></br>

        <Row>
            <Col lg={4}>
                <Image data-aos="fade-in" className='center' style={{ height: '200px' }} fluid src={require('./../images/njoy_body.png')} />
            </Col>
            <Col lg={4}>
                <Image data-aos="fade-in" className='center' style={{ height: '200px' }} fluid src={require('./../images/njoy_shoppingcart.png')} />
            </Col>
            <Col lg={4}>
                <Image data-aos="fade-in" className='center' style={{ height: '200px' }} fluid src={require('./../images/njoy_comics.png')} />
            </Col>
        </Row>

        <br></br>

        <Row>
          <Col>
            <p>For this websites redesign, I wanted to give the page a more comic book feel to it, while also making it look more modern and appearing as well. From what you saw of the previous images you can see how boring and out of date the site used to look. There wasn't much of a color scheme to the whole site, and it appeared to be very bland. Here is the original style tile and logo redesign I created for the site.</p>
          </Col>
        </Row>

        <br></br>

        <Row>
          <Col>
            <Image style={{ padding: '80px', margin: '0px auto', display: 'block' }} fluid src={require('./../images/njoy_logo_redo3.png')} />
          </Col>
          <Col>
            <Image style={{ margin: '0px auto', display: 'block' }} fluid src={require('./../images/njoy_styletile.png')} />
          </Col>
        </Row>
    </>
  )
}
