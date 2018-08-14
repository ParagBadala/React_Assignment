import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Route from 'react-router-dom/Route';

class Main extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Route path='/' exact render={
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
                    }/>
                </div>
            </Router>
        );
    }
}

export default Main;