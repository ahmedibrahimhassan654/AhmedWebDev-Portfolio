import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import youtubeclone from "../../Assets/Projects/youtubeclone.PNG";

import ZTMEcommerce from'../../Assets/Projects/ZTM-ecomerce.PNG'
import deccoric from '../../Assets/Projects/deccoric.PNG'
function Projects() {
  const projects = [
    {
      imgPath: youtubeclone,
      title: "You-Tube Clone",
      description: "building web site like youtube which take it's API data from rapid api the project made with react js and material ui, app deployed in netlify  ",
      ghLink: "https://github.com/ahmedibrahimhassan654/project_youtube_clone",
      demoLink: "https://youtubeclonebyahmedev.netlify.app/"
    },
    {
      imgPath: ZTMEcommerce,
      title: "ZTM-Ecommerce ",
      description: "buidling Full stack ecommerce app with react js 18 ,app deployed in netlify ,mange state with redux or context api,connected with firebase DB used for storage data and user authentication ",
      ghLink: "https://github.com/ahmedibrahimhassan654/ZTM-Ecommerce-",
      demoLink: "https://react-firebase-ecommerce-app.netlify.app/"
    },
    {
      imgPath: deccoric,
      title: "Dropshiping ecommerce business ",
      description:'building drop shiping ecommerce web site with wordpress,its integrated with aliexpress and tagger web site which gave me availability to import product data from them to my web site ,in addition i build the blog which integrated with AI tools gave me availability to write review on this product',
      // ghLink: "https://github.com/ahmedibrahimhassan654/project_youtube_clone",
      demoLink: "https://deccoric.com/"
    },
  ];
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {projects.map((project, index) => (
            <Col md={4} className="project-card" key={index}>
              <ProjectCard
                imgPath={project.imgPath}
                isBlog={false}
                title={project.title}
                description={project.description}
                ghLink={project.ghLink}
                demoLink={project.demoLink}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
