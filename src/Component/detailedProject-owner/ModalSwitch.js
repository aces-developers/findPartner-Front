import React, { Component,useState} from 'react'
import { Card,Modal,Button } from 'react-bootstrap'
import { connect, useDispatch } from 'react-redux'
import {setModal} from "../../store/projects/project.store"


export function ModalSwitch(props) {
    const dispatch = useDispatch()
    const [show, setShow] = useState(false);
    const closeFun = ()=> dispatch(setModal(false))
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button  show={false} variant="primary" onClick={handleShow}>
          Launch demo modal
        </Button>
  
        <Modal  show={props.Modal?handleShow:handleClose} onHide={closeFun}>
          <Modal.Header closeButton>
            <Modal.Title>Are you sure you want to change This!!</Modal.Title>
          </Modal.Header>
          <Modal.Body>If you change it to closed you won't get anymore proplsals!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={closeFun}>
              Close
            </Button>
            <Button variant="primary" onClick={closeFun}>
              Change
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  


const mapStateToProps = (state) => ({
    Modal:state.projects.Modal
})



export default connect(mapStateToProps)(ModalSwitch)
