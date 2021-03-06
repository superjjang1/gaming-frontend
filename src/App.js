import React from 'react';
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
import BracketTournament from './components/tournaments/Tournament';
import newCommunity from './components/community/newCommunity';
import myAccount from './components/account/myAccount';
import Account from './components/account/account';
import theCommunity from './components/community/theCommunity';
import CommunityId from './components/community/aCommunity';
import TournamentVenue from './components/tournaments/TournamentVenue';
import TournamentId from './components/tournaments/aTournament';

function App() {
  return (<>
    <Router>
    <div className = "App" >
    <Route path ='/' component ={NavBar}/>
    <Route exact path ="/" component ={Home}/>
    <Route exact path="/register" component = {RegisterComponent}/>
    <Route exact path="/login" component={Login}/>
    <Route exact path="/tournaments" component={TournamentVenue}/>
    <Route exact path = "/community/new" component = {newCommunity}/>
    <Route exact path = "/my-account/edit" component ={myAccount}/>
    <Route exact path = "/my-account" component ={Account}/>
    <Route exact path = "/community" component={theCommunity}/>
    <Route exact path="/community/:communityId" component={CommunityId}/>
    <Route exact path="/community/:communityId" component={BracketTournament}/>
    {/* <Route path="/tournaments/:tournamentId" render={props => <div>
      <TournamentId/>
      <BracketTournament/>
    </div>}/> */}
    <Route exact path="/tournament/new" component={newTournament}/>
    <Route path="/tournaments/:tournamentId" component={TournamentId}/>
    <Route path="/tournaments/:tournamentId" component={BracketTournament}/>
    </div>

    </Router> 
    </>);
  }

  export default App;