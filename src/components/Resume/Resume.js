import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import axios from "axios";
import pdf from "../../Assets/Jaideep_Bommidi.pdf";
import { AiOutlineDownload } from "react-icons/ai";

function Resume() {
  const uri = "https://porfolio-backend.vercel.app/ranks/getRanks";
  const [spojRank, upadteSpojRank] = useState(0);
  const [hackerrank, upadteHackerank] = useState(0);
  const [sem, upadateSem] = useState(0);
  const [cgpa, upadteCgpa] = useState(0);

  useEffect(() => {
    axios
      .get(uri)
      .then((res) => {
        upadteSpojRank(res.data.message[0].spojRank);
        upadteHackerank(res.data.message[1].hackerrank);
        upadteCgpa(res.data.message[2].cgpa);
        upadateSem(res.data.message[3].sem);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
              title="Computer Vision, Full Stack developer, Poligy GmbH"
              date="September 2020 - December 2021"
              content={[
                "Develop deep learning architecture based on Tensorflow for Error detection in 3D-printing and deploy it in AWS cloud.",
                "Develop face detection model and extract landmarks to calculate beauty score. Develop image segmentation algorithm based on the face and landmarks extracted to find wrinkles and folds in face. This is deployed into AWS cloud.",
              ]}
            />
               <Resumecontent
              title="Software Developer, Temenos India Pvt Ltd."
              date="July 2016 - April 2018"
              content={[
                "Develop and support modules in Temenos product.",
                "Proposed and part in developed Image Processing algorithms for data and text extraction.",
                "Data Analysis is later performed on the text extracted from the images.",
                "Research is carried out to design and optimize SVM algorithms and existing tools.",
              ]}
            />
        
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="M.Sc. Image Processing and Computer Vision [University of Bordeaux, France] "
              date="2018 - 2020"
              content={[`CGPA: 14/20`]}
            />
            <Resumecontent
              title="B.Tech. Electronics and Communication Engineering [National Institute of Technology, Trichy] "
              date="2012 - 2016"
              content={[`CGPA: 8.76/10`]}
            />

            <h3 className="resume-title">Internship</h3>
              <Resumecontent
                title="Deep Learning plant disease classification, Solarvibes GmBH"
                content={[
                  "Develop deep learning architecture based on Tensorflow for Disease and pest recognition in plants for over 212 different classes.",
                  "Deploy the models in the AWS cloud and develop a pipeline to interact with the mobile applications and models",
                  "Integrated hardware sensors to AWS IoT.",
                ]}
              />
          </Col>
        </Row>

      </Container>
    </Container>
  );
}

export default Resume;
