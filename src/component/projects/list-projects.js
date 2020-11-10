import React, { useEffect } from "react";
import { loadProjects } from "../../store/projects/project.store";
import { connect, useDispatch } from "react-redux";
import { Container } from "react-bootstrap";
import Card from "./card/p-Card";
import "./projects-list.scss";
const Projects = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const load = async () => {
      // setIsLoading(true);
      await dispatch(loadProjects());
      console.log('dispatch')
      // setIsLoading(false);
    };
    load();
  }, [dispatch]);

  return (
    <div className="section-back">
      <h4 className="sectionTitle">Recent Projects</h4>
      <Container className="mb-4 flex-horizental-container">
        {props.projects.map((item, index) => {
          return index < 6 ? (
            <div key={index}>
              <Card Item={item} />
            </div>
          ) : null;
        })}
      </Container>
    </div>
  );
};

const mapStateToProps = (state) => ({
  projects: state.projects.projects,
});

export default connect(mapStateToProps)(Projects);
