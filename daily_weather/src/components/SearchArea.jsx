import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import { GeoAlt, Search } from "react-bootstrap-icons";

function SearchArea() {
  return (
    <Container className="center">
      <Row className=" center">
        <Col className="search-location">
          <input type="text" placeholder="search..." />
        </Col>
        <Col className="icon">
          <Search size={15} className="hover:size={50}" />
        </Col>
        <Col className="icon">
          <GeoAlt />
        </Col>
        <Col className="units center">
          <button className="city-buttons m-2 font-xl">°F</button>
          <p className="pt-2">|</p>
          <button className="city-buttons mx-2 font-xl">°C</button>
        </Col>
      </Row>
    </Container>
  );
}

export default SearchArea;
