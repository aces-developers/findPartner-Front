import React, { useEffect } from "react";
import { loadProjects } from "../../store/projects/project.store";
import { connect, useDispatch } from "react-redux";
import Card from "./p-Card";
const Projects = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const load = async () => {
      // setIsLoading(true);
      await dispatch(loadProjects());
      // setIsLoading(false);
    };
    load();
  }, [dispatch]);

  return (
    <>
      {props.projects.map((item, index) => {
        return (
          <div
            key={index}
            style={{ float: "left", margin: "30px", padding: "10px" }}
          >
            <Card Item={item} />
          </div>
        );
      })}
    </>
  );
};

const mapStateToProps = (state) => ({
  projects: state.projects.projects,
});

export default connect(mapStateToProps)(Projects);
