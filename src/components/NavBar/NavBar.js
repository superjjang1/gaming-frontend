import React, {Component}from 'react';
import './NavBar.css';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import logoutAction from '../../actions/logoutAction';

class NavBar extends Component {
    buildNavLinks = () =>{
        console.log(this.props);
        let navLinks = "";
        if(!this.props.auth.token){
            navLinks = 
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
        }else {
            navLinks = 
            <ul id="nav-mobile" className ="right">
                <li className ="non-nav-item">
                    Welcome, {this.props.auth.displayname}
                </li>
                <li className = "nav-item">
                    <Link to="/tournaments">Tournaments</Link>
                </li>
                <li className = "nav-item">
                    <Link to="/community">Community(events)</Link>
                </li>
                <li className = "nav-item">
                    <Link to="/my-account">My Account</Link>
                </li>
                <li className = "nav-item" onClick={this.props.logout} >
                    Logout
                </li>
            </ul>
        }
        return navLinks
    }
    render() { 
        let navColor="transparent";
        if(this.props.location.pathname !=='/') {
            navColor = "transparent"
        }
        const navLinks = this.buildNavLinks();
        return (<> 
            <div className = "container-fluid nav">
                <div className="row">
                    <nav className={navColor}>
                        <div className = "nav-wrapper">
                            <Link to="/" className="left">AtlGaming</Link>
                            {navLinks}
                        </div>
                    </nav>
                </div>
            </div>
         </>);
    }
}
 
function mapDispatchToProps(dispatch){
    return bindActionCreators({
        logout: logoutAction
    },dispatch)
}

function mapStateToProps(state){
    return {
        auth: state.auth
    }
}
 
// export default NavBar;
export default connect(mapStateToProps,mapDispatchToProps)(NavBar);