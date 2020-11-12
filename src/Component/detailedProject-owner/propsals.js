import React, { Component, useEffect } from "react";
import { Card, Container, Row, Col, Alert } from "react-bootstrap";
import { connect, useDispatch } from "react-redux";
//import Card from "../projects/card/p-Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faTag } from "@fortawesome/free-solid-svg-icons";


export const Propsals = (props) => {
  console.log("2234567890", props.props);
   const variant = "dark"
  return (
    <>
       {props.props.proposalData && props.props.proposalData.length === 0 && <Alert className="mt-4"  variant={variant}> There is no propsals yet ! Stay around though ...</Alert> }
      {props.props.proposalData && (
        <div>
          
          {props.props.proposalData.map((item, index) => {
            return (
              <div key={index}>
                <Container>
                  <Row>
                    <Col>
                      <Card className="card-style">
                        <Card.Body className="body-style">
                          <Card.Text style={{ fontSize: 20, fontWeight: 300 }}>
                            <FontAwesomeIcon
                              icon={faUser}
                              className="mr-2"
                              style={{ fontSize: 20 }}
                              style={{ color: "#00b4db" }}
                            />
                            {item.username}
                          </Card.Text>
                          <Card.Text>{item.email}</Card.Text>
                          <Card.Text>{item.proposal}</Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                </Container>
              </div>
            );
          })}
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
