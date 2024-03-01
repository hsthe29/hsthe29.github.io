import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiIntellij, DiWindows } from "react-icons/di";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
  SiLinux,
  SiWindows,
  SiPycharm,
  SiGooglecolab,
  SiKaggle,
  SiAnaconda,
  SiMicrosoftazure,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
          <SiLinux />
          <span style={{"font-size": "15px"}}>Linux</span>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
          <DiWindows />
          <span style={{"font-size": "15px"}}>Windows</span>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
          <SiVisualstudiocode />
          <span style={{"font-size": "15px"}}>Visual Studio Code</span>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
          <SiPostman />
          <span style={{"font-size": "15px"}}>Postman</span>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
          <SiSlack />
          <span style={{"font-size": "15px"}}>Slack</span>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
          <SiPycharm />
          <span style={{"font-size": "15px"}}>PyCharm</span>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
          <DiIntellij />
          <span style={{"font-size": "15px"}}>Intellij IDEA</span>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
          <SiGooglecolab />
          <span style={{"font-size": "15px"}}>Google Colaboratory</span>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
          <SiKaggle />
          <span style={{"font-size": "15px"}}>Kaggle</span>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
          <SiAnaconda />
          <span style={{"font-size": "15px"}}>Anaconda</span>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
          <SiMicrosoftazure />
          <span style={{"font-size": "15px"}}>Microsoft Azure</span>
        </div>
      </Col>
    </Row>
  );
}

export default Toolstack;
