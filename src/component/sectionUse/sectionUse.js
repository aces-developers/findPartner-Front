import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "./sectionUse.scss";
import post from "./post.svg";
import search from "./search.svg";
import collaboration from "./collaboration.svg";

export default function Ues(props) {
  return (
    <>
      <Container>
        <h4 className="sectionTitle">How it works</h4>
        <Row className="mt-4">
          <Col className="flex-container" xs={6} md={4}>
            <div className="Image-box">
              <Image
                style={{
                  width: "120px",
                  height: "120px",
                }}
                src={post}
              />
            </div>

            <h4> Post a Project</h4>
            <p>
              Tell us about your project. FindPartner connects you with the
              perfect partner around the world, or near you.
            </p>
          </Col>

          <Col className="flex-container" xs={6} md={4}>
            <div className="Image-box">
              <Image style={{ width: "120px", height: "120px" }} src={search} />
            </div>
            <h4> Applicants come to you</h4>
            <p>
              Whatever your needs, there will be a partner to join your project
            </p>
          </Col>
          <Col className="flex-container" xs={6} md={4}>
            <div className="Image-box">
              <Image
                style={{ width: "120px", height: "120px" }}
                src={collaboration}
              />
            </div>
            <h4>Choose a partner</h4>
            <p>Use FindPartner to chat and Collaborate easily</p>
          </Col>
        </Row>
      </Container>
    </>
  );
}
