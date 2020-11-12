import React from "react";
import {
  Form,
  CardGroup,
  Card,
  Button,
  Container,
  Row,
  Col,
  Media,
} from "react-bootstrap";
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBIcon } from "mdbreact";
import Abd from "./Abd.jpg";
import Ahmad from "./Ahmad.jpeg";
import Hidaya from "./Hidaya.jpg";
import Waleed from "./Waleed.jpg";
import "./about.scss";
export default function SignIn(props) {
  return (
    <>
      <style type="text/css">
        {`
      
    .teamPic{
        //border:5px solid red;
        //border-radius: 50% 50% 50% 50%;
    }
    .teamGroup{
        margin:10% auto;
        width:70%;
    }
    .memberCard{
        margin:1%;
        
    }
    
    `}
      </style>
      <ul className="list-unstyled"></ul>
      {/* ----------------------- */}
      <section className="aboutus-section">
        <h1> About us</h1>
      </section>
      <section
        className="title-section"
        style={{ height: 300, backgroundColor: "#f7f7fe" }}
      >
        <h1> Find Partner</h1>

        <br />
        <div className="about-list">
          Find Partner is a place where people can publish their projects to
          seek in a partner to share their vision. Place where people can have a
          look at emerging projects. And apply for the project that matches
          their skills.
        </div>
      </section>
      <MDBCard className=" border-0 px-5 pb-5 text-center">
        <MDBCardBody>
          <h2 className="h1-responsive font-weight-bold my-5">Asec team</h2>
          <p className="grey-text w-responsive mx-auto mb-5">
            We are blend of the curious, the creative and technical.A talented
            group which is more than the sum of its parts.We create digital
            chemistry.
          </p>
          <MDBRow>
            <MDBCol lg="3" md="6" className="mb-lg-0 mb-5">
              <img
                tag="img"
                src={Abd}
                className="rounded-circle z-depth-1 img-fluid "
                alt="Sample avatar"
              />
              <h5 className="font-weight-bold mt-4 mb-3">Abdulah Safi</h5>
              <p className="text-uppercase blue-text">Team leader</p>
              <p className="grey-text"></p>
              <ul className="list-unstyled mb-0">
                <a href="#!" className="p-2 fa-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                  </svg>{" "}
                </a>
                <a href="https://github.com/AbdallahSafi" className="p-2 fa-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>{" "}
                </a>
              </ul>
            </MDBCol>

            <MDBCol lg="3" md="6" className="mb-lg-0 mb-5">
              <img
                tag="img"
                src={Ahmad}
                className="rounded-circle z-depth-1 img-fluid "
                alt="Sample avatar"
              />
              <h5 className="font-weight-bold mt-4 mb-3">Ahmad Abdulatef</h5>
              <p className="text-uppercase blue-text">Web Developer</p>
              <p className="grey-text"></p>
              <ul className="list-unstyled mb-0">
                <a
                  href="https://www.linkedin.com/in/ahmad-abdulatef-121066181"
                  className="p-2 fa-lg"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                  </svg>
                </a>
                <a href="https://github.com/AhmadKheder" className="p-2 fa-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>{" "}
                </a>
              </ul>
            </MDBCol>

            <MDBCol lg="3" md="6" className="mb-lg-0 mb-5">
              <img
                tag="img"
                src={Hidaya}
                className="rounded-circle z-depth-1 img-fluid "
                alt="Sample avatar"
              />
              <h5 className="font-weight-bold mt-4 mb-3">Hidaya Syam</h5>
              <p className="text-uppercase blue-text">Web Developer</p>
              <p className="grey-text"></p>
              <ul className="list-unstyled mb-0">
                <a
                  href="https://www.linkedin.com/in/hidayasyam"
                  className="p-2 fa-lg"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                  </svg>
                </a>
                <a href="https://github.com/HidayaSyam" className="p-2 fa-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>{" "}
                </a>
              </ul>
            </MDBCol>

            <MDBCol lg="3" md="6" className="mb-lg-0 mb-5">
              <img
                tag="img"
                src={Waleed}
                className="rounded-circle z-depth-1 img-fluid "
                alt="Sample avatar"
              />
              <h5 className="font-weight-bold mt-4 mb-3">Waleed Farraj</h5>
              <p className="text-uppercase blue-text">Web Developer</p>
              <p className="grey-text"></p>
              <ul className="list-unstyled mb-0">
                <a
                  href="https://www.linkedin.com/in/waleed-farraj"
                  className="p-2 fa-lg"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                  </svg>
                </a>
                <a href="https://github.com/waleedfarraj" className="p-2 fa-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>{" "}
                </a>
              </ul>
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
      {/*<CardGroup className="teamGroup" >
      
      <Card className="memberCard">
         
    <Card.Img variant="top" src={Abdullah} className="teamPic"/>
   
    <Card.Body>
      <Card.Title>Abdulah</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Team Leader</small><br/>
    <Card.Link href="#">LinkedIn</Card.Link>
    </Card.Footer>
  </Card>
  <Card className="memberCard">
    <Card.Img variant="top" src={Ahmad} className="teamPic"/>
    <Card.Body>
      <Card.Title>Ahmad</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Developer</small><br/>
      <Card.Link href="#">LinkedIn</Card.Link>
    </Card.Footer>
  </Card>
  <Card className="memberCard">
    <Card.Img variant="top" src={Hidaya} className="teamPic" />
    <Card.Body>
      <Card.Title>Hidaya</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Developer</small><br/>
      <Card.Link href="#">LinkedIn</Card.Link>
    </Card.Footer>
  </Card>
  <Card className="memberCard">
    <Card.Img variant="top" src={Waleed} className="teamPic"/>
    <Card.Body>
      <Card.Title>Waleed</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Developer</small><br/>
      <Card.Link href="#">LinkedIn</Card.Link>
    </Card.Footer>
  </Card>
</CardGroup>*/}
    </>
  );
}
