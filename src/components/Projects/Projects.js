import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ignite from "../../Assets/Projects/Ignite.png";
import cryptorobin from "../../Assets/Projects/cryptorobin.png";
import Cypherithm from "../../Assets/Projects/Cypherithm.png";
import sc from "../../Assets/Projects/sc.png";
import ftwo from "../../Assets/Projects/F20.png";
import aws from "../../Assets/Projects/awspic.png"
import bloatfish from "../../Assets/Projects/bloatfishpic.png"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bloatfish}
              isBlog={false}
              title="BloatFish"
              description="Currently working on BloatFish. BloatFish is a Javascript-based chess engine that uses minimax and Aplha-Beta puring for move calculations"
              ghLink="https://github.com/adityasimant/BloatFish"
            />
          </Col>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={aws}
              isBlog={false}
              title="AWSctl"
              description="Assisted in the development of a command-line tool to help manage multiple AWS CLI profiles including MFA authentication and session activation. Written in GoLang "
              ghLink="https://github.com/adityasimant/awsctl"
            />
          </Col>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Cypherithm}
              isBlog={false}
              title="Cypherithm"
              description="Cypherithm is an Android library made in Java that provides encryption and decryption functionality for securing data in your Android applications."
              ghLink="https://github.com/adityasimant/Cypherithm"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cryptorobin}
              isBlog={false}
              title="CryptoRobin"
              description="A mobile application that provides you with latest crypto prices, top gainers/losers, Crypto charts and latest finance news.
              Search for any Crypto and view its price and charts. "
              ghLink="https://github.com/adityasimant/CryptoRobin"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ftwo}
              isBlog={false}
              title="Freedom 20"
              description="Made an mobile application for learning basic finance as a beginner where you can sign-up, follow people, share
              your thoughts, ask questions, read books and learn from courses."
              ghLink="https://github.com/adityasimant/Freedom20"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sc}
              isBlog={false}
              title="Speech companion"
              description="A react application with integrated speech recognition module which can
              convert your text into speech and vice versa.Made Dockerfile and deployed using kubernetes."
              ghLink="https://github.com/balayokesh/speech-companion"
              demoLink="https://balayokesh.github.io/speech-companion/"

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ignite}
              isBlog={false}
              title="Ignite"
              description="Ignite is an Mobile application that helps in setting smart notification system. Using Ignite you can send SMS/
              Emails to your clients with the required messages."
              ghLink="https://github.com/HubGenixx/Ignite"
            />
          </Col>




        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
