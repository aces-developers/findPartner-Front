import React from "react";
import { Card, Form, Button } from "react-bootstrap";
import { SignIn } from "../../store/users/users.store";
import { connect, useDispatch } from "react-redux";
import { setSession } from "../../store/projects/project.store";

function Signin(props) {
  const dispatch = useDispatch();
  const handlesubmit = async (e) => {
    e.preventDefault();
    console.log("event ->>>>", e.target.username.value," ",e.target.password);
    let user={username: e.target.username.value,password:e.target.password.value}
    await dispatch(SignIn(user));
    await dispatch(setSession(props.users.token))
    setTimeout(() => {
      props.history.push("./")
    }, 2000);
  };
  


 
  return (
    <>

      <style type="text/css">
        {`
       .inputs {
           width:50%;
           margin:2% 25% ;
      }
      .welcomeUser{
        font-size: calc(7px + 2vmin);
    }
    
    `}
      </style>
      <Card className="text-center">
        <Card.Header> Sign In </Card.Header>
        <Card.Body>
          <Form onSubmit={handlesubmit}>
            <Form.Text className="text-muted welcomeUser">
              Welcome Back
         </Form.Text>
            <Button variant="primary">Continue with LinkedIn</Button>

            <Form.Group controlId="formBasicEmail" >
              <Form.Control name='username' type="text" placeholder="ex: John@gmail.com" className="inputs" />
              <Form.Control  name='password' type="password" placeholder="password" className="inputs" />

            </Form.Group>

            <Button variant="primary" type="submit" >Login</Button>

          </Form>
        </Card.Body>
      </Card>


    </>
  )
}

const mapStateToProps = (state) => ({
  users: state.users.account,
  projetcs: state.projects.sessionToken
});


export default connect(mapStateToProps)(Signin);

