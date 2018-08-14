import React, { Component } from 'react';
import './App.css';
import Navigation from './Navigation';
import Main from './Main';
import { BrowserRouter as Router} from 'react-router-dom';
class App extends Component {
  render() {
    return (
      
      <div className="App">
      <Router>
        <Navigation></Navigation>
       </Router>
      </div> 
    );
  }
}

export default App;
