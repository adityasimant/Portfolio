import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I am
                <strong className="main-name"> Aditya Simant</strong>
              </h1>
              <p style={{ paddingLeft: "45px" }}>Bringing Ideas to Life Through Code:
                <spam className="purple "  > Software Engineer and Tech Enthusiast. </spam>
              </p>
              <div style={{ textAlign: "left", marginLeft: "30%" }}>
                <li>Head of Technical Department @IETE-DIEMS Student Forum</li>
                <li>2x Global Hackathon winner</li>
                <li>Software Developer</li>
                <li>Exploring Cloud Native</li>

              </div>

              <div style={{ padding: 50, textAlign: "center", marginBottom: 50 }}>
                <Type />
              </div>
            </Col>


          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
