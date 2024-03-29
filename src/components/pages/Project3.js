import React, { useEffect } from 'react';
import '../../App.css';
import { Row, Col } from 'react-bootstrap';
import aos from 'aos';
import 'aos/dist/aos.css';
import Image from 'react-bootstrap/Image'

export default function Project3() {
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
          <Col lg={8}>
            <br></br>
            <h3>What is Our Anime List?</h3>
            <p>This project was designed and inspired by the popular website, <a className='reference' href='https://myanimelist.net/'>MyAnimeList</a>. The purpose of this website was designed to provide users the ability to search for anime, save anime they find interest in, and keep track of series they are currently watching. This project was done in collaboration with my group mates Monica Luong, Kimberly Rembamonte, Ye lu, and I. The site was created by using React, which is a free and open-source front-end JavaScript library for building user interfaces based on UI components.</p>
          </Col>
          <Col>
            <Image style={{ height: '300px', width: 'auto', margin: '0px auto', display: 'block' }} fluid src={require('./../images/ouranimelist_icon_pog.png')} />
          </Col>
        </Row>

        <br></br>

        <Row>
          <Col lg={3}>
            <Image data-aos="fade-in" className='center' fluid src={require('./../images/OAL_Wireframe1.jpg')} />
          </Col>
          <Col lg={3}>
            <Image data-aos="fade-in" className='center' fluid src={require('./../images/OAL_Wireframe1.jpg')} />
          </Col>
          <Col>
            <h3>Wireframes</h3>
            <p>When designing Our Anime List we tried took inspiration for it's layout through other Anime Websites. Through our research we tried to find the best possible appearance that would work with what we want to accomplish in the end, and also be easy for the user to use and navigate through. What you see on the left here are the original wireframes I had put together when trying to figure out how to initially layout our site. These two wireframes represent the homepage and profile page of Our Anime List.</p>
          </Col>
        </Row>

        <br></br>

        <Row>
          <Col>
            <h1>The original design</h1>
          </Col>
        </Row>

        <br></br>

        <Row>
          <Col>
            <p>When we had first started working on Our Anime List we had no experience with React yet, so the page was primarily made using basic HTML with the help of the Bootstrap library. The screenshots below are what the original website used to look like before we had decided to make the switch over to React. The main reason we wanted to switch React was so that we can get the My Anime List API to connect together with our webpage.</p>
          </Col>
        </Row>

        <br></br>

        <Row>
          <Col lg={4}>
            <Image data-aos="fade-in" className='center' fluid src={require('./../images/og_ouranimelist_homepage.png')} />
          </Col>
          <Col lg={4}>
            <Image data-aos="fade-in" className='center' fluid src={require('./../images/og_ouranimelist_about.png')} />
          </Col>
          <Col lg={4}>
            <Image data-aos="fade-in" className='center' fluid src={require('./../images/og_ouranimelist_profile.png')} />
          </Col>
        </Row>

        <br></br>

        <Row>
          <Col>
            <h1>The redesign</h1>
          </Col>
        </Row>

        <br></br>

        <Row>
          <Col>
            <p>Redesigning our website was a step that we weren't expecting to make, but we had decided to go forward with it after deciding that it looked cleaner and gave us more opportunity to experiment and learn new things with the switch over to React. The first tasks we wanted to get out of the way when deciding this change was adding and making adjustments to our navigation bar that had a better dropdown menu system. The next step that we took and wanted to try out was the addition of a log in modal. We wanted to do this to make the page feel more dynamic so that whenever you click on the login portion of the page it wouldn't take you to a new page, but instead appear over whatever page you clicked it on. After that we decided to implement the API into our design and first got the suggestions and top animes to load up on the homepage, and then began to work on the search feature of Our Anime List. These features will all lead to pages that we have designed for our website, but during initial testing we had the API take us to the actual My Anime List page to make sure that the redirection was working to begin with and going to the right pages.</p>
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
