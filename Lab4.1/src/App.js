import React, { Component } from 'react';
import { Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import './App.css';

class App extends Component {
  state = {
    user:
    {
      name:"",
      password:"",
      isLoggedIn:false
    },
  }
  

  handleChangeUname = (e)=>{
    const user = Object.assign({},this.state.user)
    user.name = e.target.value;
    this.setState({user:user})
  }
  handleChangePass = (e)=>{
    const user = Object.assign({},this.state.user)
    user.password = e.target.value;
    this.setState({user:user})
  }
  login = (e)=>{
    e.preventDefault()
    const user = Object.assign({},this.state.user)
    user.isLoggedIn = true
    this.setState({user:user})
  }

  logout = (e)=>{
    e.preventDefault()
    const user = Object.assign({},this.state.user)
    user.isLoggedIn = false
    user.name='';
    user.password='';
    this.setState({user:user})
  }
  render() {
    if(!this.state.user.isLoggedIn){
      return (
      <div className="Login">
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="uname" bsSize="large">
            <ControlLabel>UserName</ControlLabel>
            <FormControl
              autoFocus
              type="text"
              value={this.state.user.name}
              onChange={this.handleChangeUname.bind(this)}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <ControlLabel>Password</ControlLabel>
            <FormControl
              value={this.state.user.password}
              onChange={this.handleChangePass.bind(this)}
              type="password"
            />
          </FormGroup>
          <Button
            block
            bsSize="large"
            type="submit" onClick={this.login.bind(this)}
          >
            Login
          </Button>
        </form>
        </div>
        );
    }
    else{
      return(
        <div>
          <h1>Welcome {this.state.user.name}</h1>
          <button onClick={this.logout.bind(this)}>LogOut</button>
        </div>
      );
    }
      }
}

export default App;
