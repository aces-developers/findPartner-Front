import React from "react";
import { useState, useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { handleEdit, getproject } from "../../store/projects/project.store";
import { Form, Card, Col, Button, Container } from "react-bootstrap";
import ProjectModal from "../modal/modal";
import history from "../../history/history";

function ProjectForm(props) {
  const _id = props.match.params.id;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getproject(_id));
  }, []);

  useEffect(() => {
    if (props.projectData) {
      setTitle(props.projectData.title);
      setDescription(props.projectData.description);
      setlocation(props.projectData.location);
      setskills(props.projectData.skill);
      setbudget(props.projectData.budget);
      setcategory(props.projectData.category);
    }
  }, [props.projectData]);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setlocation] = useState("");
  const [skills, setskills] = useState("");
  const [budget, setbudget] = useState("");
  const [category, setcategory] = useState("");

  const onChangeInput = (e) => {
    console.log(e.target.name, e.target.value);
    switch (e.target.name) {
      case "title":
        setTitle(e.target.value);
        break;
      case "description":
        setDescription(e.target.value);
        break;

      case "location":
        setlocation(e.target.value);
        break;

      case "skills":
        setskills(e.target.value);
        break;

      case "budget":
        setbudget(e.target.value);
        break;

      case "category":
        setcategory(e.target.value);
        break;

      default:
        break;
    }
  };

   function Capitalize(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
    }
  const [saved, setsaved] = useState(false);

  const handleNewEdit = (e) => {
    e.preventDefault();

    dispatch(
      handleEdit(
        {
          title: title,
          description: description,
          category: category,
          budget: budget + "$",
          isopen: true,
          location: location,
          skill: skills,
        },
        props.account.token,
        _id
      )
    );
    setsaved(true);
  };

  return (
    <>
      {console.log(props.Modal)}
      {props.projectData && (
        <div className="signup-section" style={{ Height: "70vh" }}>
          <Container>
            <h4 className="mb-4" style={{ color: "#0083b0" }}>
              Edit project
            </h4>
            <Form onSubmit={handleNewEdit}>
              <Card className="p-4 border-0 shadow-sm">
                <Form.Group controlId="exampleForm.ControlInput1">
                  <Form.Label>Project name</Form.Label>
                  <Form.Control
                    name="title"
                    required="true"
                    type="string"
                    onChange={onChangeInput}
                    defaultValue={title}
                  />
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Label> Description</Form.Label>
                  <Form.Control
                    name="description"
                    defaultValue={description}
                    required="true"
                    as="textarea"
                    rows={4}
                    onChange={onChangeInput}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Row>
                    <Form.Group as={Col} controlId="formCategory">
                      <Form.Label>Category</Form.Label>
                      <Form.Control
                        custom
                        as="select"
                        onChange={onChangeInput}
                        name="category"
                        defaultValue={
                          category.charAt(0).toUpperCase() + category.slice(1)
                        }
                      >
                        <option>IT</option>
                        <option>Engineering</option>
                        <option>Arts</option>
                      </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGrid">
                      <Form.Label>Skills needed</Form.Label>
                      <Form.Control
                        required="true"
                        onChange={onChangeInput}
                        type="string"
                        name="skills"
                        defaultValue={skills}
                      />
                    </Form.Group>
                  </Form.Row>
                  <Form.Row>
                    <Form.Group as={Col} controlId="formLocation">
                      <Form.Label>Location</Form.Label>
                      <Form.Control
                        custom
                        as="select"
                        onChange={onChangeInput}
                        name="location"
                        defaultValue={location}
                      >
                        <option>Jordan</option>
                        <option>Gaza</option>
                        <option>Neverland</option>
                      </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGrid">
                      <Form.Label>Budget</Form.Label>
                      <Form.Control
                        name="budget"
                        required="true"
                        type="string"
                        onChange={onChangeInput}
                        defaultValue={budget}
                      />
                    </Form.Group>
                  </Form.Row>
                </Form.Group>
              </Card>
              <Button
                className="mt-4 ml-auto d-block con-linkedin "
                type="submit"
                style={{
                  width: "fit-content",
                  fontWeight: 600,
                  paddingLeft: 30,
                  paddingRight: 30,
                }}
              >
                Save
              </Button>
            </Form>
          </Container>
        </div>
      )}
      <div style={{ visibility: `hidden` }}>
        <ProjectModal />
      </div>
      {/* <If>
          <Then>
            <Redirect to="/detalis/${_id}" />
        </Then>
     </If > */}
    </>
  );
}

const mapStateToProps = (state) => ({
  newproject: state.projects.newproject,
  Modal: state.projects.Modal,
  token: state.projects.sessionToken,
  account: state.users.account,
  projectData: state.projects.projectData,
});
export default connect(mapStateToProps)(ProjectForm);
