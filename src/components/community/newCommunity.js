import React, {Component} from 'react';
import {connect} from 'react-redux';
import './newCommunity.css';
import axios from 'axios';
import { bindActionCreators } from 'redux';
import communityAction from '../../actions/communityAction';


class newCommunity extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name: "",
            type:"",
            description:"",
            msg: ""
         }
    }
    changeName = (e) =>{
        this.setState({name: e.target.value})
    }
    changeType = (e) =>{
        this.setState({type: e.target.value})
    }
    changeDescription = (e) =>{
        this.setState({description: e.target.value})
    }
    submitCommunity = async (e) => {
        e.preventDefault();
        console.log(this.props.auth)
        let formValid = true;
        let msg = "";
        for (let key in this.state) {
            if ((this.state[key].length <1)&&(key !== 'msg')){
                formValid = false;
                msg = `${key} field is required...`
                break;
            }
        }
        if(this.state.name.toLowerCase() === this.state.name){
            formValid = false;
            msg = "You're community name is too short...."
        }
        else if(this.state.description.toLowerCase()===this.state.description){
            formValid =false;
            msg = "You should put something in the description...."
        }else if (this.state !== this.state){
            formValid = true;
            msg = "thank you for creating a community."
        }
        if(formValid){
            const userData={...this.state}
            this.props.communityAction(userData)
        }else{
            this.setState({
                msg
            })
        }
        const headerConfig = {
            headers: {
                'content-type': 'application/json'
            }
        
        }
        const data = new FormData();
        for(let key in this.state){
            data.append(key,this.state[key])
        }
        const submitCommunityUrl = `${window.apiHost}/community/new`
        let dataToSend = {...this.state, token:this.props.auth.token}
        // data.append('token',this.props.auth.token);
        console.log(data);
        const axiosResponse = await axios.post(submitCommunityUrl,dataToSend,headerConfig);
        console.log(axiosResponse.data);
        this.props.history.push('/community')
    }
    // submitButton = (e) =>{
    //     this.props.history.push('/community')
    // }
    componentDidMount(){
        if(!this.props.auth.token){
            localStorage.setItem('loginPage','/community/new')
            this.props.history.push('/login')
        }
    }
    render() { 
        return (<> 
        <div className="session-layout">
            <div className="row-wrap">
                <form className="col s12" onSubmit={this.submitCommunity}>
                <p className="red-text">{this.state.msg}</p>
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="community-name" type="text" className = "validate" onChange={this.changeName}  value={this.state.name}/>
                            <label htmlFor="community-name">Community name</label>
                        </div>
                        <div className="input-field col s6">
                            <label>What type of community?</label>
                            </div>
                            <div className="input-field col s3">
                            <select className="browser-default" type="text" onChange={this.changeType}  value={this.state.type} >
                                <option value="undefined"></option>
                                <option value="competitive">competitive</option>
                                <option value="casual">casual</option>
                                <option value="combination">combination</option>
                            </select>
                        </div>
                        <div className="inline-field">
                                        
                                        <div className="input-field col s6">
                                            <textarea id="textarea2" className="materialize-textarea" data-length="400" onChange={this.changeDescription}  value={this.state.description} ></textarea>
                                            <label htmlFor="textarea2">Description</label>
                                        </div>
                                    </div>
                        
                    </div>
                    <button onClick={this.submitButton} className="btn btn-primary btn-lg -x-full-width blue">Submit Your Community</button>

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
        communityAction:communityAction
    },dispatch)
}
 
export default connect(mapStateToProps,mapDispatchToProps)(newCommunity);