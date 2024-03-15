import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,

  SiCanva 
} from "react-icons/si";
import { TbBrandRedux  } from "react-icons/tb";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
   
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <h5 className="purple">Visual studio code</h5> 

      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
        <h5 className="purple">post man </h5> 

      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSlack />
        <h5 className="purple">Chat GPT</h5> 

      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCanva />
        <h5 className="purple">Canva</h5> 

      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <TbBrandRedux />
        <h5 className="purple">Redux dev tools</h5> 

      </Col>
    </Row>
  );
}

export default Toolstack;
