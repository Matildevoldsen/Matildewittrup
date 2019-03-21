import React, { Component } from 'react';
import './App.css';
import Home from './Pages/Home';
import About from './Pages/About';
import { Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path='/' component={Home}/>
        <Route exact path='/about-me' component={About}/>
      </div>
    );
  }
}

export default App;
