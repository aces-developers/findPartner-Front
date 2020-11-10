import React, { Component } from "react";
import {
  Button,
  Card,
  ButtonGroup,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import { connect, useDispatch } from "react-redux";
import { DeleteModal } from "./DeleteModel";
import { setDeleteModal } from "../../store/projects/project.store";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faTag } from "@fortawesome/free-solid-svg-icons";

export const Details = (props) => {
  console.log("wth where am i ", props);
  const dispatch = useDispatch();
  function DelModals() {
    if (props.props.deleteModal) {
      return <DeleteModal props={props.props} />;
    } else return <></>;
  }

  const modalInitiate = () => {
    dispatch(setDeleteModal(!props.props.deleteModal));
  };
  return (
    <>
      <Container>
        <Row className="justify-content-center">
          <Col md={12}>
            {props.props.projectData && (
              <Card className="w-100 shadow-sm border-0">
                <Card.Body>
                  <Card.Title
                    style={{ textTransform: "capitalize", color: "#333" }}
                  >
                    {props.props.projectData[0].title}
                  </Card.Title>
                  <Card.Text style={{ fontSize: 12, fontWeight: 300 }}>
                    <FontAwesomeIcon
                      icon={faUser}
                      className="mr-2"
                      style={{ color: "#00b4db" }}
                    />
                    {props.props.projectData[0]._ownerName}
                  </Card.Text>
                  <hr></hr>

                  <Card.Text>
                    {props.props.projectData[0].description}
                  </Card.Text>
                  <Card.Text
                    className="mt-4"
                    style={{ textTransform: "capitalize" }}
                  >
                    <FontAwesomeIcon
                      icon={faTag}
                      className="mr-2"
                      style={{ color: "#f77d0e" }}
                    />
                    {props.props.projectData[0].category}{" "}
                  </Card.Text>
                </Card.Body>
              </Card>
            )}
            <div className="d-flex mt-4 justify-content-end">
              <Button
                style={{
                  width: "fit-content",
                  fontWeight: 600,
                  paddingLeft: 30,
                  paddingRight: 30,
                  marginBottom: 0,
                }}
                variant="secondary"
                className="mr-4 con-linkedin"
              >
                <Link
                  style={{ color: "white" }}
                  to={`/edit/${props.props.match.params._id}`}
                >
                  Edit
                </Link>
              </Button>
              <Button
                style={{
                  width: "fit-content",
                  fontWeight: 600,
                  paddingLeft: 30,
                  paddingRight: 30,
                }}
                onClick={modalInitiate}
                variant="secondary"
              >
                Delete
              </Button>
            </div>
            <DelModals />
          </Col>
        </Row>
      </Container>
    </>
  );
};

const mapStateToProps = (state) => ({
  details: state.projects.projectDetails,
  Modal: state.projects.Modal,
  projectData: state.projects.projectData,
  deleteModal: state.projects.deleteModal,
  account: state.users.account,
  check: state.projects.check,
});

export default connect(mapStateToProps)(Details);
