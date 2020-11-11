import React from "react";
import { Container, Navbar, Nav, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import findPartner from "./findPartner2.png";
import { connect, useDispatch } from "react-redux";
import { setMessage } from "../../store/users/users.store";
import { signOut } from "../../store/users/users.store";

import "./header.scss";

function Header(props) {
  const dispatch = useDispatch();
  const handleMessageState = () => {
    dispatch(setMessage(null));
  };

  const signout = () => {
    console.log("signout clicked");
    dispatch(signOut());
  };

  return (
    <>
      <Navbar className="navbar" expand="lg">
        <Container>
          <Navbar.Brand>
            <Link to="/">
              <img className="logo" src={findPartner} alt="logo" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto ml-4 links ">
              <Nav.Item className="mr-4 ">
                <Link className="routeLink" to="/projects">
                  BROWSE PROJECT
                </Link>
              </Nav.Item>
              {/* <Nav.Item className="mr-4 routeLink">
                BROWSE POTENTIAL PARTNERS
              </Nav.Item> */}
              <Nav.Item
                hidden={props.token ? false : true}
                className="mr-4"
                href="#pricing"
              >
                <Link className="routeLink" to="/MyProjects">
                  MY PROJECTS
                </Link>
              </Nav.Item>
              <Nav.Item className="mr-4">
                <Link className="routeLink" to="/AboutUs">
                  ABOUT US
                </Link>
              </Nav.Item>
            </Nav>
            <Nav.Item className="mr-2" hidden={props.token ? true : false}>
              <Link className="singin" to="/SignIn">
                Sign in
              </Link>
            </Nav.Item>

            <Link
              hidden={props.token ? true : false}
              className="signupLink"
              to="/SignUp"
              onClick={handleMessageState}
            >
              <Button variant="link" className="signup">
                Sign up
              </Button>
            </Link>

            <Link
              hidden={props.token ? false : true}
              className="signupLink"
              to="/newprojects"
            >
              <Button variant="link" className="signup">
                POST PROJECT
              </Button>
            </Link>

            <Nav.Item className="mr-2" hidden={props.token ? false : true}>
              <a className="singin ml-2" onClick={signout}>
                Sign out
              </a>
            </Nav.Item>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
const mapStateToProps = (state) => ({
  message: state.users.message,
  token: state.users.account.token,
});

export default connect(mapStateToProps)(Header);
