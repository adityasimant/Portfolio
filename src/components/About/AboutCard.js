import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Aditya Simant </span>
            from <span className="purple"> Aurangabad, India.</span>
            <br />I am pursuing BTech in Electronics and Telecommunication from DIEMS Abad.
            <br />
            <br />
            I am skilled and experienced software developer with proficiency in Java, Kotlin, C++, JavaScript, Python, Golang, Bash, YAML, and various frameworks and tools such as ReactJs, Django, NodeJs, Docker, GitHub-Actions, and Git/GitHub. 
            <br />
            <br />
            <h2>Some of my achievements: </h2>
              <br />
              <h4><b>1. International CIVO Hackathon </b></h4>
              <i>
              <b className="purple">Winner</b>
              </i>
              <br />
              - Collaborated with like minded developers. Learnt about Kubernetes, Docker, Speech Recognition modules, team management, YAML and Containerization

              <br />
              <br />
              <h4><b>2. Courier Hacks: Feature focus </b></h4>
              <i>
              <b className="purple">Winner</b>
              </i>
              <br />

              - Worked with other developers to create an award-winning mobile application in a shorter time frame while
              meeting all required constraints. Learnt about Retrofit, Rest APIs, time management, open source and managed the open source organization and
              code repository.
            <br />
            <br />
            <h4><b>3. DIEMS Tech-prastuti Presentation Champion</b></h4>
              <i>
              <b className="purple">Winner</b>
              </i>
              <br />
              - Awarded for a highly interactive and informative presentation on Microservices: The Future of Software Development.

            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Chess
            </li>
            <li className="about-activity">
              <ImPointRight /> Writting Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
