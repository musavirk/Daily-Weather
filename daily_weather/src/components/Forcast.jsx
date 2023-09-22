import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function ForCast({ title }) {
  return (
    <Container className="text-white center">
      <Row>
        <div>
          <h4>{title}</h4>
          <hr />
        </div>

        <Col md="auto" className="forcast">
          <div className="forcast-img mx-3">
            <p>04:30 PM</p>
            <img
              src="http://openweathermap.org/img/wn/01d@2x.png"
              alt="logo"
              width="60px"
            />
            <p>22°</p>
          </div>
          <div className="forcast-img mx-3">
            <p>04:30 PM</p>
            <img
              src="http://openweathermap.org/img/wn/01d@2x.png"
              alt="logo"
              width="70px"
            />
            <p>22°</p>
          </div>
          <div className="forcast-img mx-3">
            <p>04:30 PM</p>
            <img
              src="http://openweathermap.org/img/wn/01d@2x.png"
              alt="logo"
              width="70px"
            />
            <p>22°</p>
          </div>
          <div className="forcast-img mx-3">
            <p>04:30 PM</p>
            <img
              src="http://openweathermap.org/img/wn/01d@2x.png"
              alt="logo"
              width="70px"
            />
            <p>22°</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default ForCast;
