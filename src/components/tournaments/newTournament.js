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
        participants: 0,
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
        if(moment(e.target.value).format('MMMM Do YYYY, h:mm a')){
            this.setState({date: e.target.value})
        }
        this.setState({date1:e.target.value})
    }
    changeTime=(e)=>{
        
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
                    <form id="tournament_form" className="new_tournament" acceptCharset="UTF-8" method="post">
                        <fieldset className="form-fieldset">
                            <div className="form-panel">
                                <div className="form-panel-heading">
                                    <h3 className="heading"> Basic Info</h3>
                                </div>
                                <div className="body">
                                    <div className="inline-field">
                                        <span className="lbl">
                                            <label className="field-label -required" htmlFor="tournament_name">Tournament name</label>
                                        </span>
                                        <div className="control">
                                            <input maxLength="60" required="required" className="auto-focus form-control" size="60" type="text" name="tournament[name]" id="tournament_name"></input>
                                        </div>
                                    </div>
                                    <div className="inline-field">
                                        <span className="lbl">
                                            <label className="field-label -required" htmlFor="tournament_url">URL</label>
                                        </span>
                                        <div className="input-group-addon">
                                            <span className="tournament_subdomain"></span>
                                            something.com
                                        </div>
                                        <div className="control">
                                            <input className="enforce-uniqueness form-control field" data-uniqueness-url="/tournaments/check_url_availability" type="text" value="url" name="tournament[url]" id="tournament_url"></input>
                                        </div>
                                    </div>
                                    <div className="inline-field">
                                        <span className="field-label">Description</span>
                                        <div className="input-field col s12">
                                            <textarea id="textarea2" className="materialize-textarea" data-length="400"></textarea>
                                            <label htmlFor="textarea2">400 Character limit</label>
                                        </div>
                                    </div>
                                    <div className="inline-field">
                                        <span className="field-label">Participants</span>
                                        <div className="input-field col s12" id="guests">
                                            <input onChange={this.changeParticipants}  value={this.state.participants} type="number" className="validate" />
                                            <label htmlFor="guests">Participants</label>
                                        </div>
                                    </div>
                                    <div className="inline-field">
                                        <span className="field-label">Start Date</span>
                                        <div className="input-field col s12" id="date">
                                            <input onChange={this.changeDate} value={this.state.date} type ="date" />
                                            <input type="text" className="timepicker"/>
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