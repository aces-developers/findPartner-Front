import React, { useEffect } from "react";
import { Alert, Card, Form, Button } from "react-bootstrap";
import { connect, useDispatch } from "react-redux";
import { getproject, apply } from "../../store/projects/project.store";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
const Schema = Yup.object().shape({
    proposal: Yup.string()
        .min(15, "Too Short!")
        .required("proposal is required"),
});
function Details(props) {
    const dispatch = useDispatch();
    const { _id } = props.props.match.params
    console.log(_id)
    // useEffect(() => {
    //     const load = async () => {
    //         await dispatch(getproject(_id));
    //         console.log('props--->props', props)
    //     };
    //     load();
    // }, []);

    //console.log('props ---> ', )
    return (
        <>

            {props.projectData &&
                <div>
                    <Card style={{ width: '25rem' }}>
                        <Card.Body>
                            <Card.Title>{props.projectData[0].title}</Card.Title>
                            <Card.Text>{props.projectData[0]._ownerName} </Card.Text>
                            <Card.Text>{props.projectData[0].category} </Card.Text>

                            <Card.Text>
                                {props.projectData[0].description}
                            </Card.Text>

                        </Card.Body>
                    </Card>
                    <Formik
                        validationSchema={Schema}
                        onSubmit={async (values, { setSubmitting }) => {
                            await dispatch(apply(props.location.state._id, values))
                            //console.log('  isValid: state.users.isValid,', props.isValid);
                            setTimeout(() => {

                                props.history.push("/")

                            }, 4000);

                        }}
                        initialValues={{
                            proposal: '',

                        }}
                    >
                        {({
                            handleSubmit,
                            handleChange,
                            handleBlur,
                            setFieldValue,
                            values,
                            touched,
                            isValid,
                            errors,
                        }) => (
                                <Form onSubmit={handleSubmit}>
                                    <Form.Group controlId="exampleForm.ControlTextarea1">
                                        <Form.Label>Propsal</Form.Label>
                                        <Form.Control name="proposal" onChange={handleChange} isInvalid={!!errors.proposal} value={values.proposal} rows={3} />
                                        <Form.Control.Feedback type="invalid" >
                                            {errors.proposal}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <Button type="submit">Apply</Button>
                                </Form>
                            )}
                    </Formik>
                </div>
            }
        </>
    )
}

const mapStateToProps = (state) => ({
    projectData: state.projects.projectData,

});


export default connect(mapStateToProps)(Details);


