import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import store from "./redux/redux-store";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {Provider} from "react-redux";

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
);

reportWebVitals();


// import React from "react";
// // @ts-ignore
// import {createRoot} from "react-dom/client";
// import {Provider} from "react-redux";
// import App from "./App";
// import store from "./redux/redux-store";
// import {BrowserRouter} from "react-router-dom";
//
//
// const container = document.getElementById("root") as HTMLElement;
// const root = createRoot(container);
//
// root.render(
//     <BrowserRouter>
//         <Provider store={store}>
//             <App/>
//         </Provider>
//     </BrowserRouter>
// );

