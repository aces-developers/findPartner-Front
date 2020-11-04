import React from 'react'
import { Navbar, Nav, Form, Button } from 'react-bootstrap'


export default function Header(props) {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#home">BROWSE PROJECTS</Nav.Link>
                    <Nav.Link href="#features">BROWSE POTENTIAL PARTNERS</Nav.Link>
                    <Nav.Link href="#pricing">ABOUT US</Nav.Link>
                </Nav>

                <Button variant="outline-info">LOG IN </Button>{' '}
                <Button variant="outline-info">SIGNUP</Button>

            </Navbar>

        </>
    )
}
