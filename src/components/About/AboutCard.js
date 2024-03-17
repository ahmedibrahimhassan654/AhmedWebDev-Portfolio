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
         
            <p className="home-about-body">
              I fell in love with <span className="purple"> Web Developmet </span>  and I experience in building <span className="purple"> React Apps </span> 
              <br />
              <br />i have experience in modern web tehnologies  
              <i>
                <b className="purple"> Advance knowledge in HTML, CSS, and
                  JS with  experience in building react js app  . </b>
                  <b className="purple"> Building Server side with node js , mongo db, express Js   </b>
              </i>
              <br />
              <br />
              My field of Interest's are  &nbsp;
              <i>
                <b className="purple">Front End Side with React.js and Next.js with redux </b> 
              
              </i>
              <br />
              <br />
              and also have experience in bulding web site with  <b className="purple">wordpress</b> installing diffrent kind of <b className="purple">Themes </b> installing suitable <b className="purple">plugins</b> for web site business  
              <i>
                <b className="purple">
                  {" "}
                  I am a professional in building responsive websites for different screen sizes."                </b>
              </i>
              <br />
              <br />
              Well-experienced with development
                 tools such as 
              <b className="purple"> Git, Github, Gitlab, Linux,
                     and AWS.
              </b>  
              
            </p>
             some services that I can  do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> React /next Js Dev
            </li>
            <li className="about-activity">
              <ImPointRight /> Node Js backend Dev 
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
