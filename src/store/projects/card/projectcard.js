import React, { useEffect } from "react";
import { loadUsers } from "../../users/users.store";
import { connect, useDispatch } from "react-redux";
import { Card, Button, Row, Col, Image } from 'react-bootstrap'


const Cards = (props) => {

    const dispatch = useDispatch();

    useEffect(() => {
        const load = async () => {
            // setIsLoading(true);
            await dispatch(loadUsers());
            // setIsLoading(false);
        };
        load();
    }, [dispatch]);

    const OwnerName = (ownerID) => {
        let result = props.users.filter(user => user._id === ownerID)
        let data = result[0]
        console.log('result ---> ', data)
        return data.fullname;
    }

    return (
        <>
            <Card style={{ width: '25rem' }}>
                <Card.Img variant="top" src="data:image/jpeg;base64,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" />
                <Card.Body>
                    <Card.Title>{props.Item.title}</Card.Title>
                    <Card.Text>{OwnerName(props.Item._ownerId)} </Card.Text>
                    <Card.Text>
                        {props.Item.description}
                    </Card.Text>
                    <Button variant="primary">Apply</Button>
                </Card.Body>
            </Card>
        </>
    );
}


const mapStateToProps = (state) => ({
    users: state.users.users,
});


export default connect(mapStateToProps)(Cards);


