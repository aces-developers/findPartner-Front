import React from 'react'
import { Card, Button, Row, Col, Image } from 'react-bootstrap'
export default function Project(props) {
    return (
        <>
    <Card style={{ width: '25rem' }}>
        <Card.Body>
    <Card.Title>{props.Item.title}</Card.Title>
    <Card.Text>{props.Item._ownerName} </Card.Text>

    <Card.Text>{props.Item.category} </Card.Text>

            <Card.Text>
            {props.Item.description}
        </Card.Text>
            <Button variant="primary">Go somewhere</Button>
        </Card.Body>
    </Card>
    </>
    );
}