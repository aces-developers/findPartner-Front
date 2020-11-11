import React, { useState } from "react";
import { Alert, Card, Form, Button, Container } from "react-bootstrap";
import { connect, useDispatch } from "react-redux";
import { IsExist } from "../../store/users/users.store";
import { Link } from "react-router-dom";
import { If, Then } from "../IF";
import { Redirect } from "react-router";
import "./signUp.scss";

function Signup(props) {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");

  const handlesubmit = (e) => {
    e.preventDefault();
    const load = async () => {
      console.log("event ->>>>", email);
      await dispatch(IsExist(email));
    };

    load();
  };

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div className="signup-section" style={{ height: "70vh" }}>
      <Container className="signup-container">
        <Card className="text-center signup-card">
          <Card.Header className="signup-header">Sign up</Card.Header>
          <Card.Body>
            <Form onSubmit={handlesubmit}>
              <Button className="con-linkedin">Continue with LinkedIn</Button>

              <Form.Group controlId="formBasicEmail" className="inp-email">
                <Form.Control
                  name="email"
                  type="email"
                  onChange={handleChange}
                  placeholder="ex: John@gmail.com"
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Button type="submit" className="con-email">
                Continue with Email
              </Button>
            </Form>
          </Card.Body>
        </Card>
        {/* {
        props.message &&
     
      
      } */}

        <If condition={props.message === "y"}>
          <Then>
            <Alert variant="danger" className="alert-style">
              you are already have Account
              <Link className="alert-style-link " to="/SignIn">
                Go to Login
              </Link>
            </Alert>
          </Then>
        </If>
        <If condition={props.message === "z"}>
          <Then>
            <Redirect
              to={{
                pathname: "/Regisration",
                state: { email: email },
              }}
            />
          </Then>
        </If>
      </Container>
    </div>
  );
}

const mapStateToProps = (state) => ({
  users: state.users.users,
  message: state.users.message,
});

export default connect(mapStateToProps)(Signup);
