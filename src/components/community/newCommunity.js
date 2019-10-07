import React, {Component} from 'react';
import {connect} from 'react-redux';
import './newCommunity.css';
import axios from 'axios';
import {Select} from 'react-materialize';


class newCommunity extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name: "",
            type:"",
            description:""
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
    render() { 
        return (<> 
        <div className="session-layout">
            <div className="row-wrap">
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="community-name" type="text" className = "validate"/>
                            <label htmlFor="community-name">Community name</label>
                        </div>
                        <div className="input-field col s6">
                            <label>What type of community?</label>
                            </div>
                            <div className="input-field col s3">
                            <select className="browser-default" type="text">
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
                    <button className="btn btn-primary btn-lg -x-full-width blue">Submit Your Community</button>

                </form>
            </div>
        </div>
                
         </>);
    }
}
 
export default newCommunity;