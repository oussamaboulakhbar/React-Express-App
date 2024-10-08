import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./components/home.js";
import reducer from "./components/reducer.js";
import { Provider } from "react-redux";
import { legacy_createStore } from "redux";
const store = legacy_createStore(reducer) ;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Provider store = {store}>
        <Home /> 
    </Provider>
)