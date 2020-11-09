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
        <>
        {props.props.projectData &&
            
                <Card style={{ width: '25rem' }}>
                    <Card.Body>
                        <Card.Title>{props.props.projectData[0].title}</Card.Title>
                        <Card.Text>{props.props.projectData[0]._ownerName} </Card.Text>
                        <Card.Text>{props.props.projectData[0].category} </Card.Text>

                        <Card.Text>
                            {props.props.projectData[0].description}
                        </Card.Text>

                    </Card.Body>
                </Card>
                }
            <ButtonGroup aria-label="Basic example">
                <Button variant="secondary"><Link style={{"color":"white"}} to={`/edit/${props.props.match.params._id}`}> Edit </Link></Button>
                <Button onClick={modalInitiate} variant="secondary">Delete </Button>
            </ButtonGroup>
            <DelModals/>
        </>
       
    )
}


const mapStateToProps = (state) => ({
    details: state.projects.projectDetails,
    Modal:state.projects.Modal,
    projectData: state.projects.projectData,
    deleteModal:state.projects.deleteModal,
    account:state.users.account,
    check:state.projects.check
    

})




export default connect(mapStateToProps)(Details)
