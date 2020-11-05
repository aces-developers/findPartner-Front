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
  <Card.Header> Complete your free account setup </Card.Header>
  <Card.Body>
  <Form>
  
  <Button variant="primary">Continue with LinkedIn</Button>

  <Form.Group controlId="formBasicEmail" >
  <Form.Label>Name</Form.Label>
    <Form.Control type="text" placeholder=" John Doe" className="inputs"/>
  <Form.Label>Create Password</Form.Label>
    <Form.Control type="password" placeholder="password" className="inputs"/>
    <Form.Label>Location</Form.Label>
    <Form.Control as="select" custom className="inputs">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
      </Form.Control>
    <Form.Label>Category</Form.Label>
    <Form.Control as="select" custom className="inputs">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
      </Form.Control>
          <Form.Label>Skills</Form.Label>
    <Form.Control type="password" placeholder="password" className="inputs"/>
   
  </Form.Group>

  <Button variant="primary">Create my </Button>
  
</Form>
  </Card.Body>
</Card>


</>
  )
}