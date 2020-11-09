import React, { useEffect, useState } from "react";
import { loadProjects, handleSearch } from "../../store/projects/project.store";
import { connect, useDispatch } from "react-redux";
import { Card, Button, Row, Col, Image, Container } from "react-bootstrap";
import { ButtonGroup, DropdownButton, Dropdown, Form } from "react-bootstrap";
import PCard from "./card/p-Card";
import Figure from "react-bootstrap/Figure";
import "./projects-list.scss";

function Project(props) {
  const [q, setq] = useState("");
  const [search, setsearch] = useState("title");
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("hellllllllo", q);
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

  const onChangeSearchInput = (e) => {
    console.log("whynot", e);
    setq(e.target.value);
    console.log("maybe", q);
  };

  const onSearchCategory = (e) => {
    console.log(e);
    setq(e);
    console.log("search", search);
  };

  const onChangeSearchField = (e) => {
    console.log(e);
    setsearch(e.target.value);
    console.log("search", search);
  };

  return (
    <div className="project-search">
      <Container className="project-search-container">
        <Form className="form-style" onSubmit={handlesubmit}>
          <input
            hidden={search !== "title" ? true : false}
            onChange={onChangeSearchInput}
            placeholder="Search"
          ></input>
          <DropdownButton
            hidden={search === "category" ? false : true}
            onSelect={onSearchCategory}
            id="dropdown-basic-button"
            name="category"
            title="Categories"
          >
            <Dropdown.Item eventKey="it">IT</Dropdown.Item>
            <Dropdown.Item eventKey="engineering">Engineering</Dropdown.Item>
            <Dropdown.Item eventKey="arts">Arts</Dropdown.Item>
          </DropdownButton>
          <span>
            <Button type="submit">Search</Button>
          </span>

          {
            <div
              onChange={onChangeSearchField}
              key={`inline-${"radio"}`}
              className="mb-3"
            >
              <Form.Check
                defaultChecked
                name="query"
                inline
                value="title"
                label="title"
                type={"radio"}
                id={`inline-${"radio"}-1`}
              />
              <Form.Check
                name="query"
                inline
                value="category"
                label="category"
                type={"radio"}
                id={`inline-${"radio"}-2`}
              />
            </div>
          }
        </Form>
        <div className="mb-4 flex-horizental-container">
          {props.searchResult.map((item, index) => {
            return (
              <div key={index}>
                <PCard Item={item} />
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
}

const mapStateToProps = (state) => ({
  searchResult: state.projects.searchResult,
});
export default connect(mapStateToProps)(Project);
