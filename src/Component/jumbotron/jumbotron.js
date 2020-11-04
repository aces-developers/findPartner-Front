import React from 'react'
import { Jumbotron, Button } from 'react-bootstrap'


export default function Jumber(props) {
    return (
        <>
            <Jumbotron style={{height:"400px",backgroundImage: "url(https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)",backgroundSize: "cover"}}>
            <h1>Hello, world!</h1>
                <p>
                    This is a simple hero unit, a simple jumbotron-style component for calling
                    extra attention to featured content or information.
                </p>

            <p>
                <Button  variant="primary">Find a Partner</Button>{' '}
                <Button variant="primary">Join a Project</Button>
            </p>
        </Jumbotron>
        </>
    )
}