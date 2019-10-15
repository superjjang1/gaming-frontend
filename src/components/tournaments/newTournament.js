import React, {Component} from 'react';
import {connect} from 'react-redux';
import './newTournament.css';
import tournamentAction from '../../actions/tournamentAction';
import axios from 'axios';
import moment from 'moment';
import {bindActionCreators} from 'redux';
import M from 'materialize-css';
// import {
//     MuiPickersUtilsProvider,
//     KeyboardTimePicker,
//     KeyboardDatePicker,
//   } from '@material-ui/pickers';
// import DateFnsUtils from '@date-io/date-fns';
// import 'date-fns';



class newTournament extends Component {
    state = {
        name: "",
        game: "",
        url: "",
        description: "",
        participants: 0,
        date1: "",
        date2: "",
        time: "",
        daysDiff: 0
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
    
    changeTime=(e)=>{
        this.setState({time: e.target.value})
        
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
    
    submitTournament = async (e) => {
        e.preventDefault();
        console.log(this.props.auth)

        const headerConfig = {
            headers: {
                'content-type': 'application/json'
            }
        
        }
        const data = new FormData();
        for(let key in this.state){
            data.append(key,this.state[key])
        }
        const submitTournamentUrl = `${window.apiHost}/tournaments/new`
        let dataToSend = {...this.state, token:this.props.auth.token}
        // data.append('token',this.props.auth.token);
        console.log(data);
        const axiosResponse = await axios.post(submitTournamentUrl,dataToSend,headerConfig);
        console.log(axiosResponse.data)
    }
    componentDidMount(){
        // var elem = document.querySelectorAll('select');
        // var instances = window.M.FormSelect.init(elem);
        // let options = {setDefaultDate: "DATEFROMOMENT", defaultDate:"DATEFROMOMENT",}
        // document.addEventListener('DOMContentLoaded', function() {
        //     var elems = document.querySelectorAll('.timepicker');
        //     var instances = window.M.Timepicker.init(elems, options);
        //     console.log('this is running', elems.length)
        // });
        
        M.AutoInit();
        console.log(this.state.time);
        if(!this.props.auth.token){
            localStorage.setItem('loginPage','/tournament/new')
            this.props.history.push('/login')
            let options = {setDefaultDate: "DATEFROMOMENT", defaultDate:"DATEFROMOMENT"}
            document.addEventListener('DOMContentLoaded',function(){
                var elems = document.querySelectorAll('.timepicker');
                var instances = window.M.Timepicker.init(elems, options);

            })
        }
    }
    render() { 
        // let options = {setDefaultDate: "DATEFROMOMENT", defaultDate:"DATEFROMOMENT",}
        // setTimeout(() => {
        //     var elems = document.querySelectorAll('.timepicker');
        //     var instances = window.M.Timepicker.init(elems, options);
        // }, 300);
        
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
                    <form onSubmit={this.submitTournament} id="tournament_form" className="new_tournament" acceptCharset="UTF-8" method="post">
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
                                            <textarea id="textarea2" className="materialize-textarea white-text" data-length="30" onChange={this.changeName}  value={this.state.name}></textarea>
                                            <label htmlFor="textarea2">Tournament Name</label>
                                        </div>
                                    </div>
                                    <div className="inline-field">
                                        <span className="lbl">
                                            Game:
                                        </span>
                                        <div className="input-field col s12">
                                            <textarea id="textarea2" className="materialize-textarea white-text" data-length="30" onChange={this.changeGame}  value={this.state.game}></textarea>
                                            <label htmlFor="textarea2">Game</label>
                                        </div>
                                    </div>
                                    
                                    <div className="inline-field">
                                        <span className="field-label">Description</span>
                                        <div className="input-field col s12">
                                            <textarea id="textarea2" className="materialize-textarea white-text" data-length="400" onChange={this.changeDescription}  value={this.state.description} ></textarea>
                                            <label htmlFor="textarea2">400 Character limit</label>
                                        </div>
                                    </div>
                                    <div className="inline-field">
                                        <span className="field-label">Participants</span>
                                        <div className="input-field col s12" id="participants">
                                            <label htmlFor="participants">
                                            </label>
                                            <select onChange={this.changeParticipants}  value={this.state.participants} type="number" className="validate white-text" min="0" >
                                                <option value="undefined" />
                                                <option value="4">4</option>
                                                <option value="8">8</option>
                                                <option value="16">16</option>
                                            </select>
                                            
                                        </div>
                                    </div>
                                    <div className="inline-field">
                                        <span className="field-label">Start Date and Time</span>
                                        <div className="input-field col s12" id="date">
                                            <input onChange={this.changeDate1} value={this.state.date1} type ="date" />
                                            <input type="time" className="time" onChange={this.changeTime} value={this.state.time}/>
                                            
                                        </div>
                                        <span className="field-label">End Date</span>
                                        <div className="input-field col s12" id="date">
                                            <input onChange={this.changeDate2} value={this.state.date2} type="date" />
                                        </div>
                                    </div>
                                
                                </div>
                            </div>
                        <button className="sign-up-button">Submit Your Tournament</button>
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