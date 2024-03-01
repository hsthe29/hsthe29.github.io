import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/sy-the-ho.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
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
              Hi, my name is Sy The Ho (Hồ Sỹ Thế). I'm studying Computer Science at School of Information and Communication Technology - Hanoi University of Science and Technology.
              <br />
              <br />
              I am passionate about 
              <i>
                <b className="purple"> AI </b>
              </i> (especially 
              <i>
                <b className="purple"> NLP </b>
              </i>and 
              <i>
                <b className="purple"> CV</b>
              </i>) you can find some AI projects I have worked on <span className="purple"> <strong>Projects</strong></span> tab.
              <br />
              <br />
              I have a good basic understanding of classic programming languages
              <i>
                <b className="purple"> Python, Java, C++ </b>
              </i>
               and modern ones
              <i>
                <b className="purple"> Kotlin, Rust</b>
              </i>.
              <br />
              <br />
              <i>
                <b className="purple">Computer Vision </b> and <b className="purple"> NLP </b> are two main fields I want to specialize. And also interests in new {" "}
                <b className="purple">
                Web Technologies
                </b>.
              </i>
              <br />
              <br />
              I want to have more and more knowledge about my field to apply in life to make these technologies more practical.
              
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
                  href="https://www.linkedin.com/in/sy-the-ho-ba02282b7/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/the.hosy"
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
