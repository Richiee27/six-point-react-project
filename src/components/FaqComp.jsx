import React from "react";
import { Container, Row, Col, Accordion } from "react-bootstrap";

const FaqComp = () => {
  return (
    <div>
      <Container>
        <Row className="mb-5">
          <Col>
            <h2 className="text-center fw-bold">Frequently Asked Question</h2>
            <p className="text-center">
              Berikut ragam pertanyaan yang dilontarkan
            </p>
          </Col>
        </Row>
        <Row className="mx-auto mb-5">
          <Col>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  Bagaimana Cara Mencari Produk Disini?
                </Accordion.Header>
                <Accordion.Body>
                  Pengguna dapat menggunakan fitur searchbox diatas, atau dapat
                  menekan tombol Belanja pada navigasi diatas layar. Setelah itu
                  mulailah mencari produk yang anda mau.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  Bagaimana keamanan situs disini ?
                </Accordion.Header>
                <Accordion.Body>
                  Situs jual beli kami telah terjamin mengikuti ketentuan UU No
                  Tahun 2008 Tentang Informasi Dan Elektronik
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>Cara Melakukan Transaksi ?</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FaqComp;
