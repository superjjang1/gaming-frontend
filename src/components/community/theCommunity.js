import React, {Component} from 'react';
import Communities from '../Utility/Communities';
import axios from 'axios';




class TheCommunity extends Component {
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
            <div className="row">

            <Communities communities ={this.state.communities}/>
            </div>
        </div> );
    }
}
 
export default TheCommunity;