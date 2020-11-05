import './App.css';
import Header from './Component/header/header'
import Jumber from './Component/jumbotron/jumbotron'
import Projects from './Component/projects/projects'
import Ues from './Component/sectionUse/sectionUse'
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import store from "./store/index";
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
                <Jumber/>
                <Ues/>
                </>
              )}
            />
            <Route path="/projects" component={Projects} />
          </Switch>
        </Router>
    </Provider>
  
    </>
  );
}

export default App;
