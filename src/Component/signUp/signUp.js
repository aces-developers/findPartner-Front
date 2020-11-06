import React from "react";
import { Col, Row,Card,Form, Button } from "react-bootstrap";

export default function SignUp(props) {
  return (
      <>

<style type="text/css">
        {`
       .inputs {
           width:50%;
           margin:2% 25% ;
      }
    
    `}
      </style>
<Card className="text-center">
  <Card.Header>Sign UP</Card.Header>
  <Card.Body>
  <Form>
  <Button variant="primary">Continue with LinkedIn</Button>

  <Form.Group controlId="formBasicEmail" >
    <Form.Control type="email" placeholder="ex: John@gmail.com" className="inputs"/>
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Button variant="primary">Continue with Email</Button>
  
</Form>
  </Card.Body>
</Card>


</>
  )
}