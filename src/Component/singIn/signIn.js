import React from "react";
import { Card, Form, Button, Container } from "react-bootstrap";
import { SignIn } from "../../store/users/users.store";
import { connect, useDispatch } from "react-redux";
import { setSession } from "../../store/projects/project.store";
import "../signUp/signUp.scss";

function Signin(props) {
  const dispatch = useDispatch();
  const handlesubmit = async (e) => {
    e.preventDefault();
    let user = {
      username: e.target.username.value,
      password: e.target.password.value,
    };
    await dispatch(SignIn(user));
    // await dispatch(setSession(props.users.token));
    // setTimeout(() => {
    //   props.history.push("./");
    // }, 2000);
  };

  return (
    <>
      <div className="signup-section" style={{ height: "70vh" }}>
        <Container className="signup-container">
          <Card className="text-center signup-card">
            <Card.Header className="signup-header"> Sign in </Card.Header>
            <Card.Body>
              <Form onSubmit={handlesubmit}>
                <Form.Text className="text-muted mb-2">Welcome Back</Form.Text>
                <Button className="con-linkedin">Continue with LinkedIn</Button>

                <Form.Group controlId="formBasicEmail" className="inp-email">
                  <Form.Control
                    name="username"
                    type="text"
                    placeholder="ex: Elon musk"
                    className="mb-2"
                  />
                  <Form.Control
                    name="password"
                    type="password"
                    placeholder="password"
                  />
                </Form.Group>

                <Button className="con-email" type="submit">
                  Login
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Container>
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  users: state.users.account,
  projetcs: state.projects.sessionToken,
});

export default connect(mapStateToProps)(Signin);
