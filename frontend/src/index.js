import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import * as serviceWorker from './serviceWorker';

import App from './App';
import { BrowserRouter as Router } from "react-router-dom";

import firebase from './firebase/firebase';

ReactDOM.render(
    <Router>
        <App firebase={firebase}/>
    </Router>
    , document.getElementById('root'));

serviceWorker.register();