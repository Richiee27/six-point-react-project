import React from "react";
import { useState, useEffect } from "react";
import { Nav, Navbar, Container, Form } from "react-bootstrap";

const First = () => {
  const [changeColor, setChangeColor] = useState(false);

  const changeBackgroundColor = () => {
    if (window.scrollY > 680) {
      setChangeColor(true);
    } else {
      setChangeColor(false);
    }
  };

  useEffect(() => {
    changeBackgroundColor();

    window.addEventListener("scroll", changeBackgroundColor);
  });

  return (
    <div className="sticky-top">
      <Navbar
        variant="dark"
        expand="lg"
        className={changeColor ? "color-active" : ""}
      >
        <Container>
          <Navbar.Brand href="#home" className="fw-bold fs-4">
            Sixpoint ID
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto" text-center>
            <Form className="d-flex input-group w-auto ms-2">
                <input
                  type="search"
                  className="form-control rounded"
                  placeholder="search"
                  aria-label="Search"
                  aria-describedby="search-addon"
                ></input>
              </Form>
              <Nav.Link href="/" className="mx-2">
                Home
              </Nav.Link>
              <Nav.Link href="/about" className="mx-2">
                About
              </Nav.Link>
              <Nav.Link href="/forum" className="mx-2">
                Forum
              </Nav.Link>
              <Nav.Link href="/product" className="mx-2">
                Product
              </Nav.Link>
              <div className="dropdown ms-2 pt-2">
                <a
                  data-mdb-dropdown-init
                  className="dropdown-toggle d-flex align-items-center hidden-arrow"
                  href="/#"
                  id="navbarDropdownAvatar"
                  role="button"
                  aria-expanded="false"
                >
                  <img
                    src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                    className="rounded-circle"
                    height={25}
                    alt="BNW"
                    loading="lazy"
                  ></img>
                </a>
                <ul
                  class="dropdown-menu dropdown-menu-end"
                  aria-labelledby="navbarDropdownAvatar"
                >
                  <li>
                    <a class="dropdown-item" href="/#">
                      My profile
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/#">
                      Settings
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/#">
                      Logout
                    </a>
                  </li>
                </ul>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default First;
