import React, { useEffect, useState } from 'react'
import { connect, useDispatch } from 'react-redux'
import { Nav,Form } from "react-bootstrap"
import { Details } from "./details"
import { Propsals } from './propsals'



export const DetailedProject = (props) => {

    function Page() {
        if (view) {
            return <Details />
        }
        else {
            return <Propsals />
        }
    }

    const [view, setview] = useState(true)
    const openDetails = () => { setview(true) }
    const openProposals = () => { setview(false) }
    return (
        <>
            <h2>{props.match.params.id}</h2>
            <Form>
                <Form.Check
                    type="switch"
                    id="custom-switch"
                    label="Check this switch"
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
        </>
    )
}



const mapStateToProps = (state) => ({
    details: state.projects.projectDetails,

})



export default connect(mapStateToProps)(DetailedProject)
