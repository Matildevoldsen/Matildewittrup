import React, {Component} from 'react';
import Navigation from "./components/Navigation/Navigation";
import {Route} from 'react-router-dom';

import Home from './pages/Home/Home'
import * as ROUTES from './constants/routes';
import About from "./pages/About/About";
import Login from './pages/Login/Login';

class App extends Component {
    render() {
        return (
            <div>
                <Navigation firebase={this.props.firebase}/>

                <Route path={ROUTES.HOME} exact component={() => <Home/>}/>
                <Route path={ROUTES.ABOUT} exact component={() => <About/>}/>
                <Route path={ROUTES.SIGN_IN} exact component={() => <Login/>}/>
            </div>
        );
    }
}

export default App;