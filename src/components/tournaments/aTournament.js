import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import tournamentAction from '../../actions/tournamentAction';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class TournamentId extends Component {
    constructor(props){
        super(props);
        this.state = {tournament:[]}
    }
    async componentDidMount(){
        const aTournament = this.props.match.params.tournamentId
        const url = `${window.apiHost}/tournaments/${aTournament}`
        const axiosResponse = await axios.get(url)
        this.setState({
            tournament: axiosResponse.data
        })
        console.log(axiosResponse.data)
    }
    render() {
        const{name, game, date1, date2, description, participants, time, displayname} = this.state.tournament
        console.log(this.state.tournament);
        return(
            <div className="container-fluid">
                <div>
                    <h1>Welcome to {name}</h1>
                </div>
                <div className="row">
                    <div className="col s6">Start: {date1}</div>
                    <div className="col s6">End: {date2}</div>
                    <div className="col s12">The Name of The Game: {game}</div>
                    <div className="col s12">Description: {description}</div>
                    <div className="col s12">Participants: {participants}</div>
                    <div className="col s12">Starting at: {time}</div>
                    <div className="col s12">Created by: {displayname}</div>
                </div>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <Link className="btn btn-primary btn-lg -x-full-width blue" to="/tournaments">Go Back</Link>

            </div>
        )
    }

}
function mapStateToProps(state){
    return{
        auth: state.auth
    }
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({
        tournamentAction:tournamentAction
    },dispatch)
}

export default connect(mapDispatchToProps,mapStateToProps)(TournamentId);