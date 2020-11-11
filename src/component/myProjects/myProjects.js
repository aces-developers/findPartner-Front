import React, { useState, useEffect } from "react";
import { Button, Table, ButtonGroup } from "react-bootstrap";
import { connect, useDispatch } from "react-redux";
import { Formik, Field, ErrorMessage } from "formik";
import { Redirect } from "react-router";
import { getAllApplied, getAllUserProjects } from "../../store/users/users.store";
import { getproject } from "../../store/projects/project.store";
import './myProjects.scss'
function MyProjects(props) {

    const userPublishedProjects = props.userPublishedProjects;
    const AllAppliedID = props.AllAppliedID;
    const tableHeadings = ['Project Name', 'Budget', 'Category', 'Location', 'Status'];
    const [defaultData, setDefaultData] = useState(userPublishedProjects);
    const [status, setStatus] = useState('status');
    const dispatch = useDispatch();

    useEffect(() => {
        const loadApplayed = async () => {
            await dispatch(getAllApplied());
        };
        loadApplayed()


        const loadPublished = async () => {
            await dispatch(getAllUserProjects())
            .then(()=>{

                setDefaultData(userPublishedProjects)
            });
        };
        loadPublished()
    }, []);

    
    const displayPublished = (data) => { setDefaultData(data) }
    const statusHandler = (data) => { 
        if(data === true){
            setStatus('Open');
        }else if(data === false){
            setStatus('Closed');
        }else{
            //undefined
            setStatus('');
        }
        }


    return (
        <>
            {    console.log('inside return  props.setAllAppliedID', AllAppliedID)}
            {    console.log('inside return  props.userPublishedProjects', userPublishedProjects)}
            {    console.log('inside return  props', props)}

            <ButtonGroup size="lg" className="mb-2">
                <Button onClick={()=> displayPublished(userPublishedProjects) } >Owner</Button>
                <Button onClick={()=> displayPublished(AllAppliedID)} >Partner</Button>
            </ButtonGroup>

            
            <Table responsive className="userprojects">
                <thead>
                    <tr>
                        <th>#</th>
                        {tableHeadings.map((_, index) => (
                            <th key={index}>{_}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    
                    {defaultData.map( (project, index) => (
                        <tr>
                            <td>{index + 1}</td>

                            <td key={index}>{project.title}</td>
                            <td key={index}>{project.budget}</td>
                            <td key={index}>{project.category.toUpperCase()}</td>
                            <td key={index}>{`${project.location}`}</td>
                            <td key={index} className={`${project.isopen}`}>{()=>statusHandler(status)}</td> 

                        </tr>
                    ))}
                  


                </tbody>

            </Table>
        </>
    );

}

const mapStateToProps = (state) => ({
    AllAppliedID: state.users.AllAppliedID,
    userPublishedProjects: state.users.userPublishedProjects
});
export default connect(mapStateToProps)(MyProjects);
