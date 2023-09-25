import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Some of my <strong className="purple">Achievements:  </strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 className="project-heading" style={{marginBottom:"2rem"}}>
              Professional <strong className="purple">Skillset </strong>
            </h1>
            <h3 className="project-heading" style={{textAlign: "left"}}>
              Software Development
            </h3>
            <p style={{textAlign: "left"}}>
            Experience in both functional and OOP: Python, Java, Javascript, Golang & Typescript. Have contributed in making CLIs and various libraries.
            </p>

            <br />
            <h3 className="project-heading" style={{textAlign: "left"}}>
            Mobile Dev: Android
            </h3>
            <p style={{textAlign: "left"}}>
            Have developed 20+ mobile applications for various challenges and use cases including an Android library for Excryption & Decryption.
            </p>

            <br />
            <h3 className="project-heading" style={{textAlign: "left"}}>
            Web Dev: MERN Stack
            </h3>
            <p style={{textAlign: "left"}}>
            Passionate about UI/UX. Over 3 years of experience of working with frameworks like ReactJs, Django and Node.js
            </p>

            <br />
              <br />


          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <Techstack />
          </Col>
        </Row>




        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />

        <Github />
      </Container>
    </Container>
  );
}

export default About;
