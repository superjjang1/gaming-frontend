import React, {Component} from 'react';
import './Home.css';

class Home extends Component {

    render() { 
        return (<> 
            <div className ="container-fluid">
                <div className="bill-board -landing home">
                    <div className="title">
                        <h1>Competitive fun</h1>
                        <p className="lead">"Find others to play video games with, or organize how your games are played with friends.</p>
                    </div>
                    <div className="actions">
                        <a class="btn btn-primary btn-lg -x-full-width" href="/tournaments">create tournament</a>
                        <a class="btn btn-primary btn-lg -x-full-width" href="/community">create community</a>
                    </div>
                </div>
            </div>
         </>);
    }
}
 
export default Home;