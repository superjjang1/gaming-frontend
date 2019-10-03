import React, {Component} from 'react';
import {connect} from 'react-redux';
import './newTournament.css';
import {bindActionCreators} from 'redux';
import tournamentAction from '../../actions/tournamentAction';
import axios from 'axios';
import moment from 'moment';

class newTournament extends Component {
    state = {
        name: "",
        game: "",
        url: "",
        decription: "",
        participants: "",
        date: ""
    }
    changeName = (e) =>{
        this.setState({name: e.target.value})
    }
    changeGame = (e) => {
        this.setState({game: e.target.value})
    }
    changeUrl = (e) =>{
        this.setState({url: e.target.value})
    }
    changeDescription = (e) =>{
        this.setState({description: e.target.value})
    }
    changeParticipants = (e) =>{
        this.setState({participants: e.target.value})
    }
    changeDate = (e) =>{
        const date1 = this.state.date1;
        const date1M = moment(date1);
        if(moment(e.target.value)){
            this.setState({date: e.target.value})
        }
        this.setState({date1:e.target.value})
    }
    render() { 
        return (<> 
            <div className="session-layout">
                    <div className="title left"><h1>New Tournament</h1></div>
                <div className="container-fluid">
                    <fieldset className="form-fieldset">
                        <div className="form-panel">
                            <div className="form-panel-heading">
                                <h3 className="heading">Let's get Started</h3>
                            </div>
                            <div className="body">
                                "
                                fill out the form completely to create your tournament!
                                "
                            </div>
                        </div>
                    </fieldset>
                    <fieldset className="form-fieldset"></fieldset>
                    <form id="tournament_form" className="new_tournament" accept-charset="UTF-8" method="post">
                        <fieldset className="form-fieldset">
                            <div className="form-panel">
                                <div className="form-panel-heading">
                                    <h3 className="heading"> Basic Info</h3>
                                </div>
                                <div className="body">
                                    <div className="inline-field">
                                        <span className="lbl">
                                            <label className="field-label -required" for="tournament_name">"Tournament name"</label>
                                        </span>
                                        <div className="control">
                                            <input maxlength="60" required="required" className="auto-focus form-control" size="60" type="text" name="tournament[name]" id="tournament_name"></input>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </fieldset>
                    </form>
                </div>
                

            </div>
         </>);
    }
}
 
export default newTournament;