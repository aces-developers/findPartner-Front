import "./App.css";
import Header from "./Component/header/header";
import Jumber from "./Component/jumbotron/jumbotron";
import Projects from "./Component/projects/projects";
import Ues from "./Component/sectionUse/sectionUse";
import ListProject from "./store/projects/listproject/list-projects";
import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import store from "./store/index";
import projectForm from "./Component/newproject/project-form";
function App() {
  return (
    <>
      <Provider store={store}>
        <Router>
          <Header />
          <Switch>
            <Route
              path="/"
              exact
              render={(props) => (
                <>
                  <Jumber />
                  <Ues />
                  <ListProject />
                </>
              )}
            />
            <Route path="/projects" component={Projects} />
            <Route path="/newprojects" component={projectForm} />
          </Switch>
        </Router>
      </Provider>
    </>
  );
}

export default App;
