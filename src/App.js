import React, { Component } from 'react';

import './App.css';
import '../src/css/custom.css'
import Home from './Container/Home'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home />
      </div>
    );
  }
}

export default App;
