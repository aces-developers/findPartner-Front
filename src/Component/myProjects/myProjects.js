import React, { useState, useEffect } from "react";
import { Button, Table } from "react-bootstrap";
import { connect, useDispatch } from "react-redux";
import { Formik, Field, ErrorMessage } from "formik";
import { Redirect } from "react-router";
import {  getAllUserProjects } from "../../store/users/users.store";
import { getAllApplied } from "../../store/projects/project.store";

function MyProjects(props) {
    console.log('1111111props.setAllApplayed',props)

    const  setAllUserProjects = props.setAllUserProjects;
    const  setAllAppliedID = props.setAllAppliedID;
    const  setAppliedProjects = props.setAppliedProjects;


    const tableHeadings = ['Project Name', 'Budget', 'Category', 'Location', 'Status'];
    const dispatch = useDispatch();

    useEffect(() => {
        const loadApplayed = async () => {
            await dispatch(getAllApplied());
        };
        loadApplayed()

       
        const loadPublished = async () => {
            await dispatch(getAllUserProjects());
        };
        loadPublished()
        
    }, []);
    /**
     * fsaasd
     * @param {*} id 
     */
   const  getproject= async(id)=>{
    await dispatch(getAllApplied());
    }
    
    return (
        <>
        {    console.log('setApplayed',setAllAppliedID.map(id=> getproject(id)))}
        {/*{    console.log('setAllUserProjects',setAllUserProjects)}
        {console.log('props.setAllApplayed',props.setAllApplayed)}
            <Table responsive>
                <thead>
                    <tr>
                        <th>#</th>
                        {tableHeadings.map((_, index) => (
                            <th key={index}>{_}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    
                    {props.setAllUserProjects.map( (project, index) => (
                        <tr>
                            <td>{index + 1}</td>

                            <td key={index}>{project.title}</td>
                            <td key={index}>{project.budget}</td>
                            <td key={index}>{project.category.toUpperCase()}</td>
                            <td key={index}>{project.location}</td>
                            <td key={index}>{project.isopen}</td> 

                        </tr>
                    ))}
                  


                </tbody>

            </Table>*/}
        </>
    );

}

const mapStateToProps = (state) => ({
    setAllAppliedID: state.users.setAllAppliedID,
    setAppliedProjects: state.users.setAppliedProjects,
    setAllUserProjects: state.users.setAllUserProjects
});
export default connect(mapStateToProps)(MyProjects);
