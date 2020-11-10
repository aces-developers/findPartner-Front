import React, { useEffect } from 'react'
import { If, Then, Else } from '../IF/index'
import { connect, useDispatch } from "react-redux";
import DetailedProject from '../detailedProject-owner/detailedProject'
import Details from '../projects/projectDetails'
import { getproject } from '../../store/projects/project.store'
import { getProposal } from "../../store/projects/project.store";

function Homedetails(props) {
    const dispatch = useDispatch();
    const _id = props.match.params._id
    console.log('the id is',_id)
    console.log('props--->props', props)

    useEffect(() => {
        const load = async () => {
            await dispatch(getproject(_id));
        };
        load();
        console.log("hellllllllo", props.match.params._id);
        console.log('bye',props.account.token)
        const anything = async () => {

            await dispatch(getProposal(props.match.params._id, props.account.token));
        };

        anything();

    }, []);

    // useEffect(() => {
        // console.log("hellllllllo", props.match.params._id);
        // console.log('bye',props.account.token)
    //     const anything = async () => {

    //         await dispatch(getProposal(props.match.params._id, props.account.token));
    //     };

    //     anything();
    // }, [dispatch]);

    return (
        <>
        {
            props.projectData &&
                <If condition={props.projectData[0]._ownerId === props.account.userid}>
                    <Then>
                        <DetailedProject props={props} />
                    </Then>
                    <Else>
                        <Details  props={props} />
                    </Else>
                </If>
        }
        </>
    )
}


const mapStateToProps = (state) => ({
    details: state.projects.projectDetails,
    Modal:state.projects.Modal,
    projectData: state.projects.projectData,
    deleteModal:state.projects.deleteModal,
    account:state.users.account,
    check:state.projects.check,
    proposalData: state.projects.proposalData

})


export default connect(mapStateToProps)(Homedetails);

