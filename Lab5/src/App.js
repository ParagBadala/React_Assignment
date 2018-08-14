import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      time : new Date(),
      text: "Capgemini"
    }
  }
  
  currentTime(){
    this.setState({
      time: new Date(),
      text: "IGate"
    })
  }
  componentDidMount(){
    setInterval(()=>this.currentTime(),1000);
  }
  
  render() {
    return (
      <div className="App">
        <h1>{this.state.text}</h1>
        <h1>{this.state.time.toLocaleTimeString()}</h1>
      </div>
    );
  }
}

export default App;
