import React, { Component } from 'react';
import './App.css';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import { Route } from 'react-router-dom';
import Navbar from "./Components/Navbar/Navbar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar
            title="Matilde Wittrup"
            courseLink="https://www.udemy.com/user/matilde-wittrup-enevoldsen/"/>

        <Route exact path='/' component={Home}/>
        <Route exact path='/about-me' component={About}/>
        <Route exact path='/contact' component={Contact}/>
      </div>
    );
  }
}

export default App;
