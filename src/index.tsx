import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import store, {StatePropsType} from "./redux/state";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";

export let rerenderEntireState = (state?: StatePropsType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App store={store}/>
        </BrowserRouter>,
        document.getElementById('root')
    );
};
rerenderEntireState(store.getState());

store.subscribe(rerenderEntireState)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
