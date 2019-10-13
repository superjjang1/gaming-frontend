import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import registerAction from '../../actions/registerAction';
import './RegisterComponent.css'


class RegisterComponent extends React.Component {
    state = {
        email: "",
        displayname: "",
        first: "",
        last: "",
        pass: "",
        msg: ""
    }
    componentDidUpdate(prevProps,prevState){
        if((this.props.auth.msg === 'userExists')&&(prevProps.auth.msg !== 'userExists')){
            this.setState({
                msg: "This user already exists, please log in or create a new account."
            })
        }else if((this.props.auth.msg ==='userAdded')&&(prevProps.auth.msg !== 'userAdded')){
            this.props.history.push('/')
        }
    }
    changeEmail = (e) => {
        this.setState({email: e.target.value})
    }
    changeDisplayName = (e) => {
        this.setState({displayname: e.target.value})
    }
    changeFirst = (e) => {
        this.setState({first: e.target.value})
    }
    changeLast = (e) => {
        this.setState({last: e.target.value})
    }
    changePass = (e) => {
        this.setState({pass: e.target.value})
    }
    submitSignUp = (e) =>{
        e.preventDefault();
        // console.log(`Name:${this.state.first} ${this.state.last}`)
        // console.log(`Email:${this.state.email}`)
        // console.log(`Pass:${this.state.password}`)
        //assume the data is valid,
        //if we run into invalid data, switch to false.
        let formValid = true;
        let msg = "";
        for(let key in this.state){
            if((this.state[key].length <1)&&(key !== 'msg')){
                formValid = false;
                msg = `${key} field is required`
                break;
            }
        }
        if(this.state.pass.toLowerCase() === this.state.pass){
            // user doesn't have any uppercase characters
            formValid = false;
            msg = "Your password, must contain at least 1 uppercase letter";
            //check to see if there is a number in the password using regex
        }else if(!(/\d/.test(this.state.pass))){
            formValid = false;
            msg = "Your password, must contain atleast one number."
        }
        if(formValid){
            const userData={...this.state}
            this.props.registerAction(userData);
            this.props.history.push('/');
        }else{
            this.setState({
                msg
            })
        }
    }
    render() { 
        return (<> 
        <div className="session-layout">
            <div className="container">
                <div className="signup-side">
                    <div className="text">
                        <p>Sign up and start playing</p>
                    </div>
                </div>
                <div className="register-form">
                    <p className="form-msg">{this.state.msg}</p>
                    <form onSubmit={this.submitSignUp}>
                        <input onChange={this.changeEmail} value={this.state.email} className="email-signup" placeholder="Email address" />
                        <input onChange={this.changeDisplayName} value={this.state.displayname} className="display-signup" placeholder="Display name" />
                        <input onChange={this.changeFirst} value={this.state.first} className="first-signup" placeholder="First name" />
                        <input onChange={this.changeLast} value={this.state.last} className="last-signup" placeholder="Last name" />
                        <input onChange={this.changePass} value={this.state.pass} className="password-signup" placeholder="Password" type="password" />
                        <button className="sign-up-button">Sign up</button>
                    <div className="border-rule"></div>
                        <div className="login-text align-left">Already have an AtlGaming account? <button className="btn-primary" onClick={()=>{this.props.history.push('/login')}}>Log in</button></div>
                    </form>
                </div> 
            </div>

        </div>
         </>);
    }
}
function mapStateToProps(state){
    return{
        auth: state.auth
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        registerAction
    },dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(RegisterComponent);
