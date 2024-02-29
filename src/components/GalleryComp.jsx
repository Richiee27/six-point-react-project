import React from "react";
import Galeri1 from "../assets/img/gallery/eaglemmac.jpg";
import Galeri2 from "../assets/img/gallery/galaxymp5k.jpg";
import Galeri3 from "../assets/img/gallery/bisonbelt.jpg";
import Galeri4 from "../assets/img/gallery/Hicapa.jpg";
import Galeri5 from "../assets/img/gallery/comtac3.jpg";
import Galeri6 from "../assets/img/gallery/hk417.png";
import { Col, Container, Row } from "react-bootstrap";

const GalleryComp = () => {
  return (
    <div className="gallery min-vh-100 d-flex align-items-center">
      <Container>
        <Row className="mb-5">
          <Col>
            <h1 className="text-center fw-300 animate__animated animate__backInLeft">
              Ratusan produk menantimu!
            </h1>
          </Col>
        </Row>
        <Row className="row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1 g-4">
          <Col>
            <img
              src={Galeri1}
              alt="Eagle Industries MMAC"
              className="w-100"
              loading="lazy"
              data-aos="fade-up"
            />
          </Col>
          <Col>
            <img
              src={Galeri2}
              alt="Galaxy MP5K Airsoft"
              className="w-100"
              loading="lazy"
              data-aos="fade-up"
              data-aos-delay="200"
            />
          </Col>
          <Col>
            <img
              src={Galeri3}
              alt="FC Bison Belt"
              className="w-100"
              loading="lazy"
              data-aos="fade-up"
              data-aos-delay="400"
            />
          </Col>
          <Col>
            <img
              src={Galeri4}
              alt="TM Hicapa 5.1 Airsoft"
              className="w-100"
              loading="lazy"
              data-aos="fade-up"
              data-aos-delay="600"
            />
          </Col>
          <Col>
            <img
              src={Galeri5}
              alt="Peltor Comtac III"
              className="w-100"
              loading="lazy"
              data-aos="fade-up"
              data-aos-delay="800"
            />
          </Col>
          <Col>
            <img
              src={Galeri6}
              alt="VFC HK416 Airsoft"
              className="w-100"
              loading="lazy"
              data-aos="fade-up"
              data-aos-delay="1000"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default GalleryComp;
