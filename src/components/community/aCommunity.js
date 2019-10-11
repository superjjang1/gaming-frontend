import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';


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
    render() { 
        const { name , type , description, displayname } = this.state.community
        console.log(name, type, description, displayname)

        return (<> 
            <div className="container-fluid">
                <div>
                    <h1>Welcome to {name}</h1>
                </div>
                <div className="row">
                    <div className="col s6">What type of group? : <br/>{type} group</div>
                    <div className="col s6">Description: <br/>{description}</div>
                    <div className="col s12">creator: {displayname}</div>
                </div>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                
                <Link className="btn btn-primary btn-lg -x-full-width blue" to="/community">Go Back</Link>
            </div>
         </>);
    }
}
 
export default CommunityId;
