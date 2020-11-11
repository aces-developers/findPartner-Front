import React, { useEffect } from "react";
import Header from "../header/header";
import Jumber from "../jumbotron/jumbotron";
import Projects from "../projects/projects";
import Ues from "../sectionUse/sectionUse";
import ListProject from "../projects/list-projects";
import SignUp from "../signUp/signUp";
import SignIn from "../singIn/signIn";
import Regisration from "../regisration/regisration";
import AboutUs from "../about/about";
import Footer from "../footer/footer";
import projectForm from "../newproject/project-form";
import Homedetails from "../fulldetalis/detalis";
import MyProjects from "../myProjects/myProjects";
//new routes
import Detalis from "../projects/projectDetails";
// import Dashboard from "../dashboard/dashboard";
import detailedProject from "../detailedProject-owner/detailedProject";
import EditProject from "../edit-project/EditProject";
import { setAccount } from "../../store/users/users.store";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Chat from "../Chat/Chat";

function Main(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    const loggedInUser = localStorage.getItem("account");
    if (loggedInUser) {
      console.log("loggedInUser --->", loggedInUser);
      const foundUser = JSON.parse(loggedInUser);
      dispatch(setAccount(foundUser));
    }
  }, []);

  return (
    <div>
      <Header />
      <Switch>
        <Route
          // onEnter={checkLocal}
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
        <Route path="/SignIn" component={SignIn} />
        <Route path="/SignUp" component={SignUp} />
        <Route path="/Regisration" component={Regisration} />
        <Route path="/AboutUs" component={AboutUs} />
        {/* new routes */}
        <Route path="/detalis/:_id" component={Homedetails} />
        <Route path="/edit/:id" component={EditProject} />
        <Route path="/chat" component={Chat} />
        <Route path="/MyProjects" component={MyProjects} />
      </Switch>
      <Footer />
    </div>
  );
}

export default Main;
