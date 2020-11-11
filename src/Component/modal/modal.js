import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import { connect, useDispatch } from "react-redux";
import { setModal } from "../../store/projects/project.store";
import { Link } from "react-router-dom";

function ProjectModal(props) {
  const [show, setShow] = useState(props.Modal);
  const dispatch = useDispatch();
  const closeFun = () => dispatch(setModal(false));
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  let id = props.newproject._id;

  return (
    <>
      {console.log(props.newproject)}
      <Button
        ref={props.Modal ? handleShow : handleClose}
        variant="primary"
        onClick={handleShow}
      ></Button>

      <Modal show={show} onHide={closeFun}>
        <Modal.Header closeButton>
          <Modal.Title>SUCESS!!</Modal.Title>
        </Modal.Header>
        <Modal.Body>Project posted</Modal.Body>
        <Modal.Footer>
          <Link style={{ color: "White" }} to="/">
            <Button variant="secondary" onClick={closeFun}>
              Back to Homepage
            </Button>
          </Link>
          <Link style={{ color: "white" }} to={`/detalis/${id}`}>
            <Button variant="primary" onClick={closeFun}>
              View project
            </Button>
          </Link>
        </Modal.Footer>
      </Modal>
    </>
  );
}

const mapStateToProps = (state) => ({
  newproject: state.projects.newproject,
  Modal: state.projects.Modal,
});
export default connect(mapStateToProps)(ProjectModal);
