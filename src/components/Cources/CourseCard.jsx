import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
// import { Link } from "react-router-dom";

function CourseCard(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
     {props.ghLink&&(<Button variant="primary" href={props.ghLink} target="_blank">
          <BsGithub /> &nbsp;
          {props.isBlog ? "Blog" : "GitHub"}
        </Button>)}
        {"\n"}
        {"\n"}
     {/* Button to navigate to project details page using project title */}
       {/* <Link to={`/project/${encodeURIComponent(props.title)}`}>
          <Button variant="primary" style={{ marginLeft: "10px" }}>
            Red More           </Button>
        </Link> */}
        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" ,marginTop:'10px'}}
          >
            <CgWebsite /> &nbsp;
            {"course link"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default CourseCard;
