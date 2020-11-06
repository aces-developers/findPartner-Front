import React, { useEffect } from "react";
import { loadProjects } from "../../store/projects/project.store";
import { connect, useDispatch } from "react-redux";
import Card from '../projects/p-Card';
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
      {props.projects.map(item => {
        return <div style={{ float: "left",margin:"30px",padding:"10px" }}>
          <Card  Item={item} />
        </div>

      })}

    </>

  );
};

const mapStateToProps = (state) => ({
  projects: state.projects.projects,
 
});


export default connect(mapStateToProps)(Projects);


