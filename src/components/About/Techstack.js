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
        <h5 className="purple">Type-Script</h5> 

      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <RiReactjsFill />
        <h5 className="purple">React Js </h5> 

      </Col>
  
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <h5 className="purple">java Script</h5> 

      </Col>
  
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <h5 className="purple">Node Js </h5> 

      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiRedux />
        <h5 className="purple">Redux</h5> 

      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
        <h5 className="purple">Mongo DB</h5> 

      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs />
        <h5 className="purple">Next Js </h5> 

      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <h5 className="purple">Git</h5> 

      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
        <h5 className="purple">Firebase</h5> 

      </Col>
   
      <Col xs={4} md={2} className="tech-icons">
        <FaWordpress  />
        <h5 className="purple">Wordpress</h5> 

      </Col>
    </Row>
  );
}

export default Techstack;
