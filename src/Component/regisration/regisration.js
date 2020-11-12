import React, { useEffect } from "react";
import { Col, Row, Form, Button, Container, Card } from "react-bootstrap";
import { connect, useDispatch } from "react-redux";
import { Formik } from "formik";
import * as Yup from "yup";
import { SignUp } from "../../store/users/users.store";
import { getListOfcountries } from "../../store/users/users.store";

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

  useEffect(() => {
    dispatch(getListOfcountries());
  }, []);

  return (
    <Formik
      validationSchema={SignUpSchema}
      onSubmit={async (values, { setSubmitting }) => {
        await dispatch(SignUp(values));
        console.log("  isValid: state.users.isValid,", props.isValid);
        setTimeout(() => {
          if (props.isValid) {
          }
        }, 4000);
      }}
      initialValues={{
        email: props.location.state.email,
        fullname: "",
        username: "",
        location: "Jordan",
        skillCat: "health",
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
                <Card>
                  <Card.Header className="signup-header text-center">
                    Complete Registration
                  </Card.Header>
                  <Card.Body className="p-4 ">
                    <Form noValidate onSubmit={handleSubmit}>
                      <Form.Group controlId="validationFormik101">
                        <Form.Control.Feedback tooltip>
                          Looks good!
                        </Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group
                        className="w-75 m-auto "
                        controlId="validationFormikUsername2"
                      >
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Name"
                          aria-describedby="inputGroupPrepend"
                          name="fullname"
                          value={values.fullname}
                          onChange={handleChange}
                          isInvalid={!!errors.fullname}
                          className="mb-4"
                        />
                        <Form.Control.Feedback type="invalid" tooltip>
                          {errors.fullname}
                        </Form.Control.Feedback>
                      </Form.Group>

                      <Form.Group
                        className="w-75 m-auto"
                        controlId="validationFormik103"
                      >
                        <Form.Label>Location</Form.Label>
                        <Form.Control
                          as="select"
                          name="location"
                          value={values.location}
                          onChange={handleChange}
                          isInvalid={!!errors.location}
                          className="mb-4"
                        >
                          {props.countries.map((country) => {
                            return <option value={country}>{country}</option>;
                          })}
                        </Form.Control>

                        <Form.Control.Feedback type="invalid" tooltip>
                          {errors.location}
                        </Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group
                        className="w-75 m-auto"
                        controlId="validationFormik104"
                      >
                        <Form.Label>User name</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="User Name"
                          name="username"
                          value={values.username}
                          onChange={handleChange}
                          isInvalid={!!errors.username}
                          className="mb-4"
                        />
                        <Form.Control.Feedback type="invalid" tooltip>
                          {errors.username}
                        </Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group
                        className="w-75 m-auto"
                        controlId="validationFormik105"
                      >
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Email"
                          name="email"
                          value={values.email}
                          onChange={handleChange}
                          isInvalid={!!errors.email}
                          className="mb-4"
                        />

                        <Form.Control.Feedback type="invalid" tooltip>
                          {errors.email}
                        </Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group
                        className="w-75 m-auto"
                        controlId="validationFormik106"
                      >
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                          type="password"
                          placeholder="Password"
                          name="password"
                          value={values.password}
                          onChange={handleChange}
                          isInvalid={!!errors.password}
                          className="mb-4"
                        />

                        <Form.Control.Feedback type="invalid" tooltip>
                          {errors.password}
                        </Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group
                        className="w-75 m-auto"
                        controlId="validationFormik107"
                      >
                        <Form.Label>Skill</Form.Label>
                        <Form.Control
                          type="skill"
                          placeholder="Skill"
                          name="skill"
                          value={values.skill}
                          onChange={handleChange}
                          isInvalid={!!errors.skill}
                          className="mb-4"
                        />

                        <Form.Control.Feedback type="invalid" tooltip>
                          {errors.skill}
                        </Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group
                        className="w-75 m-auto"
                        controlId="skillcat12"
                      >
                        <Form.Label>Skill Cat</Form.Label>
                        <Form.Control
                          as="select"
                          onChange={handleChange}
                          // onBlur={handleBlur}
                          name="skillCat"
                          value={values.skillCat}
                          className="mb-4"
                        >
                          <option value="engineering">Engineering</option>
                          <option value="arts">Arts</option>
                          <option value="business">Business</option>
                          <option value="communications">Communications</option>
                          <option value="community">Community</option>
                          <option value="education">Education</option>
                          <option value="science">Science</option>
                          <option value="farming">Farming</option>
                          <option value="health">Health</option>
                          <option value="it">IT</option>
                        </Form.Control>
                      </Form.Group>
                      <div className="d-flex mb-4">
                        <Button
                          type="submit"
                          className="w-75 m-auto con-linkedin"
                        >
                          Submit
                        </Button>
                      </div>
                    </Form>
                  </Card.Body>
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
  countries: state.users.countries,
});

export default connect(mapStateToProps)(Regisration);
