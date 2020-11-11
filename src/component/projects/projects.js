import React, { useEffect, useState } from "react";
import { loadProjects, handleSearch } from "../../store/projects/project.store";
import { connect, useDispatch } from "react-redux";
import { Card, Button, Row, Col, Image, Container } from "react-bootstrap";
import { ButtonGroup, DropdownButton, Dropdown, Form } from "react-bootstrap";
import PCard from "./card/p-Card";
import Figure from "react-bootstrap/Figure";
import "./projects-list.scss";
import { PaginatedList } from 'react-paginated-list'

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
      <Container className="project-search-container pt-4">
        <Form className="pt-4" onSubmit={handlesubmit}>
          <Row className="justify-content-md-start no-gutters">
            <Col
              md={6}
              className="mr-2"
              hidden={search !== "title" ? true : false}
            >
              <input
                className="w-100 "
                onChange={onChangeSearchInput}
                placeholder="Search"
                style={{
                  padding: 5,
                  borderRadius: 5,
                  borderWidth: 0.5,
                }}
              ></input>
            </Col>
            <Col md={2} hidden={search === "category" ? false : true}>
              <ButtonGroup className="w-100">
                <DropdownButton
                  variant="outline-secondary"
                  className="w-100"
                  onSelect={onSearchCategory}
                  id="dropdown-basic-button"
                  name="category"
                  title="Categories"
                >
                  <Dropdown.Item eventKey="it">IT</Dropdown.Item>
                  <Dropdown.Item eventKey="engineering">
                    Engineering
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="arts">Arts</Dropdown.Item>
                </DropdownButton>
              </ButtonGroup>
            </Col>
            <Col md={3}>
              <Button
                clasName="w-100 "
                type="submit"
                style={{ width: 100, padding: 5 }}
              >
                Search
              </Button>
            </Col>
          </Row>
          <Row className="mt-4 justify-content-md-start no-gutters">
            {
              <div
                onChange={onChangeSearchField}
                key={`inline-${"radio"}`}
                className="mb-3"
              >
                <Form.Check
                  custom
                  defaultChecked
                  name="query"
                  inline
                  value="title"
                  label="title"
                  type={"radio"}
                  id={`inline-${"radio"}-1`}
                />
                <Form.Check
                  custom
                  name="query"
                  inline
                  value="category"
                  label="category"
                  type={"radio"}
                  id={`inline-${"radio"}-2`}
                />
              </div>
            }
          </Row>
        </Form>
        <PaginatedList
          list={props.searchResult}
          itemsPerPage={6}
          renderList={(list) => (
            <div className="mb-4 flex-horizental-container">
              {list.map((item, index) => {
                return (
                  <div key={index}>
                    <PCard Item={item} />
                  </div>
                );
              })}
            </div>
          )}
        />
      </Container>
    </div>
  );
}

const mapStateToProps = (state) => ({
  searchResult: state.projects.searchResult,
});
export default connect(mapStateToProps)(Project);
