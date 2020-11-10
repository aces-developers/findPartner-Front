import React, { Component,useState,useEffect} from 'react'
import { Card,Modal,Button } from 'react-bootstrap'
import { connect, useDispatch } from 'react-redux'
import {setModal,setDetails,deleteProject,getproject,setDeleteModal} from "../../store/projects/project.store"



export function DeleteModal(props) {
    const dispatch = useDispatch()
    let id = props.props.match.params.id

    function deleteMyProject(id){
      const edit = async () => {
        await dispatch(deleteProject(id));
        
    };
    edit();
    }
    const [vision, setvision] = useState(false);
    const closeFunDel = ()=> dispatch(setDeleteModal(false))
    const handleCloseDel = () => setvision(false);
    const handlevisionDel = () => setvision(true);
    // console.log(props.projectData)
    
    return (
      <>
        
  
        <Modal  show={props.props.DeleteModal?handlevisionDel:handleCloseDel} onHide={closeFunDel}>
          <Modal.Header closeButton>
            <Modal.Title>Are you sure you want to Delete This!!</Modal.Title>
          </Modal.Header>
          <Modal.Body>You will never be Able to get it Back !!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={closeFunDel}>
              Close
            </Button>
            <Button variant="primary" onClick={deleteMyProject}>
              Delete
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  


const mapStateToProps = (state) => ({
  details: state.projects.projectDetails,
  Modal:state.projects.Modal,
  projectData: state.projects.projectData
})



export default connect(mapStateToProps)(DeleteModal)