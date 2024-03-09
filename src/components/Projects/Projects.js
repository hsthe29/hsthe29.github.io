import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import questionAnswering from "../../Assets/Projects/questionAnswering.png";
import imageCaptioning from "../../Assets/Projects/imageCaptioning.png";
import chessAI from "../../Assets/Projects/chessAI.png";
import estate from "../../Assets/Projects/estate.png";
import flappybird from "../../Assets/Projects/flappybird.png";
import translation from "../../Assets/Projects/translation.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently. Visit <a>https://github.com/hsthe29?tab=repositories</a> for more!
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={estate}
              isBlog={false}
              title="Estate Price Prediction"
              description="Product from the Data Science module at university. An application that helps people make predictions about the prices of various types of real estate based on it's description in the capital city of Hanoi, Vietnam. Transformer-based model written in Pytorch, trained on a real-world dataset, and deployed using Flask on Azure (disconnected)."
              ghLink="https://github.com/hsthe29/Estate-Price-Prediction-using-Description"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={translation}
              isBlog={false}
              title="Translation"
              description="Research on using decoupled position encoding into the Transformer model. The model is tested on the machine translation task for the Vietnamese - English language pair."
              ghLink="https://github.com/hsthe29/Translation"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chessAI}
              isBlog={false}
              title="ChessAI"
              description="AI Chess computer application written in Kotlin. The next-move search algorithms used are Minimax with Alpha-Beta and MTD-f."
              ghLink="https://github.com/hsthe29/ChessAI"
              demoLink="#"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={questionAnswering}
              isBlog={false}
              title="Question Answering"
              description="Building a model based on BERT helps determine whether the document's content contains the answer to the user's question or not. (Not shared to github yet)."
              ghLink="https://github.com/hsthe29/BoolQA"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={flappybird}
              isBlog={false}
              title="Flappy Bird"
              description="Re-implemented the famous Flappy Bird game. The language used is Kotlin."
              ghLink="https://github.com/hsthe29/FlappyBird-v2"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={imageCaptioning}
              isBlog={false}
              title="Image Captioning"
              description="Build a descriptor generation model for images by combining the ResNet150 model (pre-trained) and Transformer Decoder on the Flickr 8k dataset. After the training process, the model produces results that describe the content of the image quite accurately."
              ghLink="https://github.com/hsthe29/ImageCaptioning"
              demoLink="#"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
