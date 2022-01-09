import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Jaideep Bommidi </span>
            from <span className="purple"> Visakhapatnam, India.</span>
            <br />I am a software developer in Deep Learning and Full Stack
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Listening Music
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing games
            </li>

          </ul>
          <footer className="blockquote-footer">Jaideep</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
