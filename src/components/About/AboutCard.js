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
            I have won multiple hackathon awards, including the International CIVO Hackathon and the Courier Hacks: Feature Focus 2022. He has mentored students, managed open-source organizations and code repositories, and collaborated with like-minded developers to create award-winning projects within a shorter timeframes.
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
