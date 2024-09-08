import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/Sy-The-Ho.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillFacebook
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              <span className="purple"> <strong>INTRODUCTION</strong></span>
            </h1>
            <p className="home-about-body">
              Hi, my name is Sy The Ho (Hồ Sỹ Thế). I'm a <b className="purple">Bachelor of Computer Science</b> at School of Information and Communication Technology - Hanoi University of Science and Technology (SoICT-HUST) with <b className="purple">3.78</b> CPA points.
              <br />
              <br />
              My field of Interest's are
                <b className="purple"> AI </b>
              and <b className="purple">MLOps</b>. You can find some AI projects I have worked on <span className="purple"> <strong>Projects</strong></span> tab.
              <br />
              <br />
              I work in the field of <b className="purple">AI NLP</b> (<b className="purple">Research</b> and <b className="purple">Ops</b>). My work is about <b className="purple">Chatbots</b> and <b className="purple">Language Models</b> (<b className="purple">Text Embedding</b> and <b className="purple">Chat</b> models).
              <br />
              <br />
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" style={{"border-radius": "20%"}} alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              If you are interested, please feel free to <span className="purple">contact </span> me via these networks below
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/hsthe29"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.facebook.com/thehs.29"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillFacebook />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/sy-the-ho-hst2901y02"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/sythe.ho"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
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
