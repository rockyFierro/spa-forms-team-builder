import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import 'normalize.css';
import "./stylesheets/index.scss";
import WebFont from 'webfontloader';

WebFont.load({
    google: {
        families: ['Carter One:300,400,700', 'cursive', 'sans-serif']
    }
});

const rootElement = document.getElementById(
    "root"
);
ReactDOM.render(<App />, rootElement);