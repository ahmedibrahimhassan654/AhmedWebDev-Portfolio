import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import CourseCard from "./CourseCard";


import ZTMEcommerce from'../../Assets/cources/react js ZTM.PNG'
import Ds from'../../Assets/cources/ds&algorithms.PNG'

function Cources() {
  const projects = [
    {
      imgPath: ZTMEcommerce,
      title: "Complete React Developer (w/ Redux, Hooks, GraphQL)",
      description: "Build a massive E-commerce app with Redux, Hooks, GraphQL, Stripe, Firebase",
      courseLink: "https://www.udemy.com/course/complete-react-developer-zero-to-mastery/",
      ghLink: "https://github.com/ahmedibrahimhassan654/ZTM-Ecommerce-"
    },
    {
      imgPath: Ds,
      title: "Master the Coding Interview: Data Structures + Algorithms",
      description: "Learn, implement, and use different Data StructuresLearn, implement and use different Algorithms",
      courseLink: "https://www.udemy.com/course/master-the-coding-interview-data-structures-algorithms",
      // ghLink: "https://github.com/ahmedibrahimhassan654/ZTM-Ecommerce-"
    },
   
  ];
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Cources  </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few cources I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {projects.map((project, index) => (
            <Col md={4} className="project-card" key={index}>
              <CourseCard
                imgPath={project.imgPath}
                isBlog={false}
                title={project.title}
                description={project.description}
                ghLink={project.ghLink}
                demoLink={project.courseLink}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Cources;
