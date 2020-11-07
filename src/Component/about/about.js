import React from "react";
import {  Form, CardGroup, Card, Button ,Container,Row,Col} from "react-bootstrap";
import avatar from "./avatar.jpg";

export default function SignIn(props) {
  return (
      <>

<style type="text/css">
        {`
      
    .teamPic{
        //border:5px solid red;
        //border-radius: 50% 50% 50% 50%;
    }
    .teamGroup{
        margin:10% auto;
        width:70%;
    }
    .memberCard{
        margin:1%;
        
    }
    `}
      </style>
      <Card className="text-center">
  <Card.Header>Vision</Card.Header>
  <Card.Body>
    <Card.Title>Special title treatment</Card.Title>
    <Card.Text>
    With supporting text below as a natural lead-in to additional content.
    With supporting text below as a natural lead-in to additional content.
    With supporting text below as a natural lead-in to additional content.
    With supporting text below as a natural lead-in to additional content.
    </Card.Text>
  </Card.Body>
</Card>
   {/* Team */}
      <CardGroup className="teamGroup" >
      
      <Card className="memberCard">
         
    <Card.Img variant="top" src={avatar} className="teamPic"/>
   
    <Card.Body>
      <Card.Title>Abdulah</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Team Leader</small><br/>
    <Card.Link href="#">LinkedIn</Card.Link>
    </Card.Footer>
  </Card>
  <Card className="memberCard">
    <Card.Img variant="top" src={avatar} className="teamPic"/>
    <Card.Body>
      <Card.Title>Ahmad</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Developer</small><br/>
      <Card.Link href="#">LinkedIn</Card.Link>
    </Card.Footer>
  </Card>
  <Card className="memberCard">
    <Card.Img variant="top" src={avatar} className="teamPic" />
    <Card.Body>
      <Card.Title>Hidaya</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Developer</small><br/>
      <Card.Link href="#">LinkedIn</Card.Link>
    </Card.Footer>
  </Card>
  <Card className="memberCard">
    <Card.Img variant="top" src={avatar} className="teamPic"/>
    <Card.Body>
      <Card.Title>Waleed</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Developer</small><br/>
      <Card.Link href="#">LinkedIn</Card.Link>
    </Card.Footer>
  </Card>
</CardGroup>

</>
  )
}