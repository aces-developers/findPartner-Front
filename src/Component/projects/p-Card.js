import React from 'react'
import {connect,useDispatch} from "react-redux"
import { Card, Button, Row, Col, Image } from 'react-bootstrap'
import {setDetails} from "../../store/projects/project.store"
import { Link, Redirect } from 'react-router-dom'
 function Project(props) {

    const dispatch = useDispatch()
    
    const GoToDetails = (id)=>{
        id = props.Item._id
        console.log(id)
        dispatch(setDetails(props.Item))
    
    }
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
            <Button   onClick={GoToDetails} variant="primary"><Link to={`/project/:${props.Item._id}`} >Details</Link></Button>
        </Card.Body>
    </Card>
    </>
    );
}
const mapStateToProps = (state) => ({
    details: state.projects.projectDetails,
})



export default connect(mapStateToProps)(Project)