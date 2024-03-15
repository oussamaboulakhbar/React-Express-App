import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./Atelier3/Home.js";
import reducer from "./Atelier3/reducer.js";
import { Provider } from "react-redux";
import { legacy_createStore } from "redux";
const store = legacy_createStore(reducer) ;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Provider store = {store}>
        <Home /> 
        
    </Provider>
)