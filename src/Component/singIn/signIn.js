import React from "react";
import { Card,Form, Button } from "react-bootstrap";

export default function SignIn(props) {
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
  <Form>
  <Form.Text className="text-muted welcomeUser">
     Welcome Back
    </Form.Text>
  <Button variant="primary">Continue with LinkedIn</Button>

  <Form.Group controlId="formBasicEmail" >
    <Form.Control type="email" placeholder="ex: John@gmail.com" className="inputs"/>
    <Form.Control type="password" placeholder="password" className="inputs"/>
   
  </Form.Group>

  <Button variant="primary">Continue with Email</Button>
  
</Form>
  </Card.Body>
</Card>


</>
  )
}