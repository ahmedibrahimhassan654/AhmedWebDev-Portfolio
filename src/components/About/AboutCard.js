import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple"> Ahmed Ibrahim </span>
             from  <span className="purple"> Cairo , Egypt .</span>
            <br />
            I am currently working as freelancer web developer 
            <br />
            looking for full time / part time job as <span className="purple">  React Js Developer </span>
            <br />
            <br />
             some services that I can  do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> React /next Js Dev
            </li>
            <li className="about-activity">
              <ImPointRight /> Node Js Dev 
            </li>
            <li className="about-activity">
              <ImPointRight /> wordpress designer 
            </li>
            <li className="about-activity">
              <ImPointRight /> SEO & Google Ads  
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Ahmed web dev</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
