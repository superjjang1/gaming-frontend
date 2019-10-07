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
                </form>
            </div>
        </div>
                
         </>);
    }
}
 
export default newCommunity;