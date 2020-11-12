import React, { useState, useEffect } from "react";
import { Button, Table, ButtonGroup } from "react-bootstrap";
import { connect, useDispatch } from "react-redux";
import { Formik, Field, ErrorMessage } from "formik";
import { Redirect } from "react-router";
import { Link } from "react-router-dom";

import {
  getAllApplied,
  getAllUserProjects,
} from "../../store/users/users.store";
import { getproject } from "../../store/projects/project.store";
import "./myProjects.scss";
function MyProjects(props) {
  // const userPublishedProjects = props.userPublishedProjects;
  // const AllAppliedID = props.AllAppliedID;
  const tableHeadings = [
    "Project Name",
    "Budget",
    "Category",
    "Location",
    "Status",
  ];
  const [flag, setflag] = useState(props.userPublishedProjects);
  const dispatch = useDispatch();
  useEffect(() => {
    props.userPublishedProjects
      ? setflag(props.userPublishedProjects)
      : setflag(localStorage.getItem(JSON.parse("MINE")));
  }, [props.userPublishedProjects]);

  useEffect(() => {
    // const loadApplayed = async () => {
    //   await dispatch(getAllApplied());
    // };
    // loadApplayed();

    const loadPublished = async () => {
      await dispatch(getAllUserProjects());
    };
    loadPublished();
  }, []);

  const changeFlag = (data) => {
    setflag(data);
  };

  return (
    <>
      <div className="signup-section">
        <ButtonGroup size="lg" className="mb-2 switchGroupBtns">
          <Button
            onClick={() => changeFlag(props.userPublishedProjects)}
            className="btn btn-primary btn"
          >
            Owner
          </Button>
          <Button
            onClick={() => changeFlag(props.AllAppliedID)}
            className="btn btn-secondary btn"
          >
            Partner
          </Button>
        </ButtonGroup>

        <Table
          responsive
          hover
          className="dashboardTable shadow p-3 mb-5 bg-white rounded w-75 p-3 mx-auto "
        >
          <thead>
            <tr>
              <th>#</th>
              {tableHeadings.map((_, index) => (
                <th key={index * 100}>{_}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {flag.map((project, index) => (
              <tr>
                <td>{index}</td>

                <td key={index}>
                  <Link
                    style={{ textDecoration: "none" }}
                    to={{
                      pathname: `/detalis/${project._id}`,
                      state: { _id: project._id },
                    }}
                  >
                    {project.title}
                  </Link>
                </td>
                <td key={index}>{project.budget}</td>
                <td key={index}>{project.category.toUpperCase()}</td>
                <td key={index}>{`${project.lacation}`}</td>
                <td key={index} className={`${project.isopen}`}>
                  {project.isopen ? "open" : "closed"}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  AllAppliedID: state.users.AllAppliedID,
  userPublishedProjects: state.users.userPublishedProjects,
  account: state.users.account,
});
export default connect(mapStateToProps)(MyProjects);
