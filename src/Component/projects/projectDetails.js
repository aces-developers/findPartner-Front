import React, { useEffect } from "react";
import {
  Alert,
  Card,
  Form,
  Button,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import { connect, useDispatch } from "react-redux";
import { getproject, apply } from "../../store/projects/project.store";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faTag } from "@fortawesome/free-solid-svg-icons";

const Schema = Yup.object().shape({
  proposal: Yup.string().min(15, "Too Short!").required("proposal is required"),
});
function Details(props) {
  const dispatch = useDispatch();
  const { _id } = props.props.match.params;

  return (
    <>
      {props.projectData && (
        <div className="signup-section" style={{ minHeight: "70vh" }}>
          <Container>
            <Row className="justify-content-center">
              <Col md={12}>
                <h4 className="mb-4" style={{ color: "#0083b0" }}>
                  Project details
                </h4>
                <Card className="w-100 shadow-sm border-0">
                  <Card.Body>
                    <Card.Title
                      style={{ textTransform: "capitalize", color: "#333" }}
                    >
                      {props.projectData.title}
                    </Card.Title>
                    <Card.Text style={{ fontSize: 12, fontWeight: 300 }}>
                      <FontAwesomeIcon
                        icon={faUser}
                        className="mr-2"
                        style={{ color: "#00b4db" }}
                      />
                      {props.projectData._ownerName}
                    </Card.Text>
                    <hr></hr>
                    <Card.Text>{props.projectData.description}</Card.Text>
                    <Card.Text
                      className="mt-4"
                      style={{ textTransform: "capitalize" }}
                    >
                      <FontAwesomeIcon
                        icon={faTag}
                        className="mr-2"
                        style={{ color: "#f77d0e" }}
                      />
                      {props.projectData.category}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>

            <Formik
              validationSchema={Schema}
              onSubmit={async (values, { setSubmitting }) => {
                console.log("apply submit");
                await dispatch(apply(_id, values));
                //console.log('  isValid: state.users.isValid,', props.isValid);
                setTimeout(() => {
                  // props.history.push("/");
                }, 4000);
              }}
              initialValues={{
                proposal: "",
              }}
            >
              {({
                handleSubmit,
                handleChange,
                handleBlur,
                setFieldValue,
                values,
                touched,
                isValid,
                errors,
              }) => (
                <Form className="mt-4" onSubmit={handleSubmit}>
                  <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label style={{ color: "#0083b0", fontWeight: 600 }}>
                      Propsal
                    </Form.Label>
                    <Form.Control
                      name="proposal"
                      onChange={handleChange}
                      isInvalid={!!errors.proposal}
                      value={values.proposal}
                      as="textarea"
                      rows={7}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.proposal}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Button
                    type="submit"
                    className="con-linkedin d-block mt-4 ml-auto"
                    style={{
                      width: "fit-content",
                      fontWeight: 600,
                      paddingLeft: 30,
                      paddingRight: 30,
                    }}
                  >
                    Apply
                  </Button>
                </Form>
              )}
            </Formik>
          </Container>
        </div>
      )}
    </>
  );
}

const mapStateToProps = (state) => ({
  projectData: state.projects.projectData,
});

export default connect(mapStateToProps)(Details);
