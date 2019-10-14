import React, {Component} from 'react';
import loginAction from '../../actions/loginAction';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import './Login.css';

class Login extends Component {
    state = {
        email:"",
        password:"",
        msg:""
    }
    componentDidUpdate(prevProps, prevState){
        if ((this.props.auth.msg === 'badpass')&&(prevProps.auth.msg !== 'badpass')){
            this.setState({
                msg: "You've entered the wrong password"
            })
        }else if((this.props.auth.msg ==='loggedIn')&&(prevProps.auth.msg !== 'loggedIn')){
            //user was added, close the modal.
            this.props.history.push('/');
        }else if((this.props.auth.msg ==='noEmail')&&(prevProps.auth.msg !== 'noEmail')){
            //user was added, close the modal.
            this.setState({
                msg:"this email isn't registered"
            })
        }
    }
    changeEmail = (e) => {
        this.setState({email: e.target.value})
    }
    changePass = (e) => {
        this.setState({password: e.target.value})
    }
    submitLogin = (e) => {
        e.preventDefault();
        const formData = {...this.state};
        this.props.login(formData);
    }
    
    render() { 
        return (
            <div className = "session-layout">
                <div className="container">
                    <div className="login-side">
                        <p>Welcome back, please log-in. </p>
                    </div>
                    <div className="login-form">
                        <form onSubmit={this.submitLogin}>
                            <p className="red-text">{this.state.msg}</p>
                            <input onChange={this.changeEmail} value={this.state.email} className="email-signup white-text" placeholder="Email address" />
                            <input onChange={this.changePass} value={this.state.password} className="password-signup white-text" placeholder="Password" type="password"/>
                            <button className="sign-up-button">Log In</button>
                            <div className="border-rule"></div>
                            <div className="login-text align-left">Don't have an account? <button onClick={()=>{this.props.history.push('/register')}} >Sign Up</button></div>
                        </form>
                    </div>
                </div>
            </div> 
         );
    }
}

function mapStateToProps(state){
    return {
        auth: state.auth
        //pulling state.auth from the store, and putting in in the props

    }
}
function mapDispatchToProps(dispatch){
    //bindActionCreators = make our otherwise simple function
    //an action creator
    return bindActionCreators({
        login: loginAction
    },dispatch)
}


// export default Login;
export default connect(mapStateToProps,mapDispatchToProps)(Login);