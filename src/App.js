import "./App.css";
import Main from "./component/main/main";
import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import store from "./store/index";

function App(props) {
  return (
    <>
      <Provider store={store}>
        <Router>
          <Main />
        </Router>
      </Provider>
    </>
  );
}

export default App;
