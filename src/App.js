import "./App.css";
import React from "react";
import Header from "./Component/header/header";
import Jumber from "./Component/jumbotron/jumbotron";
import Ues from "./Component/sectionUse/sectionUse";
import { Provider } from "react-redux";
import store from "./store/";
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Header />
        <Jumber />
        <Ues />
      </Provider>
    </div>
  );
}

export default App;
