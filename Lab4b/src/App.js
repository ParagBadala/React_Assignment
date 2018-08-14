import React, { Component } from 'react';
import List from './list';
class App extends Component {
  
  state = {
    items:[]
  };

  addData = (e)=>{
    var newItem = {
      text: this.data.value,
      key: Date.now()
    };
    this.setState((prevState)=>{
      return{
        items: prevState.items.concat(newItem)
        
      };
    })
    
    this.data.value="";
    console.log(this.state.items);
    e.preventDefault();
  }
  render() {
    return (
      <div className="App">
        <form>
          <label>Name</label>
          <input type="text" ref={(input)=>this.data=input} />
          <button onClick={this.addData.bind(this)}>Add</button>
        </form>

        <List text={this.state.items}></List>
      </div>
    );
  }
}

export default App;
