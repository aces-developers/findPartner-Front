import React, { useState } from "react";
import { connect, useDispatch } from "react-redux";
import { Form, Container, Tabs, Tab, Row, Col } from "react-bootstrap";
import { Details } from "./details";
import { Propsals } from "./propsals";
import { ModalSwitch } from "./ModalSwitch";
import { DeleteModal } from "./DeleteModel";
import { setModal } from "../../store/projects/project.store";

export const DetailedProject = (props) => {
  function Modals() {
    if (props.Modal) {
      return <ModalSwitch props={props} />;
    } else if (props.props.deleteModal) {
      return <DeleteModal props={props} />;
    } else return <></>;
  }

  const dispatch = useDispatch();
  const toggleEnabled = () => {
    dispatch(setModal(true));
  };

  const _id = props.props.match.params._id;

  return (
    <>
      <div className="signup-section" style={{ minHeight: "70vh" }}>
        <Container>
          <Row className="justify-content-center">
            <Col>
              {props.props.projectData && (
                <Form className="d-flex justify-content-end">
                  <Form.Check
                    type="switch"
                    id="custom-switch"
                    label="Open"
                    onChange={toggleEnabled}
                    checked={props.projectData.isopen}
                  />
                </Form>
              )}
              <Tabs
                className="border-0"
                defaultActiveKey="Details"
                id="uncontrolled-tab-example"
              >
                <Tab className="border-0" eventKey="Details" title="Details">
                  <Details props={props.props} />
                </Tab>
                <Tab className="border-0" eventKey="Propsals" title="Propsals">
                  <Propsals props={props.props} />
                </Tab>
              </Tabs>
            </Col>
          </Row>
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
