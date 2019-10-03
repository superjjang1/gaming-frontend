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
                        <a className="btn btn-primary btn-lg -x-full-width blue" href="/tournaments/new">create tournament</a>
                        <a className="btn btn-primary btn-lg -x-full-width red" href="/community">create community</a>
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