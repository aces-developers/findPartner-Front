
import './App.css';
import Header from './Component/header/header'
import Jumber from './Component/jumbotron/jumbotron'
import Ues from './Component/sectionUse/sectionUse'
import ListProject from './store/projects/listproject/list-project';
import React from "react";
import { Provider } from "react-redux";
import store from "./store/";
function App() {
  return (
    <>
    <Provider store={store}>
    <Header/>
    <Jumber/>
    <Ues/>
    <ListProject/>
    </Provider>
    </>
  );
}

export default App;
