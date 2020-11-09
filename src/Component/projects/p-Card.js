import React from 'react'

import { Card } from 'react-bootstrap'
import { Link } from "react-router-dom";
// import { getproject } from "../../store/projects/project.store";
import { connect } from "react-redux";
// import { Redirect } from "react-router";
export function Project(props) {
    //const dispatch=useDispatch();

    return (
        <>
            <Card style={{ width: '25rem' }}>

                <Card.Body>
                    <Card.Title>{props.Item.title}</Card.Title>
                    <Card.Text>{props.Item._ownerName} </Card.Text>
                    <Card.Text>{props.Item.category} </Card.Text>
                    <Card.Text>
                        {props.Item.description}
                    </Card.Text>
                    <Card.Link > <Link to={{ pathname: `/detalis/${props.Item._id}`, state: { _id: props.Item._id } }}> More Details </Link></Card.Link>
                </Card.Body>
            </Card>
        </>
    );
}
const mapStateToProps = (state) => ({
    details: state.projects.projectDetails,
})



export default connect(mapStateToProps)(Project)