import React, {Component} from 'react';
import Communities from '../Utility/Communities';
import axios from 'axios';




class theCommunity extends Component {
    state = {communities: []}
    async componentDidMount(){
        const allCommunities = axios.get(`${window.apiHost}/community`)
        allCommunities.then((resp)=>{
            const communities = resp.data;
            this.setState({
                communities
            })
        })
        
    }
    render() { 
        
        return ( <div className="col s3">
            <h1>Communities</h1>
            <Communities communities ={this.state.communities}/>
        </div> );
    }
}
 
export default theCommunity;