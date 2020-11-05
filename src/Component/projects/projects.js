import React, { useEffect, useState } from "react";
import { loadProjects, handleSearch } from "../../store/projects/project.store";
import { connect, useDispatch } from "react-redux";
import { Card, Button, Row, Col, Image } from "react-bootstrap";
import { ButtonGroup, DropdownButton, Dropdown, Form } from "react-bootstrap";
import PCard from "./p-Card";
import Figure from "react-bootstrap/Figure";

function Project(props) {
  const [q, setq] = useState("");
  const [search, setsearch] = useState("title");
  const dispatch = useDispatch();
  useEffect(() => {
    const load = async () => {
      await dispatch(handleSearch(q, search));
    };

    load();
  }, [dispatch]);

  const handlesubmit = (e) => {
    e.preventDefault();
    console.log("event ->>>>", e);
    dispatch(handleSearch(q, search));
  };

  const onChangeHandler = (e) => {
    console.log("whynot", e);
    setq(e.target.value);
    console.log("maybe", q);
  };

  const onChanges = (e) => {
    console.log(e);
    setsearch(e.target.value);
    console.log("search", search);
  };

  return (
    <>
      {console.log(props)}
      <Card>
        <Form onSubmit={handlesubmit}>
          <input onChange={onChangeHandler} placeholder="Search"></input>
          <span>
            <Button type="submit">Search</Button>
          </span>

          {
            <div
              onChange={onChanges}
              key={`inline-${"radio"}`}
              className="mb-3"
            >
              <Form.Check
                name="query"
                inline
                label="title"
                type={"radio"}
                id={`inline-${"radio"}-1`}
              />
              <Form.Check
                name="query"
                inline
                label="category"
                type={"radio"}
                id={`inline-${"radio"}-2`}
              />
              <Form.Check
                inline
                label="Budget "
                name="query"
                type={"radio"}
                id={`inline-${"radio"}-3`}
              />
            </div>
          }
        </Form>
        {props.searchResult.map((item) => {
          return (
            <div style={{ float: "left", margin: "30px", padding: "10px" }}>
              <PCard Item={item} />
            </div>
          );
        })}
      </Card>
    </>
  );
}

const mapStateToProps = (state) => ({
  searchResult: state.projects.searchResult,
});
export default connect(mapStateToProps)(Project);

//   return (
//     <>
//
//     </>
