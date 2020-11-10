import React, { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import { Nav, Form, Container } from "react-bootstrap";
import { Details } from "./details";
import { Propsals } from "./propsals";
import { ModalSwitch } from "./ModalSwitch";
import { DeleteModal } from "./DeleteModel";
import {
  setModal,
  getproject,
  setcheck,
} from "../../store/projects/project.store";

export const DetailedProject = (props) => {
  function Page() {
    if (view) {
      return <Details props={props.props} />;
    } else {
      return <Propsals props={props.props} />;
    }
  }
  function Modals() {
    if (props.Modal) {
      return <ModalSwitch props={props} />;
    } else if (props.props.deleteModal) {
      return <DeleteModal props={props} />;
    } else return <></>;
  }

  const [view, setview] = useState(true);
  const dispatch = useDispatch();
  const toggleEnabled = () => {
    dispatch(setModal(true));
  };
  const openDetails = () => {
    setview(true);
  };
  const openProposals = () => {
    setview(false);
  };
  const _id = props.props.match.params._id;
  console.log(_id);
  // useEffect(() => {
  //   const load = async () => {
  //     await dispatch(getproject(_id));
  //     console.log('props--->props', props.props)

  // };
  // load();

  // }, [dispatch])

  return (
    <>
      <div className="signup-section" style={{ minHeight: "70vh" }}>
        <Container>
          {props.props.projectData && (
            <Form>
              <Form.Check
                type="switch"
                id="custom-switch"
                label="Close project"
                //  checked={props.props.check}
                onChange={toggleEnabled}
              />
            </Form>
          )}
          <Nav variant="pills" defaultActiveKey="/home">
            <Nav.Item>
              <Nav.Link onClick={openDetails}>Details</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link onClick={openProposals}>Propasls</Nav.Link>
            </Nav.Item>
          </Nav>
          <Page />
          <Modals />
        </Container>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  details: state.projects.projectDetails,
  Modal: state.projects.Modal,
  projectData: state.projects.projectData,
  deleteModal: state.projects.deleteModal,
  account: state.users.account,
  check: state.projects.check,
});

export default connect(mapStateToProps)(DetailedProject);
