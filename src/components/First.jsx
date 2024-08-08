import React from "react";
import { Nav, Navbar, Container, Form } from "react-bootstrap";
const First = () => {
  return (
    <div className="sticky-top">
      <Navbar className="navbar navbar-expand-lg navbar-dark bg-dark" >
        <Container>
          <Navbar.Brand href="/" className="fw-bold fs-4 me-4">
            Tac Commerce
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto text-center">
              <Form
                className="d-flex input-group ms-2 pt-4"
                method="post"
                action="#"
              >
              </Form>
              <Nav.Link href="/create" className="mx-2 ">
                Jual
              </Nav.Link>
              <Nav.Link href="/jual" className="mx-2">
                Belanja
              </Nav.Link>
              <Nav.Link href="/about" className="mx-2">
                Profil
              </Nav.Link>
              <Nav.Link href="/login" className="mx-2">
                Login
              </Nav.Link>
              <Nav.Link href="/keranjang" className="mx-2">
                <i className="fa-solid fa-cart-shopping"></i>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default First;
