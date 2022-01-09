import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import leaf from "../../Assets/Projects/leaf.png";
import printerGuard from "../../Assets/Projects/printerGuard.PNG"
import vpr  from "../../Assets/Projects/view_point_rendering.PNG";
import industrial_train from "../../Assets/Projects/industrial_training.PNG"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Project Portfolio
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={printerGuard}
              isBlog={false}
              title="Printer Guard"
              description="Deep Learning Visualisation of errors in 3D printer. Project involves performing Object Detection and Action Recognition. Front-End is implemented using Reactjs and AWS cloud is used for running deep learning and interactions with 3d Printer."
              //link="https://github.com/JaideepBgit/mixed_reality_using_view_point_rendering"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={vpr}
              isBlog={false}
              title="Mixed reality View point-rendering"
              description="To visualise a scenario we used view point rendering in Unity3D and perform modification using the interaction from face and hand gestures."
              link="https://github.com/JaideepBgit/mixed_reality_using_view_point_rendering"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              link="https://github.com/soumyajit4419/Plant_AI"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={industrial_train}
              isBlog={false}
              title="Industrial Training"
              description="Study and practical implementation of Image Processing algorithms in PLC’s and RLC’s for Steel Rollers."
              link="https://github.com/JaideepBgit/IndustrialTraining"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
