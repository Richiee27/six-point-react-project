import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import {} from "react-icons";

const ServicesComp = () => {
  return (
    <div className="services min-vh-100 d-flex align-items-center">
      <Container>
        <Row className="mb-5">
          <Col>
            <h1 className="text-center fw-300 animate__animated animate__backInRight">
              Keuntungan Bergabung Dengan Kami
            </h1>
          </Col>
        </Row>
        <Row className="row-cols-lg-3 row-cols-md-2 row-cols-1 justify-content-center">
          <Col className="text-center py-5 px-3 " data-aos="fade-right">
            <i class="fa-solid fa-scale-balanced fs-1 mb-4"></i>
            <h5 className="fw-bold">Atur kesepakatanmu</h5>
            <p>Pasang dan tawarkan harga sesuai dengan pasarannya</p>
          </Col>
          <Col className='text-center py-5 px-3' data-aos='fade-up'>
            <i class="fa-solid fa-ban fs-1 mb-4"></i>
            <h5 className="fw-bold">Jaminan anti banned</h5>
            <p>Lapak kamu tidak akan terkena banned selama mengikuti regulasi yang kami tetapkan</p>
          </Col>
          <Col
            className="text-center py-5 px-3"
            data-aos="fade-left"
          >
            <i class="fa-solid fa-people-arrows fs-1 mb-4"></i>
            <h5 className="fw-bold">Jalin relasi baru</h5>
            <p>Bentuk relasi dan sukir dimana kamu ditawarkan</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ServicesComp;
