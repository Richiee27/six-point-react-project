import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const FooterComp = () => {
  return (
    <div className="mt-5 pt-5 pb-5 text-white footer">
      <Container>
        <Row>
          <div className="col-lg-5 col-xs-12 about-company">
            <h2>Sixpoint ID</h2>
            <p className="pr-5 text-white-50">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam
              amet odit non? Eligendi, vero sunt possimus numquam optio laborum
              praesentium placeat minima dolore consectetur amet, totam non!
              Veritatis, esse veniam?
            </p>
            <p>
              <a href="www.instagram.com/callsign_price">
                <i class="fa-brands fa-instagram mr-1 mx-auto"></i>
              </a>
              <a href="/#">
                <i class="fa-brands fa-facebook mr-1 ms-2"></i>
              </a>
              <a href="/#">
                <i class="fa-brands fa-telegram mr-1 ms-2"></i>
              </a>
            </p>
          </div>
          <div className="col-lg-3 col-xs-12 links">
            <h4 className="mt-lg-0 mt-sm-3">Collaborator</h4>
            <ul className="m-0 p-0">
              <li>
                - <a href="/#">Alligator Gear</a>
              </li>
              <li>
                - <a href="/#">UD Artha Tactical</a>
              </li>
              <li>
                - <a href="/#">Biro Pengadaan Barang/Jasa Polri</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-4 col-xs-12 location">
            <h4 className="">Kontak Kami</h4>
            <p>22, Semarang, Jawa Tengah</p>
            <p className="mb-0">
              <i class="fa-solid fa-phone me-2"></i>+82134701083
            </p>
            <p>
              <i class="fa-regular fa-envelope me-2"></i>airsoftgunid@gmail.com
            </p>
          </div>
          <div className="row mt-5">
            <div className="col copyright">
              <p className="">
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
