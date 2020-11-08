
import "./App.css";
import Header from "./Component/header/header";
import Jumber from "./Component/jumbotron/jumbotron";
import Projects from "./Component/projects/projects";
import Ues from "./Component/sectionUse/sectionUse";
import ListProject from "./Component/projects/list-projects";
import React,{useEffect} from "react";
import { Provider, useDispatch,connect } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import store from "./store/index";
import {If,Else,Then} from "./Component/IF/index"
import projectForm from "./Component/newproject/project-form";

import SignUp from './Component/signUp/signUp'
import SignIn from './Component/singIn/signIn'
import Users from "./Component/users/user";
import CompleteSignup from './Component/accountInfo/accountInfo'
import AboutUs from './Component/about/about'
import Footer from './Component/footer/footer'
import Dashboard from './Component/dashboard/dashboard'

import {setAccount} from "./store/users/users.store"
import useBeforeFirstRender from '../src/hooks/componentWillMount'

const MyComponent = () => { 
  const dispatch = useDispatch();
  useBeforeFirstRender(() => {
    console.log('Do stuff here')
    console.log(localStorage)
    if(localStorage.length){
    
       let user =JSON.parse(localStorage.getItem('account'));
       console.log('for check',user)
        dispatch(setAccount(user))
     
    }
  })
  return (<></>)
}
// const App = () => {
  
//   const dispatch = useDispatch(); 
  
//   useEffect(() => {
//     console.log(localStorage)
//    if(localStorage.length){
//      const check = async ()=>{
//       let user =JSON.parse(localStorage.getItem('account'));
//       console.log('for check',user)
//       await dispatch(setAccount(user))
//      }
//      check()
     
   
//    }
//   }, )
//   return (<></>)
     
// }
function AppWrapper() {
  const states = store.getState();
  
   
 
  
  return (
    <> 

    
      <Provider store={store}>
      {/* <App/> */}
      {console.log('momyaz',states.users.account.token)}
      <MyComponent/>
        <Router>
          <If condtion={states.users.account.token}>
            <Then>
              <Dashboard/>
            </Then>
            <Else>
              <Header/>
            </Else>
          </If>
          
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
const mapStateToProps = (state) => ({
  users: state.users.account,
});
 connect(mapStateToProps)(MyComponent);
export default AppWrapper;
