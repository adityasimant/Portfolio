import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ignite from "../../Assets/Projects/Ignite.png";
import cryptorobin from "../../Assets/Projects/cryptorobin.png";
import sc from "../../Assets/Projects/sc.png";
import ftwo from "../../Assets/Projects/F20.png";

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
              imgPath={cryptorobin}
              isBlog={false}
              title="CryptoRobin"
              description="Made during DevNetwork Enterprise 2022 Hackathon, A mobile application that provides you with latest crypto
              prices, top gainers/losers, Crypto charts and latest finance news.
              Search for any Crypto and view its price and charts. Integrated Coinmarketcap's API for latest data. Made with
              Kotlin."
              ghLink="https://github.com/adityasimant/CryptoRobin"
              demoLink="https://github.com/adityasimant/CryptoRobin/releases/download/V1/CryptoRobinV1.apk"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ftwo}
              isBlog={false}
              title="Freedom 20"
              description="Made an mobile application for learning basic finance as a beginner where you can sign-up, follow people, share
              your thoughts, ask questions, read books and learn from courses.
              latest finance news directly from API and courses from zerodha varsity. Using Firebase user authentication and
              Firebase realtime database and storage.
              "
              ghLink="https://github.com/adityasimant/Freedom20"
              demoLink="https://github.com/adityasimant/Freedom20/releases/download/v1/freedom20.apk"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sc}
              isBlog={false}
              title="Speech companion"
              description="Made during civo hackathon 2021,its a react application with integrated speech recognition module which can
              convert your text into speech and vice versa.
              I Implemented fast and efficient javascript components and npm speech recognition module. Deployed using
              kubernetes."
              ghLink="https://github.com/balayokesh/speech-companion"
              demoLink="https://balayokesh.github.io/speech-companion/"

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ignite}
              isBlog={false}
              title="Ignite"
              description="Made during Courier Hacks: Feature focus program.
              Ignite is an Mobile application that helps in setting smart notification system. Using Ignite you can send SMS/
              Emails to your clients with the required messages. Stores all of your client's data.
              I Integrated user authentication, improved the user interface and user experience, created and maintained the
              database using Firebase, created and maintained the code repository on GitHub."
              ghLink="https://github.com/HubGenixx/Ignite"
              demoLink="https://github.com/HubGenixx/Ignite/releases/download/v1/Ignite.apk"
            />
          </Col>


        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
