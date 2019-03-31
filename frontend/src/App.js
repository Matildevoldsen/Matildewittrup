import React, {Component} from 'react';
import Navigation from "./components/Navigation/Navigation";
import {Route, Switch} from 'react-router-dom';

import Home from './pages/Home/Home'
import * as ROUTES from './constants/routes';
import About from "./pages/About/About";

class App extends Component {
    render() {
        return (
            <div>
                <Navigation firebase={this.props.firebase}/>

                <Route path={ROUTES.HOME} exact component={() => <Home firebase={this.props.firebase}/>}/>
                <Route path={ROUTES.ABOUT} exact component={() => <About firebase={this.props.firebase}/>}/>
            </div>
        );
    }
}

export default App;