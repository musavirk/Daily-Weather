import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function TimeAndLocation() {
  return (
    <Container className=" text-white  font-xl ">
      <Row className="  date-time center">
        <Col md="auto">
          <p>Tuesday, 31 May 2022 | Local time: 12:46 PM</p>
        </Col>
      </Row>
      <Row className=" location center">
        <Col md="auto">
          <p>Kerala,Kochi</p>
        </Col>
      </Row>
    </Container>
  );
}

export default TimeAndLocation;
