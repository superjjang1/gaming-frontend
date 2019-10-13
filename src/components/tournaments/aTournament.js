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
            <h1>Sanity</h1>
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