import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/cv-image.jpg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { MdMarkEmailRead } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";

import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with{" "}
              <span className="purple"> Web Developmet </span> and I experience
              in building <span className="purple"> online business </span>
              <br />
              <br />i have experience in modern web tehnologies
              <i>
                <b className="purple">
                  MERN Stack Web Developer{"Node js Backend Developer"}+
                  {"React Js Web Developer"}
                </b>
                <b className="purple"></b>
              </i>
              <br />
              <br />
              <br />
              <br />
              and also have experience in bulding web site with{" "}
              <b className="purple">wordpress</b> installing diffrent kind of{" "}
              <b className="purple">Themes </b> installing suitable{" "}
              <b className="purple">plugins</b> for web site business
              <i>
                <b className="purple">
                  {" "}
                  I am a professional in building responsive websites for
                  different screen sizes."{" "}
                </b>
              </i>
              <br />
              <br />
              Well-experienced with development tools such as
              <b className="purple"> Git, Github, Gitlab, Linux, and AWS.</b>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/ahmedibrahimhassan654"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://wa.link/4ueoif"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaWhatsapp />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/ahmed-ibrahim5588/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:ahmedibrahimhassan654@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <MdMarkEmailRead />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
