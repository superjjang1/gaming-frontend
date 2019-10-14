import React, {Component} from 'react';
import './Home.css';
import {Link} from 'react-router-dom';
import TheCommunity from '../community/theCommunity';

class Home extends Component {

    render() { 
        return (<> 
            <div className ="container-fluid">
                <div className="bill-board -landing home">
                    <div className="row">
                        <h1 className="white-text">Competitive fun</h1>
                        <h3>
                            <p className="deep-purple-text text-lighten-3 z-depth-4">"Find others to play video games with, or organize how your games are played with friends."</p>
                            </h3>
                    </div>
                    <hr/>
                    <div className="col">
                        <br/>
                        <br/>
                        
                        <Link className="btn btn-primary btn-lg -x-full-width blue" to="/tournaments/new">create tournament</Link>
                        <Link className="btn btn-primary btn-lg -x-full-width red" to="/community/new">create community</Link>
                    </div>
                    {/* <div className="placeholder">
                        <img className="img" src="" alt="some bracket looking thing" />
                    </div> */}
                </div>
                <section className="featured-content">
                    <div className="container-fluid">
                        <div className="featured-content">
                            <div>
                                <TheCommunity/>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
         </>);
    }
}
 
export default Home;