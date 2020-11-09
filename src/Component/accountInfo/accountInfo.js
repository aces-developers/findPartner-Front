import React, { useState } from "react";
import { InputGroup, Col, ButtonGroup, Dropdown, DropdownButton, Form, Button } from "react-bootstrap";
import { connect, useDispatch } from "react-redux";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Redirect } from "react-router";
import { SignUp } from "../../store/users/users.store";
// const { Formik } = formik;

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
 function CompleteSignup(props) {
  const dispatch = useDispatch();

  console.log('props --->>> CompleteSignup ----> ', props.location.state.email)
  return (
    <Formik
      validationSchema={SignUpSchema}
      onSubmit={ async (values, { setSubmitting }) => {
        await dispatch(SignUp(values))
      console.log('  isValid: state.users.isValid,',props.isValid);
      setTimeout(() => {
        if(props.isValid){
         props.history.push("./signin")
        }
      }, 4000);
     
      }}
      initialValues={{
        email: props.location.state.email,
        fullname: '',
        username: '',
        location: '',
        skillCat: '',
        password: '',
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
          <Form noValidate onSubmit={handleSubmit}>
            <Form.Row>
              <Form.Group as={Col} md="4" controlId="validationFormik101">
                <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationFormikUsername2">
                <Form.Label>Full Name</Form.Label>
                <InputGroup>
                  {/* <InputGroup.Prepend>
                    <InputGroup.Text id="inputGroupPrepend"></InputGroup.Text>
                  </InputGroup.Prepend> */}
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
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} md="6" controlId="validationFormik103">
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
              <Form.Group as={Col} md="3" controlId="validationFormik104">
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
              <Form.Group as={Col} md="3" controlId="validationFormik105">
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
            </Form.Row>
            <Form.Group as={Col} md="3" controlId="validationFormik106">
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
            <Form.Group as={Col} md="3" controlId="validationFormik107">
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
            <Form.Group as={Col} md="3" controlId="skillcat12">
              <Form.Label>Skill Cat</Form.Label>
              <Form.Control as="select"   onChange={handleChange}
                onBlur={handleBlur}
                name="skillCat"
                value={values.skillCat}
                id="dropdown-item-button">
              <option name="skillCat" value='Engineering'>Engineering</option >
                <option name="skillCat" value='Arts'>Arts</option >
                <option name="skillCat" value='Business'>Business</option >
                <option name="skillCat" value='Communications'>Communications</option >
                <option name="skillCat" value='Community'>Community</option >
                <option name="skillCat" value='Education'>Education</option >
                <option name="skillCat" value='Science'>Science</option >
                <option name="skillCat" value='Farming'>Farming</option >
                <option name="skillCat" value='Health'>Health</option >
                <option name="skillCat" value='IT'>IT</option >
           </Form.Control>

            </Form.Group>
            <Button type="submit">Submit form</Button>
          </Form>
        )}
    </Formik>
    
  );

}

const mapStateToProps = (state) => ({
  message: state.users.message,
  isValid: state.users.isValid,

});


export default connect(mapStateToProps)(CompleteSignup);


