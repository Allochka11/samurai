import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {StatePropsType, StoreType} from "./redux/store";
import store from "./redux/store";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";

export let rerenderEntireState = (state?: StoreType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App store={store}/>
        </BrowserRouter>,
        document.getElementById('root')
    );
};

rerenderEntireState();

store.subscribe(rerenderEntireState)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
