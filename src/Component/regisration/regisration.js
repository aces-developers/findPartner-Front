import React, { useState } from "react";
import {
  InputGroup,
  Col,
  Row,
  ButtonGroup,
  Dropdown,
  DropdownButton,
  Form,
  Button,
  Container,
  Card,
} from "react-bootstrap";
import { connect, useDispatch } from "react-redux";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Redirect } from "react-router";
import { SignUp } from "../../store/users/users.store";
import { apply } from "../../store/projects/project.store";

const SignUpSchema = Yup.object().shape({
  fullname: Yup.string()
    .min(2, "Too Short!")
    .max(80, "Too Long!")
    .required("Firstname is required"),
  skill: Yup.string(),
  skillCat: Yup.string(),
  email: Yup.string().email().required("Email is required"),
  location: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("location is required"),
  username: Yup.string()
    .min(2, "Too Short!")
    .max(80, "Too Long!")
    .required("Firstname is required"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password is too short - should be 8 chars minimum"),
});
function Regisration(props) {
  const dispatch = useDispatch();

  return (
    <Formik
      validationSchema={SignUpSchema}
      onSubmit={async (values, { setSubmitting }) => {
        await dispatch(SignUp(values));
        console.log("  isValid: state.users.isValid,", props.isValid);
        setTimeout(() => {
          if (props.isValid) {
            props.history.push("./signin");
          }
        }, 4000);
      }}
      initialValues={{
        email: props.location.state.email,
        fullname: "",
        username: "",
        location: "",
        skillCat: "",
        password: "",
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
        <div className="signup-section">
          <Container>
            <Row className="justify-content-md-center">
              <Col md={6}>
                <Card className="p-4">
                  <Form noValidate onSubmit={handleSubmit}>
                    <Form.Group controlId="validationFormik101">
                      <Form.Control.Feedback tooltip>
                        Looks good!
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group controlId="validationFormikUsername2">
                      <Form.Label>Full Name</Form.Label>
                      <InputGroup>
                        <Form.Control
                          type="text"
                          placeholder="Name"
                          aria-describedby="inputGroupPrepend"
                          name="fullname"
                          value={values.fullname}
                          onChange={handleChange}
                          isInvalid={!!errors.fullname}
                        />
                        <Form.Control.Feedback type="invalid" tooltip>
                          {errors.fullname}
                        </Form.Control.Feedback>
                      </InputGroup>
                    </Form.Group>

                    <Form.Group controlId="validationFormik103">
                      <Form.Label>Location</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Location"
                        name="location"
                        value={values.location}
                        onChange={handleChange}
                        isInvalid={!!errors.location}
                      />

                      <Form.Control.Feedback type="invalid" tooltip>
                        {errors.location}
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group controlId="validationFormik104">
                      <Form.Label>user name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="User Name"
                        name="username"
                        value={values.username}
                        onChange={handleChange}
                        isInvalid={!!errors.username}
                      />
                      <Form.Control.Feedback type="invalid" tooltip>
                        {errors.username}
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group controlId="validationFormik105">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Email"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        isInvalid={!!errors.email}
                      />

                      <Form.Control.Feedback type="invalid" tooltip>
                        {errors.email}
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group controlId="validationFormik106">
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={values.password}
                        onChange={handleChange}
                        isInvalid={!!errors.password}
                      />

                      <Form.Control.Feedback type="invalid" tooltip>
                        {errors.password}
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group controlId="validationFormik107">
                      <Form.Label>Skill</Form.Label>
                      <Form.Control
                        type="skill"
                        placeholder="Skill"
                        name="skill"
                        value={values.skill}
                        onChange={handleChange}
                        isInvalid={!!errors.skill}
                      />

                      <Form.Control.Feedback type="invalid" tooltip>
                        {errors.skill}
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group controlId="skillcat12">
                      <Form.Label>Skill Cat</Form.Label>
                      <Form.Control
                        as="select"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        name="skillCat"
                        value={values.skillCat}
                        id="dropdown-item-button"
                      >
                        <option name="skillCat" value="engineering">
                          Engineering
                        </option>
                        <option name="skillCat" value="arts">
                          Arts
                        </option>
                        <option name="skillCat" value="business">
                          Business
                        </option>
                        <option name="skillCat" value="communications">
                          Communications
                        </option>
                        <option name="skillCat" value="community">
                          Community
                        </option>
                        <option name="skillCat" value="cducation">
                          Education
                        </option>
                        <option name="skillCat" value="science">
                          Science
                        </option>
                        <option name="skillCat" value="farming">
                          Farming
                        </option>
                        <option name="skillCat" value="health">
                          Health
                        </option>
                        <option name="skillCat" value="it">
                          IT
                        </option>
                      </Form.Control>
                    </Form.Group>
                    <Button type="submit">Submit form</Button>
                  </Form>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      )}
    </Formik>
  );
}

const mapStateToProps = (state) => ({
  message: state.users.message,
  isValid: state.users.isValid,
});

export default connect(mapStateToProps)(Regisration);
