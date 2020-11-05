import React, { useEffect } from "react";
import { loadUsers } from "../../users/users.store";
import { connect } from "react-redux";
import { Card, Button, Row, Col, Image } from "react-bootstrap";

const Cards = (props) => {
  return (
    <>
      <Card style={{ width: "25rem" }}>
        <Card.Body>
          <Card.Title>{props.Item.title}</Card.Title>
          <Card.Text>{props.Item._ownerName} </Card.Text>
          <Card.Text>{props.Item.description}</Card.Text>
          <Button variant="primary">Apply</Button>
        </Card.Body>
      </Card>
    </>
  );
};

const mapStateToProps = (state) => ({
  users: state.users.users,
});

export default connect(mapStateToProps)(Cards);
