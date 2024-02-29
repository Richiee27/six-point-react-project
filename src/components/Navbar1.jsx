import React from 'react'
import {Navbar, Container, Nav} from 'react-bootstrap'

const Navbar1 = () => {
  return (
    <div className='sticky-top'>
        <Navbar variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home" className='fw-bold fs-4'>Airsoftgun ID</Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav'/>
          <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className="ms-auto" text-center>
            <Nav.Link href="/" className='mx-2'>Home</Nav.Link>
            <Nav.Link href="/about" className='mx-2'>About</Nav.Link>
            <Nav.Link href="/forum" className='mx-2'>Forum</Nav.Link>
            <Nav.Link href="/product" className='mx-2'>Product</Nav.Link>
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Navbar1