import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const FooterComp = () => {
  return (
    <div className="mt-5 pt-4 pb-5 text-white footer">
      <Container>
        <Row>
          <div className="col-lg-5 col-xs-12 about-company">
            <h2>Tac Commerce</h2>
            <p className="pr-5 text-white-50 m-0">
              Situs Jual Beli Pihak Ketiga Teraman Sejak 2020
            </p>
            <p className="m-2 ms-0">
              <a href="www.instagram.com/callsign_price">
                <i class="fa-brands fa-instagram mr-1 mx-auto me-2 fs-2"></i>
              </a>
              <a href="https://www.facebook.com/share/g/ypuGK5WSDquvbRYH/">
                <i class="fa-brands fa-facebook mr-1 ms-2 me-2 fs-2"></i>
              </a>
              <a href="/#">
                <i class="fa-brands fa-telegram mr-1 ms-2 fs-2"></i>
              </a>
            </p>
          </div>
          <div className="col-lg-3 col-xs-12 links">
            <h4 className="mt-lg-0 mt-sm-3">Category</h4>
            <ul className="m-0 p-3 ">
              <li>
                <a href="/category/">Footgear</a>
              </li>
              <li>
                <a href="/category">Headgear</a>
              </li>
              <li>
                <a href="/category">Accesories</a>
              </li>
              <li>
                <a href="/category">Bodygear</a>
              </li>
              <li>
                <a href="/category">Belt</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-4 col-xs-12 location">
            <h4 className="">Kontak Kami</h4>
            <p>Kota Semarang,Jawa Tengah</p>
            <p>
              <i className="fa-brands fa-whatsapp me-2 fs-4 ">
                <a href="https://api.whatsapp.com/send?phone=082134701083">
                  +6282134701083
                </a>
              </i>
            </p>
            <p>
              <i class="fa-regular fa-envelope me-2"></i>taccomerce@gmail.com
            </p>
          </div>
          <div className="row mt-3">
            <div className="col copyright">
              <p>
                <small className="text-white-50">
                  &copy; Terbatas untuk proposal dan skripsi, 2024
                </small>
              </p>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default FooterComp;
