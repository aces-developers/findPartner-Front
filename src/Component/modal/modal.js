import React, {useState ,useEffect} from 'react';
import {Modal,Button} from 'react-bootstrap'
import { connect,useDispatch} from 'react-redux'
import { setModal } from '../../store/projects/project.store';
import { Link } from "react-router-dom";

function ProjectModal(props) {
    const [show, setShow] = useState(props.Modal);
    const dispatch = useDispatch()
    const closeFun = ()=> dispatch(setModal(false))
    const handleClose = () =>  setShow(false);
    const handleShow = () => setShow(true);

    return (
      <>
        <Button  ref={props.Modal?handleShow:handleClose}  variant="primary" onClick={handleShow}>
        </Button>
  
        <Modal show={show} onHide={closeFun}>
          <Modal.Header closeButton>
            <Modal.Title>SUCESS!!</Modal.Title>
          </Modal.Header>
          <Modal.Body>Project posted</Modal.Body>
          <Modal.Footer>
            <Button   variant="secondary" onClick={closeFun}>
            <Link  style={{color:"White"}} to="/">Back to Homepage</Link>
            </Button>
            <Button variant="primary" onClick={closeFun}>
            <Link style={{color:"White"}} to="/project">View project</Link>
            </Button>
            
            

          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
  const mapStateToProps = (state) => ({
    newproject: state.projects.newproject,
    Modal:state.projects.Modal
});
export default connect(mapStateToProps)(ProjectModal);