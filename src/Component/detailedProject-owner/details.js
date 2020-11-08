import React, { Component } from 'react'
import { Button,Card,ButtonGroup } from 'react-bootstrap'
import { connect, useDispatch } from 'react-redux'


export const Details = () => {
    return (
        <><Card style={{ width: '58rem' }}>
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
          </Card.Text>
          
            </Card.Body>
        </Card>
            <ButtonGroup aria-label="Basic example">
                <Button variant="secondary">Edit</Button>
                <Button variant="secondary">Delete</Button>
            </ButtonGroup>
        </>
    )
}

const mapStateToProps = (state) => ({
    details: state.projects.projectDetails,
    
})



export default connect(mapStateToProps)(Details)
