import React from "react";
import { Container, Navbar, Nav, Form, Button } from "react-bootstrap";
import { NavLink,Link } from "react-router-dom";
import findPartner from "./findPartner2.png";
import { connect, useDispatch } from "react-redux";
import {  setMessage } from "../../store/users/users.store";

function Header(props) {
  const dispatch= useDispatch();

  const handleMessageState=()=>{
    dispatch(setMessage(null))
  }

 
  const styles = {
    routeLink: {
      textDecoration: "none",
      color: "#333",
      "&:hover": {
        color: "#888",
      },
    },
  };

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
            <Link to="/">
              <img className="logo" src={findPartner} />{" "}
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto ml-4 links ">
              <Nav.Link className="mr-4" href="#home">
                <Link style={styles.routeLink} to="/projects">
                  BROWSE PROJECT
                </Link>
              </Nav.Link>
              <Nav.Link className="mr-4" href="#features">
                BROWSE POTENTIAL PARTNERS
              </Nav.Link>
              <Nav.Link className="mr-4" href="#pricing">
                  <Link to="/AboutUs">  ABOUT US </Link>
              </Nav.Link>
            </Nav>
            <Nav.Link className="login">    
                    <Link to="/SignIn"> Sign in  </Link>
            </Nav.Link>
            <Button variant="flat">    
                            <Link to="/SignUp" onClick={handleMessageState}>  SignUp </Link>
                              </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
const mapStateToProps = (state) => ({
  message: state.users.message,

});


export default connect(mapStateToProps)(Header);