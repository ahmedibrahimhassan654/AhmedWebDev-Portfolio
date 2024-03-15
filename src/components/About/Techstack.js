import React from "react";
import { Col, Row } from "react-bootstrap";

import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,

  DiGit,
 

} from "react-icons/di";
import {

  SiFirebase,
  SiNextdotjs,

  SiTypescript ,
  SiRedux 
} from "react-icons/si";
import { RiReactjsFill  } from "react-icons/ri";
import { FaWordpress } from "react-icons/fa";


function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiTypescript />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <RiReactjsFill />
      </Col>
  
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
  
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRedux />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
      </Col>
   
      <Col xs={4} md={2} className="tech-icons">
        <FaWordpress  />
      </Col>
    </Row>
  );
}

export default Techstack;
