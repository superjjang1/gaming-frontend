import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import RegisterComponent from './components/NavBar/RegisterComponent';
import Login from './components/NavBar/Login';



function App() {
  return (<>
    <Router>
    <div className = "App" >
    <Route path ='/' component ={NavBar}/>
    <Route exact path ="/" component ={Home}/>
    <Route exact path="/register" component = {RegisterComponent}/>
    <Route exact path="/login" component={Login}/>
    </div>

    </Router> 
    </>);
  }

  export default App;