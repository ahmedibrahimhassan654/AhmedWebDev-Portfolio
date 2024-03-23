import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
// import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
function ProjectCards(props) {
  const [showModal, setShowModal] = useState(false);

  const handleImageClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <Card className="project-card-view">
        <Card.Img
          variant="top"
          src={props.imgPath}
          alt="card-img"
          onClick={handleImageClick}
          style={{ cursor: "pointer" }}
        />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text style={{ textAlign: "justify" }}>
            {props.description}
          </Card.Text>
          {props.ghLink && (
            <Button variant="primary" href={props.ghLink} target="_blank">
              <BsGithub /> &nbsp;
              {props.isBlog ? "Blog" : "GitHub"}
            </Button>
          )}
          {props.demoLink && !props.isBlog && (
            <Button
              variant="primary"
              href={props.demoLink}
              target="_blank"
              style={{ marginLeft: "10px", marginTop: "10px" }}
            >
              <CgWebsite /> &nbsp;
              {"Demo"}
            </Button>
          )}
        </Card.Body>
      </Card>

      {/* Modal for displaying the enlarged image */}
      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Body>
          <img src={props.imgPath} alt="enlarged-img" style={{ width: "100%" ,height:'100%'}} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default ProjectCards;
