import React, {Component} from 'react';
import {connect} from 'react-redux';
import './newTournament.css';
import tournamentAction from '../../actions/tournamentAction';
import axios from 'axios';
import moment from 'moment';
import {bindActionCreators} from 'redux';


class newTournament extends Component {
    state = {
        name: "",
        game: "",
        url: "",
        decription: "",
        participants: 0,
        date1: "",
        date2: "",
        time: "",
        daysDiff: 0
    }
    componentDidUpdate(prevProps, prevState){
        if(prevProps.newTournament.msg !== this.props.newTournament.msg){
            if(this.props.newTournament.msg ==='tournamentAdded'){
                this.setState({
                    msg: 'Tournament Added'
                })
            }
        }
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
    changeDate1 = (e)=>{
        this.setState({date1:e.target.value}, (event) => {
            const date1 = this.state.date1;
            const date2 = this.state.date2;
            const date1M = moment(date1);
            const date2M = moment(date2);
            if(moment(date1) > moment(date2)){
                this.setState({
                    datesMsg: "Start date must be before end date"
                })
            }else if((date1)&&(date2)){
                const daysDiff = -date1M.diff(date2M, 'days');
                this.setState({
                    daysDiff
                })
            }
        })
    }
    onSubmit = (e) => {
        e.preventDefault();
        const data = new FormData()
        data.append('token', this.props.auth.token);
        this.props.tournamentAction(data)
    }
    changeDate2 = (e)=>{
        this.setState({date2:e.target.value}, (event) => {
            const date1 = this.state.date1;
            const date2 = this.state.date2;
            const date1M = moment(date1);
            const date2M = moment(date2);
            if(moment(date2) < moment(date1)){
                this.setState({
                    datesMsg: "Start date must be before End Date"
                })
            }else if((date1)&&(date2)){
                const daysDiff = -date1M.diff(date2M, 'days');
                console.log(daysDiff)
                this.setState({
                    daysDiff
                })
            }
        })
        
    }
    componentDidMount(){
        if(!this.props.auth.token){
            localStorage.setItem('loginPage','/tournament/new')
            this.props.history.push('/login')
        }
        var elem = document.querySelectorAll('select');
        var instances = window.M.FormSelect.init(elem);
        
        
        let options = {setDefaultDate: "DATEFROMOMENT", defaultDate:"DATEFROMOMENT",}
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.timepicker');
            var instances = window.M.Timepicker.init(elems, options);
            });
    }
    changeTime=(e)=>{
        this.setState({time: e.target.value})
    }
    render() { 
        let button;
        if(this.props.auth.token){
            
        }
        
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
                                            Tournament name
                                        </span>
                                        <div className="input-field col s12">
                                            <textarea id="textarea2" className="materialize-textarea" data-length="30"></textarea>
                                            <label htmlFor="textarea2">Tournament Name</label>
                                        </div>
                                    </div>
                                    <div className="inline-field">
                                        <span className="lbl">
                                            <label className="field-label -required" htmlFor="tournament_url">URL</label>
                                        </span>
                                        <div className="input-group-addon">
                                            <span className="tournament_subdomain"></span>
                                            something.com/
                                        </div>
                                        <div className="control">
                                            <input className="enforce-uniqueness form-control field" data-uniqueness-url="/tournaments/check_url_availability" onChange={this.changeUrl} type="text" value={this.state.url} name="tournament[url]" id="tournament_url"></input>
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
                                            <input onChange={this.changeParticipants}  value={this.state.participants} type="number" className="validate" min="0" />
                                            <label htmlFor="guests">Participants</label>
                                        </div>
                                    </div>
                                    <div className="inline-field">
                                        <span className="field-label">Start Date and Time</span>
                                        <div className="input-field col s12" id="date">
                                            <input onChange={this.changeDate1} value={this.state.date1} type ="date" />
                                            <input type="datetime" className="timepicker" onChange={this.changeTime} value={this.state.time}/>
                                        </div>
                                        <span className="field-label">End Date</span>
                                        <div className="input-field col s12" id="date">
                                            <input onChange={this.changeDate2} value={this.state.date2} type="date" />
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
 
export default connect(mapStateToProps,mapDispatchToProps)(newTournament);