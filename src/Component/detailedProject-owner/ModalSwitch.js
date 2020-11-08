import React, { Component,useState,useEffect} from 'react'
import { Card,Modal,Button } from 'react-bootstrap'
import { connect, useDispatch } from 'react-redux'
import {setModal,setDetails,editproject,getproject} from "../../store/projects/project.store"




export function ModalSwitch(props) {
    const dispatch = useDispatch()
    console.log(props.props.match.params.id)

    function editIsOpen(){
      const edit = async () => {
        await dispatch(editproject(props.props.match.params.id));
        
    };
    edit();
    }
    const [show, setShow] = useState(false);
    const closeFun = ()=> dispatch(setModal(false))
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    // console.log(props.projectData)
    
    return (
      <>
        
  
        <Modal  show={props.Modal?handleShow:handleClose} onHide={closeFun}>
          <Modal.Header closeButton>
            <Modal.Title>Are you sure you want to change This!!</Modal.Title>
          </Modal.Header>
          <Modal.Body>If you change it to closed you won't get anymore proplsals!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={closeFun}>
              Close
            </Button>
            <Button variant="primary" onClick={editIsOpen}>
              Change
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



export default connect(mapStateToProps)(ModalSwitch)
