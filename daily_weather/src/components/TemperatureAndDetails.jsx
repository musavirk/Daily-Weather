import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  Droplet,
  ThermometerHigh,
  Wind,
  SunFill,
  BrightnessAltHigh,
} from "react-bootstrap-icons";

function TemperatureAndDetails() {
  return (
    <Container className="text-white">
      <Row className="details center ">
        <Col md="auto">
          <p>Rain & Cloudy</p>
        </Col>
      </Row>
      <Row className="center ">
        <Col md="auto" className="mx-3">
          <img src="http://openweathermap.org/img/wn/01d@2x.png" alt="logo" />
        </Col>
        <Col md="auto" className="temperature mx-3">
          <p>37°C</p>
        </Col>
        <Col md="auto" className="mx-3">
          <div>
            <ThermometerHigh /> Real fell:<span>34°</span>
          </div>
          <div>
            <Droplet /> Humidity: <span>65%</span>
          </div>
          <div>
            <Wind /> Wind:<span>11 km/h</span>
          </div>
        </Col>
      </Row>
      <Row className="center">
        <Col md="auto" className=" center">
          <p>
            <SunFill className="mx-1 mb-1" />
            Rise: <span>6.30 AM</span>
          </p>
          <p className="mx-1">|</p>
          <p>
            <BrightnessAltHigh className="mx-1 mb-1" />
            Set: <span>6.45 PM</span>
          </p>
          <p className="mx-1">|</p>
          <p>
            <SunFill className="mx-1 mb-1" />
            High: <span>45°</span>
          </p>
          <p className="mx-1">|</p>
          <p>
            <SunFill className="mx-1 mb-1" />
            Low: <span>28°</span>
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default TemperatureAndDetails;
