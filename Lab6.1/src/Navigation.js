import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import Main from './Main';

class Navigation extends Component {
    render() {
        return (
            
                <div className="App">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
                <Main></Main>
                {/*<Route path='/' exact render={
                        ()=>{
                            return <h1>Home Page</h1>
                        }
                    }/>
                    <Route path='/about' exact render={
                        ()=>{
                            return <h1>About Page</h1>
                        }
                    }/>
                    <Route path='/contact' exact render={
                        ()=>{
                            return <h1>Contact Page</h1>
                        }
                    }/>*/}


                </div>
            
        );
    }
}

export default Navigation;