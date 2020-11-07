
import "./App.css";
import Header from "./Component/header/header";
import Jumber from "./Component/jumbotron/jumbotron";
import Projects from "./Component/projects/projects";
import Ues from "./Component/sectionUse/sectionUse";
import ListProject from "./Component/projects/list-projects";
import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import store from "./store/index";

import projectForm from "./Component/newproject/project-form";

import SignUp from './Component/signUp/signUp'
import SignIn from './Component/singIn/signIn'
import Users from "./Component/users/user";
import CompleteSignup from './Component/accountInfo/accountInfo'
import AboutUs from './Component/about/about'
import Footer from './Component/footer/footer'

function App() {
  return (
    <>
      <Provider store={store}>
        <Router>
          <Header/>
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

          {/* <Route path="/users" component={Users} /> */}
            <Route path="/SignIn" component={SignIn} />
            <Route path="/SignUp" component={SignUp} />
            <Route path="/Regisration" component={CompleteSignup} />
            <Route path="/AboutUs" component={AboutUs} />

          </Switch>
          <Footer/>
        </Router>
      </Provider>
    </>
  );
}

export default App;
