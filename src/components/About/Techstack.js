import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
  DiDocker
} from "react-icons/di";
import {
  SiKotlin,
  SiRust,
  SiTensorflow,
  SiPytorch,
  SiPandas,
  SiScikitlearn,
} from "react-icons/si";
// import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
          <DiPython />
          <span style={{"font-size": "15px"}}>Python</span>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
          <SiRust />
          <span style={{"font-size": "15px"}}>Rust</span>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
          <CgCPlusPlus />
          <span style={{"font-size": "15px"}}>C plus plus</span>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
          <DiJava />
          <span style={{"font-size": "15px"}}>Java</span>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
          <DiJavascript1 />
          <span style={{"font-size": "15px"}}>JavaScript</span>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
          <SiKotlin />
          <span style={{"font-size": "15px"}}>Kotlin</span>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
          <DiGit />
          <span style={{"font-size": "15px"}}>Git</span>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
          <DiDocker />
          <span style={{"font-size": "15px"}}>Docker</span>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
          <SiPytorch />
          <span style={{"font-size": "15px"}}>Pytorch</span>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
          <SiTensorflow />
          <span style={{"font-size": "15px"}}>Tensorflow</span>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
          <DiNodejs />
          <span style={{"font-size": "15px"}}>Node</span>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
          <SiScikitlearn />
          <span style={{"font-size": "15px"}}>Scikit-Learn</span>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
          <SiPandas />
          <span style={{"font-size": "15px"}}>Pandas</span>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
          <DiMongodb />
          <span style={{"font-size": "15px"}}>MongoDB</span>
        </div>
      </Col>
    </Row>
  );
}

export default Techstack;
