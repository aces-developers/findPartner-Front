import React from "react";
import { Card, Button, Row, Col, Image } from "react-bootstrap";
import "./p-card.scss";
import user from "./user.svg";
import tag from "./tag.svg";
import { Link } from "react-router-dom";

export default function Project(props) {
  console.log("card props ------> ", props);
  return (
    <>
      <Card className="card-style">
        <Card.Body className="body-style">
          <div className="user">
            <img className="user-style" src={user} />
            <Card.Title>{props.Item._ownerName}</Card.Title>
          </div>
          <Card.Text className="title-style">{props.Item.title} </Card.Text>
          <div className="description-style">
            <Card.Text>{props.Item.description}</Card.Text>
          </div>
          <div className="card-end">
            <Card.Text>
              <img className="tag-style" src={tag} /> {props.Item.category}
            </Card.Text>
            <Link
              to={{
                pathname: `/detalis/${props.Item._id}`,
                state: { _id: props.Item._id },
              }}
            >
              <Button className="card-link-style" variant="link">
                More Details
              </Button>
            </Link>
          </div>
        </Card.Body>
      </Card>
    </>
  );
}
