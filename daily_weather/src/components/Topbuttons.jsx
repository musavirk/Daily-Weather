import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

function TopButtons() {
  const [cities] = useState([
    {
      id: 1,
      value: "Delhi",
    },
    {
      id: 2,
      value: "Mumbai",
    },
    {
      id: 3,
      value: "Bangalore",
    },
    {
      id: 4,
      value: "Chennai",
    },
    {
      id: 5,
      value: "Kochi",
    },
  ]);
  return (
    <Container className="center">
      <Row>
        {cities.map((city) => (
          <Col key={city.id} className="my-1 ">
            <button key={city.id} className="city-buttons font-md">
              {city.value}
            </button>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default TopButtons;
