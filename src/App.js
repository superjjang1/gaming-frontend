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
import newTournament from './components/tournaments/newTournament';
import bracketTournament from './components/tournaments/Tournament';
import newCommunity from './components/community/newCommunity';
import myAccount from './components/account/myAccount';
import Account from './components/account/account';
import theCommunity from './components/community/theCommunity';
import CommunityId from './components/community/aCommunity';
function App() {
  return (<>
    <Router>
    <div className = "App" >
    <Route path ='/' component ={NavBar}/>
    <Route exact path ="/" component ={Home}/>
    <Route exact path="/register" component = {RegisterComponent}/>
    <Route exact path="/login" component={Login}/>
    <Route exact path="/tournaments/new" component={newTournament}/>
    <Route exact path ="/tournaments" component={bracketTournament}/>
    <Route exact path = "/community/new" component = {newCommunity}/>
    <Route exact path = "/my-account/edit" component ={myAccount}/>
    <Route exact path = "/my-account" component ={Account}/>
    <Route exact path = "/community" component={theCommunity}/>
    <Route exact path = "/community/:communityId" component={CommunityId}/>
    </div>

    </Router> 
    </>);
  }

  export default App;