import React, {Component} from 'react';
import './Home.css';
import {Link} from 'react-router-dom';

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
                        <Link className="btn btn-primary btn-lg -x-full-width blue" to="/tournaments/new">create tournament</Link>
                        <Link className="btn btn-primary btn-lg -x-full-width red" to="/community">create community</Link>
                    </div>
                    <div className="placeholder">
                        <img className="img" src="" alt="some bracket looking thing" />
                    </div>
                </div>
                <section className="featured-content">
                    <div className="container-fluid">
                        <div className="featured-content">
                            <div><h1>something will go here eventually</h1></div>
                        </div>
                    </div>
                </section>
            </div>
         </>);
    }
}
 
export default Home;