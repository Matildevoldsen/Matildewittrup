import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from './App';
import {BrowserRouter as Router} from "react-router-dom";
import { GlobalHistory } from './history';
ReactDOM.render(
    <Router>
        <GlobalHistory/>
        <App/>
    </Router>
    , document.getElementById('root'));

serviceWorker.register();