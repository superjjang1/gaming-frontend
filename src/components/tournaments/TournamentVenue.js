import React, {Component} from 'react';
import axios from 'axios';
import Tournaments from '../Utility/Tournaments';


class TournamentVenue extends Component {
    state = {tournaments: []}
    async componentDidMount(){
        const allTournaments = axios.get(`${window.apiHost}/tournaments`)
        allTournaments.then((resp)=>{
            const tournaments = resp.data;
            console.log(tournaments)
            this.setState({
                tournaments
            })
        })
    }
    render() { 
        return (
            <div className="col s3">
                <h1>Tournaments</h1>
                <div className="row">
                   <Tournaments tournaments = {this.state.tournaments}/> 
                </div>
            </div>
         );
    }
}
 
export default TournamentVenue;


