import React, { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import { handlepost } from "../../store/projects/project.store";
import {
  Form,
  Card,
  Col,
  Button,
  DropdownButton,
  Dropdown,
  Container,
} from "react-bootstrap";
import ProjectModal from "../modal/modal";
import { getListOfcountries } from "../../store/users/users.store";

function ProjectForm(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getListOfcountries());
  }, []);
  const [title, setTitle] = useState("");
  const [desc, setdesc] = useState("");
  const [location, setlocation] = useState("Jordan");
  const [skills, setskills] = useState("");
  const [budget, setbudget] = useState("");
  const [category, setcategory] = useState("IT");

  const onChangeDescField = (e) => {
    console.log(e);
    setdesc(e.target.value);
    console.log("desc", desc);
  };
  const onChangeSkillField = (e) => {
    console.log(e);
    setskills(e.target.value);
    console.log("skill", skills);
  };
  const onFieldCategory = (e) => {
    console.log("onFieldCategory", e.target.value);
    setcategory(e.target.value);
    console.log("category", category);
  };
  const onFieldLocation = (e) => {
    console.log("onFieldLocation", e.target.value);
    setlocation(e.target.value);
    console.log("location", location);
  };

  const onChangeTitleField = (e) => {
    console.log(e);
    setTitle(e.target.value);
    console.log("title", title);
  };

  const onChangeBudgetField = (e) => {
    console.log(e);
    setbudget(e.target.value);
    console.log("budget", budget);
  };
  const handleNewPost = (e) => {
    e.preventDefault();

    dispatch(
      handlepost({
        title: title,
        description: desc,
        category: category.toLocaleLowerCase(),
        budget: budget + "$",
        isopen: true,
        skill: skills,
        lacation: location,
      })
    );
  };

  return (
    <>
      <div className="signup-section" style={{ minHeight: "70vh" }}>
        <Container>
          <h4 className="mb-4" style={{ color: "#0083b0" }}>
            New project
          </h4>
          <Form onSubmit={handleNewPost}>
            <Card className="p-4 border-0 shadow-sm">
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Project name</Form.Label>
                <Form.Control
                  required="true"
                  type="string"
                  placeholder="Project name"
                  onChange={onChangeTitleField}
                />
              </Form.Group>

              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label> Description</Form.Label>
                <Form.Control
                  required="true"
                  as="textarea"
                  rows={4}
                  onChange={onChangeDescField}
                />
              </Form.Group>
              <Form.Group>
                <Form.Row>
                  <Form.Group as={Col} controlId="formGrid">
                    <Form.Label>Category</Form.Label>
                    <Form.Control
                      as="select"
                      required="true"
                      onChange={onFieldCategory}
                      name="category"
                      value={category}
                    >
                      <option>Engineering</option>
                      <option>Arts</option>
                      <option>Business</option>
                      <option>Communications</option>
                      <option>Community</option>
                      <option>Education</option>
                      <option>Science</option>
                      <option>Farming</option>
                      <option>Health</option>
                      <option>IT</option>
                    </Form.Control>
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGrid">
                    <Form.Label>Skills needed</Form.Label>
                    <Form.Control
                      required="true"
                      onChange={onChangeSkillField}
                      type="string"
                      placeholder="Skills"
                    />
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Group as={Col} controlId="formGrid">
                    <Form.Label>Location</Form.Label>
                    <Form.Control
                      as="select"
                      onChange={onFieldLocation}
                      name="location"
                      title={location}
                      variant="secondary"
                      value={location}
                    >
                      {props.countries.map((country) => {
                        return <option>{country}</option>;
                      })}
                    </Form.Control>
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGrid">
                    <Form.Label>Budget</Form.Label>
                    <Form.Control
                      required="true"
                      type="string"
                      placeholder="budget"
                      onChange={onChangeBudgetField}
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
              type="submit"
            >
              Post
            </Button>
          </Form>
        </Container>
      </div>
      <div style={{ visibility: `hidden` }}>
        <ProjectModal />
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  newproject: state.projects.newproject,
  Modal: state.projects.Modal,
  token: state.projects.sessionToken,
  account: state.users.account,
  countries: state.users.countries,
});
export default connect(mapStateToProps)(ProjectForm);
