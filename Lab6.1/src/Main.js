import React, { Component } from 'react';
import './App.css';
import Route from 'react-router-dom/Route';
import Oneplus from './OnePlus6.jpg';
import Sumsung from './sumsungs9plus.jpg';
import Iphone from './iphonex.jpg';


class Main extends Component {
    render() {
        return (
            
                <div className="App">
                    <Route path='/' exact render={
                        ()=>{
                            return <img src={Oneplus} alt="Image Not Found" />
                        }
                    }/>
                    <Route path='/about' exact render={
                        ()=>{
                            return <img src={Sumsung} alt="Image Not Found" />
                        }
                    }/>
                    <Route path='/contact' exact render={
                        ()=>{
                            return <img src={Iphone} alt="Image Not Found" />
                        }
                    }/>
                </div>
            
        );
    }
}

export default Main;