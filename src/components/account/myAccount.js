import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import axios from 'axios';
import './myAccount.css';
import {Button, Icon} from 'react-materialize';
import accountAction from '../../actions/accountAction';




class myAccount extends Component {
    constructor(props) {
        super(props);
        this.onButtonClick = this.onButtonClick.bind(this);
        this.state = { 
            profileUrl: "",
            bannerUrl:"",
            description:"",
            
        }
    }
    changeProfileUrl = (e)=>{

    }
    changeBannerUrl = (e) =>{

    }
    changeDescription = (e) =>{
        this.setState({description: e.target.value})
    }
    submitAccount = async (e) =>{
        e.preventDefault();
        console.log(this.props.auth)
        const file = document.getElementById('banner-image').files[0];
        const file2 = document.getElementById('profile-image').files[0];
        const headerConfig = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        const data = new FormData();
        for(let key in this.state){
            data.append(key, this.state[key])
        }
        console.dir(file,file2)
        const submitAccountUrl = `${window.apiHost}/my-account/edit`
        data.append('token',this.props.auth.token);
        const axiosResponse = await axios.post(submitAccountUrl,data)
        console.log(axiosResponse.data)

    }
    onButtonClick (e){
    this.refs.fileUploader.click() 
   }
   componentDidMount(){
       if(!this.props.auth.token){
           localStorage.setItem('loginPage','/my-account/edit')
           this.props.history.push('/login')
       }
   }
    render() { 
        
        return (<> 
            <div className="container-fluid">
                <form onSubmit={this.submitAccount}>

                <div className="topContainer">
                    <div className="cover_image">
                    <img src="https://assets.challonge.com/assets/community_default_banners/default-cover-2-5cbf4c336b4a4d936909484c52f86909c7693aaac60209ffd084583347695bb2.svg" alt="banner"/>
                    <div className="uploader" >
                        <input id="banner-image" type="file" ref="fileUploader" accept="image/*" style={{display:"none"}}/>
                        <Button onClick={this.onButtonClick.bind(this)} variant="contained" component="span" className="btn right">Upload</Button>
                    </div>
                    </div>
                    <div className="profileContainer row">
                        <div className="col s3">
                                <div className="profileuploader">
                            <img src="https://secure.gravatar.com/avatar/e711f05f912d97a74f5860381c6f57ef?r=r&s=256&d=https://s3.amazonaws.com/challonge_app/misc/challonge_fireball_gray.png" alt="profile" className="circle left"/>
                            <div className="profileName left">{this.props.auth.displayname}</div>
                                <input id="profile-image" type="file" ref="fileUploader" accept="image/*" style={{display:"none"}}/>
                        <Button onClick={this.onButtonClick.bind(this)} variant="contained" component="span" className="btner right">+</Button>
                                </div>
                        </div>
                        <div className="col s9 left">
                            <div className="description">
                                <div className="input-field col s12">
                                    <textarea id="textarea2" className="materialize-textarea" data-length="400" onChange={this.changeDescription}  value={this.state.description} ></textarea>
                                    <label htmlFor="textarea2">400 Character limit</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Button>Submit</Button>
                </form>
            </div>
         </>);
    }
}
function mapStateToProps(state){
    return {
        auth: state.auth
    }
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({
        accountAction:accountAction
    },dispatch)
}
 
export default connect(mapStateToProps,mapDispatchToProps)(myAccount);