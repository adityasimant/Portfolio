import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/myImg.png";
import Tilt from "react-parallax-tilt";
import ResumeNew from "../Resume/ResumeNew";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I'm <h1><b>Aditya Simant</b> </h1>

              <br />
              I am currently pursuing my bachlor's in Electronics and Telecommunication Engineering from DIEMS, Aurangabad. I have a passion for <span className="purple" >building high-quality software applications.</span> I have experience in a variety of programming languages and Frameworks.

              <br />
              <br />
              In addition to my development skills, I am also an <span className="purple" >avid open source contributor and DevOps enthusiast.</span> I enjoy collaborating with other developers and using the latest tools and techniques to improve the efficiency and reliability of software systems. I am always looking for new challenges and opportunities to grow as a developer and make a positive impact on the software industry.

            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" style={{ maxHeight: "350px" }} />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/adityasimant"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/protagonist_z0"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/aditya-simant/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/aadisimant"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
            <ResumeNew />
            <h7>Contact: adityasimant88@gmail.com</h7>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
