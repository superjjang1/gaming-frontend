import React, {Component} from 'react';
import communityCard from '../Utility/communityCards';
import axios from 'axios';




class theCommunity extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div className="col s3">
            <h1>hello?</h1>
            <communityCard/>
        </div> );
    }
}
 
export default theCommunity;