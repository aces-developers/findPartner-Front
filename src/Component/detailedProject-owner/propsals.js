import React, { Component, useEffect } from "react";
import { Card, Container, Row, Col, Alert } from "react-bootstrap";
import { connect, useDispatch } from "react-redux";
//import Card from "../projects/card/p-Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export const Propsals = (props) => {
  console.log("2234567890", props.props);
  const variant = "dark";
  return (
    <>
      {props.props.proposalData && props.props.proposalData.length === 0 && (
        <Alert className="mt-4" variant={variant}>
          There is no propsals yet ! Stay around though ...
        </Alert>
      )}
      {props.props.proposalData && (
        <div>
          <Container>
            <Row>
              <Col>
                <Card
                  className="border-0 m-0 w-100 p-2"
                  hidden={props.props.proposalData.length === 0}
                >
                  {props.props.proposalData.map((item, index) => {
                    return (
                      <div key={index}>
                        <Card
                          className="  p-4 w-75 m-3"
                          style={{ backgroundColor: "#F7F7FE" }}
                        >
                          <Card.Body>
                            <Card.Text
                              style={{ fontSize: 20, fontWeight: 500 }}
                            >
                              <FontAwesomeIcon
                                icon={faUser}
                                className="mr-2"
                                style={{ fontSize: 20 }}
                                style={{ color: "#00b4db" }}
                              />
                              {item.username}
                            </Card.Text>
                            <Card.Text
                              style={{
                                backgroundColor: "#fff",
                                padding: 20,
                                borderRadius: 5,
                              }}
                            >
                              {item.proposal}
                            </Card.Text>
                            <Card.Text>
                              <FontAwesomeIcon
                                icon={faEnvelope}
                                className="mr-2"
                                style={{ fontSize: 20 }}
                                style={{ color: "#F17F3B" }}
                              />
                              {item.email}
                            </Card.Text>
                          </Card.Body>
                        </Card>
                      </div>
                    );
                  })}
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  proposalData: state.projects.proposalData,
  account: state.users.account,
});

export default connect(mapStateToProps)(Propsals);
