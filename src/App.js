import "./App.css";
import Main from "./Component/main/main";
import React from "react";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import store from "./store/index";
import history from "./history/history";

function App(props) {
  return (
    <>
      <Provider store={store}>
        <Router history={history}>
          <Main />
        </Router>
      </Provider>
    </>
  );
}

export default App;
