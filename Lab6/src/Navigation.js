import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import './App.css';

class Navigation extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                <ul>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                </ul>
                </div>
            </Router>
        );
    }
}

export default Navigation;