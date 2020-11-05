import React from 'react'
import { Navbar, Nav, Button } from 'react-bootstrap'
import {NavLink} from 'react-router-dom'



export default function Header(props) {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand  >Navbar</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link > <NavLink to="/">Home</NavLink></Nav.Link>
                    <Nav.Link ><NavLink to="/projects">projects</NavLink></Nav.Link>
                    <Nav.Link >ABOUT US</Nav.Link>
                </Nav>

                <Button variant="outline-info">LOG IN </Button>{' '}
                <Button variant="outline-info">SIGNUP</Button>

            </Navbar>

        </>
    )
}
