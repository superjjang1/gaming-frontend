import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import communityAction from '../../actions/communityAction';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
// import { join } from 'path';


class CommunityId extends Component {
    constructor(props) {
        super(props);
        this.state = { community: [] }
    }
    async componentDidMount(){
        const aCommunity = this.props.match.params.communityId
        console.log(aCommunity);
        const url = `${window.apiHost}/community/${aCommunity}`
        const axiosResponse = await axios.get(url)
        this.setState({
            community: axiosResponse.data
        })
        console.log(axiosResponse.data)

    }
    onJoin =(e)=>{
        const joinCommunityUrl = `${window.apiHost}/community/:communityId`
        let dataToSend = {...this.state, token:this.props.auth.token}
        console.log(dataToSend);
        axios.post(joinCommunityUrl,dataToSend)
        console.log(this.props);
        this.props.history.push('/:communityId');
    }
    render() { 
        const { name , type , description, displayname } = this.state.community
        console.log(name, type, description, displayname)
        console.log(this.state.community);

        return (<> 
            <div className="container-fluid">
                <div>
                    <h1>Welcome to {name}</h1>
                </div>
                <div className="row">
                    <div className="col s6">What type of group? : <br/>{type} group</div>
                    <div className="col s6">Description: <br/>{description}</div>
                    <div className="col s12">creator: {displayname}</div>
                    <div className="col s12">joined: {displayname}</div>
                </div>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <button onClick={this.onJoin} className="btn btn-primary btn-lg -x-full-width red">don'tclickyet</button>
                
                <Link className="btn btn-primary btn-lg -x-full-width blue" to="/community">Go Back</Link>
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
export default connect(mapStateToProps,mapDispatchToProps)(CommunityId);
