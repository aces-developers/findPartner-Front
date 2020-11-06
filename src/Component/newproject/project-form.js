import React from 'react'
import { useState } from "react";
import { connect, useDispatch } from 'react-redux'
import { handlepost } from "../../store/projects/project.store";
import { Form, Card, Col, Button, DropdownButton, Dropdown } from 'react-bootstrap'
import ProjectModal from '../modal/modal'

function ProjectForm(props) {

    const dispatch = useDispatch()

    const [title, setTitle] = useState('')
    const [desc, setdesc] = useState('')
    const [location, setlocation] = useState('Choose a loaction')
    const [skills, setskills] = useState('')
    const [budget, setbudget] = useState('')
    const [category, setcategory] = useState('Choose a Categoty')

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
        console.log(e);
        setcategory(e);
        console.log("category", category);
    }
    const onFieldLocation = (e) => {
        console.log(e);
        setlocation(e);
        console.log("location", location);
    }

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
        console.log("event ->>>>", e);
        dispatch(handlepost({
            "title": title,
            "description": desc,
            "category": category,
            "budget": budget + "$",
            "isopen": true
        }));
    };



    return (
        <>
            {console.log(props.Modal)}

            <Card>
                <Form onSubmit={handleNewPost} >
                    <Form.Group>
                        <Form.Text>
                            New Project
                        </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Project name</Form.Label>
                        <Form.Control required='true' type="string" placeholder="Project name" onChange={onChangeTitleField} />
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label  > Description</Form.Label>
                        <Form.Control required='true' as="textarea" rows={4} onChange={onChangeDescField} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGrid">
                                <Form.Label>Category</Form.Label>
                                <DropdownButton required='true' onSelect={onFieldCategory} id="dropdown-basic-button" name="category" title={category}>
                                    <Dropdown.Item eventKey='it' >IT</Dropdown.Item>
                                    <Dropdown.Item eventKey='engineering'>Engineering</Dropdown.Item>
                                    <Dropdown.Item eventKey='arts'>Arts</Dropdown.Item>
                                </DropdownButton>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGrid">
                                <Form.Label  >Skills needed</Form.Label>
                                <Form.Control required='true' onChange={onChangeSkillField} type="string" placeholder="Skills" />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGrid">
                                <Form.Label>Location</Form.Label>
                                <DropdownButton onSelect={onFieldLocation} id="dropdown-basic-button" name="loaction" title={location}>
                                    <Dropdown.Item eventKey='jordan' >jordan</Dropdown.Item>
                                    <Dropdown.Item eventKey='gaza'>gaza</Dropdown.Item>
                                    <Dropdown.Item eventKey='Neverland'>Neverland</Dropdown.Item>
                                </DropdownButton>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGrid">
                                <Form.Label >Budget</Form.Label>
                                <Form.Control required='true' type="string" placeholder="budget" onChange={onChangeBudgetField} />
                            </Form.Group>
                        </Form.Row>
                    </Form.Group>
                    <Form.Row>


                        <Button type="submit"> Post</Button>
                    </Form.Row>

                </Form>
            </Card>
            <div style={{ visibility: `hidden` }} >
                <ProjectModal />
            </div>
        </>
    )
}


const mapStateToProps = (state) => ({
    newproject: state.projects.newproject,
    Modal: state.projects.Modal
});
export default connect(mapStateToProps)(ProjectForm);