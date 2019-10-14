import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import axios from 'axios';
import './myAccount.css';
import {Button} from 'react-materialize';
import accountAction from '../../actions/accountAction';




class myAccount extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            
            profile:"",
            bannerUrl:"",
            profileUrl:"",

            
        }
    }
    changeProfileUrl = (e)=>{
        this.setState({profileUrl: e.target.files[0]})
    }
    changeBannerUrl = (e) =>{
        console.log(e.target)
        this.setState({bannerUrl: e.target.files[0]})
    }
    changeDescription = (e) =>{
        this.setState({profile: e.target.value})
    }
    onButtonClick = (e)=>{
        e.preventDefault();
    this.refs.fileUploader1.click() 
    }
    onButtonClick2 =(e)=> {
        e.preventDefault();
        this.refs.fileUploader.click()
    }
    submitAccount = async (e) =>{
        e.preventDefault();
        // console.log(this.props.auth)
        // const file = document.getElementById('banner-image').files[0];
        // const file2 = document.getElementById('profile-image').files[0];
        const file = this.state.profileUrl;
        const file2 = this.state.bannerUrl;
        console.log(file2);
        console.log(file);
        const headerConfig = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        const data = new FormData();
        // data.append('profileImage',file2);
        // data.append('bannerImage',file);
        // console.dir(file);

        for(let key in this.state){
            data.append(key,this.state[key])
        }
        data.append("token",this.props.auth.token)
        // console.dir(file,file2)
        const submitAccountUrl = `${window.apiHost}/my-account/edit`
        // let dataToSend = {...data,...this.state, token:this.props.auth.token};
        // const axiosResponse = await axios.post(submitAccountUrl,dataToSend)
        // console.log(axiosResponse.data)
        console.log(data);
        axios.post(submitAccountUrl, data, headerConfig)

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
                        <input id="banner-image" type="file" ref="fileUploader1" accept="image/*" style={{display:"none"}} onChange={this.changeBannerUrl}/>
                        <Button onClick={this.onButtonClick2} variant="contained" component="span" className="btn right"  >Upload</Button>
                        {/* <p onClick={this.onButtonClick2}>submit banner</p> */}
                    </div>
                    </div>
                    <div className="profileContainer row">
                        <div className="col s3">
                                <div className="profileuploader">
                            <img src="https://secure.gravatar.com/avatar/e711f05f912d97a74f5860381c6f57ef?r=r&s=256&d=https://s3.amazonaws.com/challonge_app/misc/challonge_fireball_gray.png" alt="profile" className="circle left"/>
                            <div className="profileName left">{this.props.auth.displayname}</div>
                                <input id="profile-image" type="file" ref="fileUploader" accept="image/*" style={{display:"none"}} onChange={this.changeProfileUrl}/>
                        <Button onClick={this.onButtonClick} variant="contained" component="span" className="btner right">+</Button>
                        {/* <p onClick={this.onButtonClick}>submit profile</p> */}
                                </div>
                        </div>
                        <div className="col s9 left">
                            <div className="description">
                                <div className="input-field col s12">
                                    <textarea id="textarea2" className="materialize-textarea" data-length="400" onChange={this.changeDescription}  value={this.state.profile} ></textarea>
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