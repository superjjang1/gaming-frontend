import React, {Component}from 'react';
import './NavBar.css';
import {Link} from 'react-router-dom';

class NavBar extends Component {

    render() { 
        return (<> 
            <div className = "container-fluid nav">
                <div className="row">
                    <nav className="black">
                        <div className = "nav-wrapper">
                            <Link to="/" className="left">AtlGaming</Link>
                            <ul id="nav-mobile" className ="right">
                                <li className = "nav-item">
                                    <Link to="/tournaments">Tournaments</Link>
                                </li>
                                <li className = "nav-item">
                                    <Link to="/community">Community(events)</Link>
                                </li>
                                <li className = "nav-item">
                                    <Link to="/register">Register</Link>
                                </li>
                                <li className = "nav-item">
                                    <Link to="/login">Login</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
         </>);
    }
}
 
export default NavBar;