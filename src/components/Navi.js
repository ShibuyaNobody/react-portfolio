import React, { useState } from 'react';
import './Navi.css';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function Navi() {
    // const [show, setShow] = useState(false);
    // const showDropdown = (e)=>{
    //     setShow(!show);
    // }
    // const hideDropdown = e => {
    //     setShow(false);
    // }

    const [isHovered, setIsHovered] = useState(false);
    const [isClicked, setIsClicked] = useState(false);

    return (
        <><div className='titleBg'>
            {/* <Navbar variant="dark">
      <Container>
        <Navbar.Brand style={{color: "#C4995A"}} href="/">Rai Dela Rama</Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link style={{color: "#C4995A"}} href="/">Home</Nav.Link>
          <Nav.Link style={{color: "#C4995A"}} href="about-me">About</Nav.Link>
          <NavDropdown title="Projects" 
            id="collasible-nav-dropdown" 
            // show={show}
            // onMouseEnter={showDropdown} 
            // onMouseLeave={hideDropdown}

            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onToggle={() => setIsClicked(!isClicked)}
            show={isClicked || isHovered}
            >
              <NavDropdown.Item>
                  <Link to='/project-1'>
                    Project 1
                  </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to='project-2'>
                  Project 2
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to='project-3'>
                  Project 3
                </Link>
              </NavDropdown.Item>
            </NavDropdown>
        </Nav>
        </Container>
      </Navbar> */}

      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="/">

        Rai Dela Rama
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/about-me">About</Nav.Link>
          <NavDropdown title="Dropdown" id="collasible-nav-dropdown"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onToggle={() => setIsClicked(!isClicked)}
          show={isClicked || isHovered}>
            <NavDropdown.Item href="/project-1">Project 1</NavDropdown.Item>
            <NavDropdown.Item href="/project-2">Project 2</NavDropdown.Item>
            <NavDropdown.Item href="/project-3">Project 3</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar></div>
        </>
    )
}

export default Navi;