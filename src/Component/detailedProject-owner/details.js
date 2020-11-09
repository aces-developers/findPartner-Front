import React, { Component } from 'react'
import { Button,Card,ButtonGroup } from 'react-bootstrap'
import { connect, useDispatch } from 'react-redux'
import {DeleteModal} from './DeleteModel'
import {setDeleteModal} from "../../store/projects/project.store"
import {Link} from "react-router-dom"


export const Details = (props) => {
    console.log('wth where am i ',props)
    const dispatch = useDispatch()
    function DelModals() {
        if(props.props.deleteModal){
            return <DeleteModal props={props.props} />
        }else return ( <></>)
    }
    const modalInitiate = ()=>{dispatch(setDeleteModal(!props.props.deleteModal))}
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
                <Button variant="secondary"><Link style={{"color":"white"}} to={`/edit/${props.props.match.params.id}`}> Edit </Link></Button>
                <Button onClick={modalInitiate} variant="secondary">Delete </Button>
            </ButtonGroup>
            <DelModals/>
        </>
       
    )
}

const mapStateToProps = (state) => ({
    details: state.projects.projectDetails,
    deleteModal:state.projects.deleteModal
    
})



export default connect(mapStateToProps)(Details)
