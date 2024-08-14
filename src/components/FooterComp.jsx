import React from "react";
import { Col, Container, Row, Footer } from "react-bootstrap";

const FooterComp = () => {
  return (
    <div className=" mt-5 pt-4 pb-5 text-white footer">
      <Container>
        <Row>
          <div className="about-company">
            <a href="#">
              <i className="fa-brands fa-facebook mx-2"></i>
            </a>
            <a href="#">
              <i className="fa-brands fa-instagram mx-2"></i>
            </a>
            <a href="#">
              <i className="fa-brands fa-whatsapp mx-2"></i>
            </a>
            <a href="#">
              <i className="fa-brands fa-x mx-2"></i>
            </a>
          </div>
          <div className=" col-lg-5 col-xs-12 row">
            <ul>
              <li>
                <a href="#">Hubungi Kami</a>
              </li>
              <li>
                <a href="#">Term & Services</a>
              </li>
              <li>
                <a href="#">Partner</a>
              </li>
              <li>
                <a href="#">Kategori</a>
              </li>
            </ul>
          </div>
          <div className=" col-lg-5 col-xs-12 row">
            <div className=" mt-lg-3 mt-sm-3 footer-category">
              <ul className="me-3 px-0 ">
                <li className="">
                  <a href="#">Bodygear</a>
                </li>
                <li className="pt-4">
                  <a href="#">Footwear</a>
                </li>
                <li className="pt-4">
                  <a href="#">Headgear</a>
                </li>
                <li className="pt-4">
                  <a href="#">Accesories</a>
                </li>
                <li className="pt-4">
                  <a href="#">Backpack</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <small>copyright @ 2024, Richard Surya</small>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default FooterComp;
