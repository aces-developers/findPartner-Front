import React, { useEffect } from "react";
import { If, Then, Else } from "../IF/index";
import { connect, useDispatch } from "react-redux";
import DetailedProject from "../detailedProject-owner/detailedProject";
import Details from "../projects/projectDetails";
import { getproject } from "../../store/projects/project.store";
import { getProposal } from "../../store/projects/project.store";

function Homedetails(props) {
  const dispatch = useDispatch();
  const _id = props.match.params._id;

  useEffect(() => {
    console.log("I am here ");
    const load = async () => {
      await dispatch(getproject(_id));
    };
    load();

    const anything = async () => {
      await dispatch(getProposal(_id));
    };

    anything();
  }, []);

  return (
    <>
      {props.projectData && (
        <If condition={props.projectData._ownerId === props.account.userid}>
          <Then>
            <DetailedProject props={props} />
          </Then>
          <Else>
            <Details props={props} />
          </Else>
        </If>
      )}
    </>
  );
}

const mapStateToProps = (state) => ({
  details: state.projects.projectDetails,
  Modal: state.projects.Modal,
  projectData: state.projects.projectData,
  deleteModal: state.projects.deleteModal,
  account: state.users.account,
  check: state.projects.check,
  proposalData: state.projects.proposalData,
});

export default connect(mapStateToProps)(Homedetails);
