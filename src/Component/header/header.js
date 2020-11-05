
import React from "react";
import { Container, Navbar, Nav, Form, Button } from "react-bootstrap";
import {NavLink} from 'react-router-dom'
import findPartner from "./findPartner2.png";

export default function Header(props) {
  return (
    <>
      <style type="text/css">
        {`
    .navbar {
      background-color: #fff;
      padding: 25px 100px;
    }

 
    .logo{
        width: 200px;
        height: auto;
    }

    .links{
     font-size: 11pt;
    }

    .login{
     color: #333;
     font-weight: 600   
    }

    .login:hover{
        color: #555;
       }

       .btn-flat {
        background-color: #F77D0E;
        color: white;
      }

      .btn-flat {
        background-color: #F77D0E;
        color: white;
     font-weight: 600   

      }
      .btn-flat:hover{
        background-color: #fff;
        border: 1px solid #F77D0E;
        color: #F77D0E;
      }
    
    `}
      </style>

      <Navbar className="navbar" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
          <NavLink to="/">  <img className="logo" src={findPartner}/> </NavLink>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto ml-4 links ">
              <Nav.Link className="mr-4" href="#home">
                <NavLink to="/projects">BROWSE PROJECT</NavLink>
              </Nav.Link>
              <Nav.Link className="mr-4" href="#features">
                BROWSE POTENTIAL PARTNERS
              </Nav.Link>
              <Nav.Link className="mr-4" s href="#pricing">
                ABOUT US
              </Nav.Link>
            </Nav>
            <Nav.Link className="login">LOG IN </Nav.Link>
            <Button variant="flat">SIGNUP</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );

}
