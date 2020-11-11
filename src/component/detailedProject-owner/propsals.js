import React, { Component, useEffect } from 'react'
import {Card, Container } from 'react-bootstrap'
import { connect, useDispatch } from 'react-redux'
//import Card from "../projects/card/p-Card";

export const Propsals = (props) => {
    console.log('2234567890',props.props)

    return (

        <>
            {props.props.proposalData &&
                <div>
                    {props.props.proposalData.map((item, index) => {
                        return (
                            <div key={index}>
                                <Card className="card-style">
                                    <Card.Body className="body-style">
                                        <Card.Text>{item.proposal}</Card.Text>
                                        <Card.Text>{item.username}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                        )
                    })}

                </div>
            }


        </>
    )
}


const mapStateToProps = (state) => ({
    proposalData: state.projects.proposalData,
    account: state.users.account,
})



export default connect(mapStateToProps)(Propsals)
