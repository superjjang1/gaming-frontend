import React, {Component}from 'react';
import './NavBar.css';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import logoutAction from '../../actions/logoutAction';
import {NavLink} from 'react-router-dom';


class NavBar extends Component {
    
    buildNavLinks = () =>{
        


        let navLinks = "";
        if(!this.props.auth.token){
            navLinks = 
            <div id="nav-mobile" className ="nav-wrapper right">
                
                <NavLink className = "nav-item" to="/tournaments">
                    {/* <Link to="/tournaments">Tournaments</Link> */}Tournaments
                </NavLink>
                <NavLink className = "nav-item" to="/community">
                    {/* <Link to="/community">Community(events)</Link> */}Community
                </NavLink>
                <NavLink className = "nav-item hide-on-small-and-down" to="/register">
                    {/* <Link to="/register">Register</Link> */}Register
                </NavLink>
                <NavLink className = "nav-item" to="/login">
                    {/* <Link to="/login">Login</Link> */} Login
                </NavLink>
            </div>
        }else {
            navLinks = 
            <div id="nav-mobile" className ="nav-wrapper right">
                      <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>

                <NavLink className ="non-nav-item">
                    Welcome, {this.props.auth.displayname}
                </NavLink>
                <NavLink className = "nav-item" to="/tournaments">
                    {/* <Link to="/tournaments">Tournaments</Link> */}Tournaments
                </NavLink>
                <NavLink className = "nav-item" to="/community">
                    {/* <Link to="/community">Community(events)</Link> */}Community
                </NavLink>
                <NavLink className = "nav-item" to="/my-account/">
                    {/* <Link to="/my-account/">My Account</Link> */}Account
                </NavLink>
                <NavLink className = "nav-item" onClick={this.props.logout} >
                    Logout
                </NavLink>
            </div>
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
                            <Link to="/" className="left">GameTime</Link>
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