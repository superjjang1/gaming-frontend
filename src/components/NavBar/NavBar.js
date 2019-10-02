import React, {Component}from 'react';
import './NavBar.css';
import {Link} from 'react-router-dom';

class NavBar extends Component {

    render() { 
        return (<> 
            <div className = "container-fluid nav">
                <div className="row">
                    hello, it's a nav
                </div>
            </div>
         </>);
    }
}
 
export default NavBar;