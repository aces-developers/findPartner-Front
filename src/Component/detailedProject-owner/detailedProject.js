import React, { useEffect, useState } from 'react'
import { connect, useDispatch } from 'react-redux'
import { Nav, Form } from "react-bootstrap"
import { Details } from "./details"
import { Propsals } from './propsals'
import {ModalSwitch} from './ModalSwitch'
import {setModal} from "../../store/projects/project.store"



export const DetailedProject = (props) => {

    function Page() {
        if (view) {
            return <Details />
        }
        else {
            return <Propsals />
        }
    }
    function Modals() {
        if(props.Modal){
            return <ModalSwitch />
        }else return ( <></>)
    }

    const [view, setview] = useState(true)
    const dispatch = useDispatch()
    const toggleEnabled = ()=>{ dispatch(setModal(true)) }
    const openDetails = () => { setview(true) }
    const openProposals = () => { setview(false) }
    return (
        <>
        {console.log(props.Modal)}
            <h2>{props.match.params.id}</h2>
            <Form>
                <Form.Check
                    type="switch"
                    id="custom-switch"
                    label="open"
                    // checked={this.state.settings.enabled}
                    onChange={toggleEnabled}
                />
            </Form>
            <Nav variant="pills" defaultActiveKey="/home">
                <Nav.Item>
                    <Nav.Link onClick={openDetails}>Details</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={openProposals}>Propasls</Nav.Link>
                </Nav.Item>
                {/* <Nav.Item>
                    <Nav.Link eventKey="disabled" disabled>
                        Disabled
                  </Nav.Link>
                </Nav.Item> */}
            </Nav>


            <Page />
            <Modals/>
        </>
    )
}



const mapStateToProps = (state) => ({
    details: state.projects.projectDetails,
    Modal:state.projects.Modal

})



export default connect(mapStateToProps)(DetailedProject)
